import Vue from 'vue';
import { upperFirst, camelCase } from 'lodash';
const requireComponent = require.context('./', false, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
  Vue.component(componentName, componentConfig.default || componentConfig);
});