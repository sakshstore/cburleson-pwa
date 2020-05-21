a`npm run stencil generate <component-name (e.g. app-mycomponent)>`

or...

`stencil generate <component-name>` (if stencil is installed globally) 

`npx stencil generate <component-name>` (if stencil is not installed globally)

Example:

`npx stencil generate 2020/hide-gizmos-in-unity`

After creation, for page/post components, you should remove the `shadow: true` attribute from the `@Component` annotation...

```
@Component({
  tag: 'page-hide-gizmos-in-unity',
  shadow: true,
})
```