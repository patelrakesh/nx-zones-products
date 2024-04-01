// Define a TypeScript type called CustomFetchOptions to specify options for a custom fetch function.

export type CustomFetchOptions = {
  // Specify an optional 'body' property that can be of type RequestInit['body']
  // or a Record<string, any> object (an object with string keys and any values).
  body?: RequestInit['body'] | Record<string, any>;

  // Specify an optional 'cacheOption' property that can be of any type.
  cacheOption?: any;

  // Specify an optional 'headers' property that can be of type:
  // 1. Array of tuples where each tuple contains two strings (e.g., [['Content-Type', 'application/json']])
  // 2. Record<string, string> object (an object with string keys and string values)
  // 3. Headers object (part of the Fetch API for HTTP headers)
  headers?: [string, string][] | Record<string, string> | Headers;

  // Specify an optional 'retryAttempts' property that should be a number indicating the number of retry attempts.
  retryAttempts?: number;

  // Specify an optional 'retryDelay' property that should be a number indicating the delay (in ms) between retry attempts.
  retryDelay?: number;

  // Optional callback function triggered when a api calls attempt fails.
  // Parameters:
  //   - attemptCount: The number of retry attempts made so far.
  // Returns: void
  onApiFailedCallback?: (attemptCount: number) => void;

  // Optional callback function triggered when a retry attempt starts.
  // Parameters:
  //   - attemptCount: The number of retry attempts made so far.
  // Returns: void
  onRetryCallback?: (attemptCount: number) => void;
};
