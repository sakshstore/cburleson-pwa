// See: Environment variables with StencilJS
// https://medium.com/stencil-tricks/environment-variables-with-stenciljs-57e9da591280

// The interface which define the list of variables
export interface EnvironmentConfig {
    debug: boolean;
    siteName: string;
    recordAnalytics: boolean;
    siteVersion: string;
}

export function mySetupConfig(config: EnvironmentConfig) {
    
    if (!window) {
        return;
    }

    const win = window as any;
    const MyPWA = win.MyPWA;

    if (MyPWA && MyPWA.config &&
        MyPWA.config.constructor.name !== 'Object') {
        console.error('DeckMyPWA config was already initialized');
        return;
    }

    win.MyPWA = win.MyPWA || {};
    win.MyPWA.config = {
        ...win.MyPWA.config,
        ...config
    };

    return win.MyPWA.config;

}