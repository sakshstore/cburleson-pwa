export const SITENAME = "Cody Burleson";
export const SITEVERSION = "1.5.22";
export const DISQUS_SHORTNAME = "codyburleson-com";

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
