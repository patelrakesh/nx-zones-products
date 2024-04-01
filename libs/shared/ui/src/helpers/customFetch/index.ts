import { NEXT_NO_CACHE_OPTION } from '../../constants/nextCacheOption';
import CustomFetchError from './CustomFetchError';
import { responseOrThrowError, isJSONResponse } from './utils';
import { CustomFetchOptions } from './type';

export const RETRY_STATUS_CODES = [0, 500, 502, 503, 504]; // Retry status codes

const customFetch = async (
  url: string, // API endpoint URL
  type: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET', // HTTP request type, default is GET
  options: CustomFetchOptions = {} // Custom fetch options, default is an empty object
) => {
  let attempts = 0; // Number of retry attempts
  const {
    retryAttempts = 0, // Maximum retry attempts, default is 0 (no retries)
    retryDelay = 500, // Delay between retries in milliseconds, default is 500ms
    headers, // Custom headers for the request
    body, // Request body
    cacheOption = NEXT_NO_CACHE_OPTION, // Cache option, default is NEXT_NO_CACHE_OPTION,
    onRetryCallback, //  callbak function for on api retry start
    onApiFailedCallback, // callbak function for on Api Failed
  } = options;

  const customHeaders = {
    'Content-Type': 'application/json', // Default content type
    ...headers, // Merge custom headers from options
  };

  const requestOptions: any = {
    method: type, // HTTP request method
    headers: customHeaders, // Custom headers for the request
    ...options, // Merge other request options from options
  };

  // Setting next cache option for GET requests
  if (type === 'GET' && cacheOption) {
    requestOptions.next = cacheOption;
  }

  // Setting request body for non-GET requests
  if (body && type !== 'GET') {
    requestOptions.body = JSON.stringify(body); // Convert body to JSON string
  }

  // Function to check if error is retryable
  const checkRetryable = (error: CustomFetchError) => {
    return (
      attempts < retryAttempts && // Check if retry attempts are within limit
      (error instanceof TypeError || RETRY_STATUS_CODES.includes(error?.status)) // Check if error is retryable
    );
  };

  // Function to retry the request
  const retry = async () => {
    await new Promise(resolve => setTimeout(resolve, retryDelay)); // Wait for retry delay

    // triggering callbak function for on api retry start
    if (onRetryCallback) onRetryCallback(attempts);
    console.info(`Retrying due to api failue - `, attempts); // Todo: replace with logging info

    return fetchWithRetry(); // Retry the request
  };

  // Function to fetch with retry logic
  const fetchWithRetry = async (): Promise<Record<string, any> | null> => {
    try {
      const startTime = new Date().getTime();
      // const apiResponseLabel = `api-response-${Date.now()}`; // Label for API response timing
      // console.time(apiResponseLabel); // Start timing API response

      const response = await fetch(url, requestOptions); // Perform the fetch request

      let responseData: Record<string, any> | null = null; // Initialize response data variable

      // Check if response is JSON
      if (isJSONResponse(response)) {
        responseData = await response.json(); // Parsing JSON response it is a async function
      }

      console.log(`URL: ${url} - `, new Date().getTime() - startTime, 'ms'); // Log the URL
      // console.timeEnd(apiResponseLabel); // End timing API response

      return responseOrThrowError(response, responseData); // Handle response or throw error
    } catch (error: any) {
      // triggering callbak function for on Api Failed
      if (onApiFailedCallback) onApiFailedCallback(attempts);
      console.log('API attempt failed =>', attempts); // Todo: replace with logging error

      const isRetryable = checkRetryable(error); // Check if error is retryable

      if (isRetryable) {
        // Increment retry attempt counter
        attempts += 1;

        return retry(); // Retry the request
      }
      throw error; // Throw error if not retryable
    }
  };

  return fetchWithRetry(); // Return the fetch with retry logic
};

export default customFetch; // Export custom fetch function
