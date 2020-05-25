// SITEVERSION must always be line #2 because it is replaced by line number
export const SITEVERSION = "1.9.1";
export const SITENAME = "Cody Burleson";

/**
 * This function uses the window object to determine whether 
 * the app is running on localhost. It is intended to be used 
 * for things like debug logging (where we should only log 
 * if the function returns true)  
 */
export function isLocal() {
  let result = true;
  if (window.location.hostname !== 'localhost') {
    result = false;
  }
  return result;
}

export function extractIdFromDocumentPath(){
  let path = document.location.pathname;
  // FIX FOR ISSUE #83...
  if(path.slice(-1) === '/') { // If path ends in trailing slash,
      path = path.substring(0, path.length - 1); // then remove trailing slash from the path
  }
  return path.substring( path.lastIndexOf('/') + 1 );
}

/**
 * Checks the given HTTP fetch response status for OK. 
 * This helper method is useful when you want to use try/catch with HTTP fetch.
 * Since any response is considered a successful response, it will not throw 
 * an error. To throw an error, we need to actually look at the status of
 * response.ok. Use this helper method in the following way:
 * 
 * try {
 *     const response = await fetch('/assets/data/site-data.json?v=' + SITEVERSION);
 *     const json = await response.json();
 *     handleFetchErrors(response);
 *     // ...
 * } catch (err) {
 *     console.log(err);
 * }
 * 
 * This can also be used with a POST type fetch...
 * 
 * try {
 *     const response = await fetch("https://someapi.com/comments", {
 *         method: "POST",
 *         body: JSON.stringify(data),
 *         headers: {
 *             "Content-Type": "application/json"
 *         }
 *     });
 *     handleFetchErrors(response);
 *     console.log(await response.json());
 * } catch(err) {
 *     console.log(err);
 * }
 * 
 * For more details, see the following YouTube video: 
 * [GET/POST Requests in StencilJS with the Fetch API](https://www.youtube.com/watch?v=ZtnQ3lD64Uo)
 * 
 * @param response 
 */
export function handleFetchErrors(response) {
  if(!response.ok) {
      throw new Error(response.statusText);
  }
}

/**
 * Extracts the id of a document (what I call, the slug) from a URL kind of path string.
 * The resulting id can then be used to look up a doc header in site-data using the Blog 
 * Service, for example.
 * @param path
 */
export function extractDocIdFromPath(path:string) {
      // Fist, if given path ends with fwd-slash, strip that off...
      if(path.endsWith("/")) {
        path = path.substring(0, path.length - 1);
      }
      // Now get the slug preceding the last slash remaining in the path...
      let lastNdx = path.lastIndexOf('/');
      return path.substring(lastNdx + 1);
}