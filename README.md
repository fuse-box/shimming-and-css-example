# shimming-and-css-example

An example how to shim jquery and "fix" a required css from npm


```js
import "jstree/dist/jstree.js";
import "jstree/dist/themes/default/style.css";
```
FuseBox will automatically copy resources from the target css `jstree/dist/themes/default/style.css`
re-write paths and create `css-resources` folder

```
npm install
```

Visit `http://localhost:7775/`
