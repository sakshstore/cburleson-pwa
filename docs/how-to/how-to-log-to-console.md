# How to Log to Console

Add the following lines in the component file, outside of the component's class definition...

```
import { EnvironmentConfigService } from '../../services/environment/environment-config.service';
const debug: boolean = EnvironmentConfigService.getInstance().get('debug');
```

Then, anywhere you need to log, you canm do it this way:

```
if (debug) {
    console.log('>> PageArt.componentWillLoad');
}
```