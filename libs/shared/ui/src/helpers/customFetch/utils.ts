import CustomFetchError from './CustomFetchError';

export const JSON_MIME_TYPE = 'application/json'; // JSON MIME type

// Function to handle response or throw an error if there's one
export const responseOrThrowError = (
  response: Response, // HTTP response object
  responseData: Record<string, any> | null // Response data, can be null
) => {
  /**
   * Handling HTTP error responses for non 200
   * If the response's 'ok' property is false, it indicates an HTTP error (status code >= 400).
   */
  if (!response.ok) {
    throw new CustomFetchError(response, responseData); // Throw a custom fetch error
  }

  /**
   * Handling HTTP error with 200 responses
   * If the response's 'ok' but has errorCode key, it indicates an HTTP error.
   */
  // TODO: We need to change this after obtaining the actual API signature.
  if (responseData?.errorCode) {
    // Check if there's an 'errorCode' key in the response data
    throw new CustomFetchError(response, responseData); // Throw a custom fetch error
  }

  return responseData; // Return the response data if no errors
};

// Function to check if the response is in JSON format
export const isJSONResponse = (response: Response) => {
  const contentType = response.headers.get('content-type') ?? ''; // Get the content type header
  return contentType.includes(JSON_MIME_TYPE); // Check if JSON MIME type is included in the content type
};
