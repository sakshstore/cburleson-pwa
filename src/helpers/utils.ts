// SITEVERSION must always be line #2 because it is replaced by line number
export const SITEVERSION = "1.8.1";
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