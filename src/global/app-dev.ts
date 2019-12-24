import '@ionic/core';
// import { setupConfig } from '@ionic/core';
import { mySetupConfig } from '../services/environment/environment-config'

export default () => {
  // setupConfig({
  //   mode: 'ios'
  // });
  mySetupConfig({
    debug: true,
    recordAnalytics: false,
    siteName: 'Cody Burleson',
    siteVersion: '1.1.0'
  });
};
