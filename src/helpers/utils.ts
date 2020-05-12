// SITEVERSION must always be line #2 because it is replaced by line number
export const SITEVERSION = "1.7.7";
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
