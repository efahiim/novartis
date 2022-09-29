/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: any;
  }
}

/**
 * Function to push data layer for analytics.
 * @param eventCategory
 * @param eventAction
 * @param eventLabel
 */
export const DataLayerPush = (eventCategory: string, eventAction: string, eventLabel: string, nonInteraction = false): void => {
  if (typeof window !== 'undefined'){
    const windows: any = window;
    if(typeof windows.dataLayer == 'undefined'){
      windows.dataLayer = [];
      const checkGAStatus = (): void => {
        if(typeof windows.dataLayer !== 'undefined'){
          clearInterval(isGAReady);
          windows.dataLayer.push({
            event: 'customEvent',
            GAeventCategory: eventCategory,
            GAeventAction: eventAction,
            GAeventLabel: eventLabel,
            GAeventValue: 0,
            GAeventNonInteraction: nonInteraction
          });
        }
      };
      const isGAReady = setInterval(checkGAStatus, 2000);
    } else {
      windows.dataLayer.push({
        event: 'customEvent',
        GAeventCategory: eventCategory,
        GAeventAction: eventAction,
        GAeventLabel: eventLabel,
        GAeventValue: 0,
        GAeventNonInteraction: nonInteraction
      });
    }
  }
};
