// See: Environment variables with StencilJS
// https://medium.com/stencil-tricks/environment-variables-with-stenciljs-57e9da591280

import { EnvironmentConfig } from './environment-config';

export class EnvironmentConfigService {

    private static instance: EnvironmentConfigService;

    private m: Map<keyof EnvironmentConfig, any>;

    private constructor() {
        // Private constructor, singleton
        this.init();
    }

    static getInstance() {
        if (!EnvironmentConfigService.instance) {
            EnvironmentConfigService.instance =
                new EnvironmentConfigService();
        }
        return EnvironmentConfigService.instance;
    }

    private init() {
        if (!window) {
            return;
        }

        const win = window as any;
        const MyPWA = win.MyPWA;

        this.m = new Map<keyof EnvironmentConfig, any>(Object.entries(MyPWA.config) as any);
    }

    get(key: keyof EnvironmentConfig, fallback?: any): any {
        const value = this.m.get(key);
        return (value !== undefined) ? value : fallback;
    }
}