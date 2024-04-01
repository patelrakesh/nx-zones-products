class CustomFetchError extends Error {
  /**
   * Represents a custom error class for handling fetch-related errors.
   * Inherits from the built-in JavaScript Error class.
   */

  // Property to store the HTTP status code of the response that caused the error.
  status: number;

  // Property to store the response data associated with the error, if available.
  responseData: Record<string, any> | null;

  /**
   * Constructor for creating a new CustomFetchError instance.
   * @param response The HTTP response object that caused the error.
   * @param responseData Optional response data associated with the error.
   */
  constructor(response: Response, responseData: Record<string, any> | null) {
    // Destructure the status and statusText properties from the response object.
    const { status, statusText } = response;

    // Call the constructor of the base Error class with an error message.
    // Uses the statusText, responseData error code, or converts the status code to a string.
    super(statusText || responseData?.errorCode || String(status));

    // Set the name property of the error instance to 'CustomFetchError'.
    this.name = 'CustomFetchError';

    // Store the HTTP status code of the response that caused the error.
    this.status = response.status;

    // Store the response data associated with the error, if provided.
    this.responseData = responseData;
  }
}

// Export the CustomFetchError class as the default export of this module.
export default CustomFetchError;
