<div align="center">
  <br>
  <h1>Architectural Guidelines</h1>
  <h6>rules, conventions and recommendations to follow</h6>
</div>
<br>

<details>
<summary>TABLE OF CONTENTS (click to expand)</summary>

- [Conventions](#conventions)
  - [Naming](#naming)
- [Components](#components)
  - [Componentize](#componentize)
  - [Component Grouping](#component-grouping)
  - [Basic Component Structure](#basic-component-structure)
  - [Component Options Order](#component-options-order)
  - [Use of alias](#use-of-alias)
  - [Directive shorthands](#directive-shorthands)
  - [Use of `$emit`](#use-of-emit)
  - [Parent-Child Communications](#parent-child-communications)
    - [Component Parent Child](#component-parent-child)
    - [Component Parent Child Details](#component-parent-child-details)
- [Style](#style)
  - [Colors](#colors)
  - [Icons](#icons)
  - [Themes](#themes)
  - [Variables](#variables)
- [Vue Router](#vue-router)
  - [Lazy loading components](#lazy-loading-components)
  - [Routes Grouping](#routes-grouping)
  - [Usage](#usage)
  - [Data fetching](#data-fetching)
  - [Dynamic Route Matching](#dynamic-route-matching)
  - [Navigation guards](#navigation-guards)
  - [The Full Navigation Resolution Flow](#the-full-navigation-resolution-flow)
- [Vuex](#vuex)
  - [Core concepts](#core-concepts)
        - [Add the store to our root component](#add-the-store-to-our-root-component)
  - [State](#state)
  - [Getters](#getters)
  - [Mutations](#mutations)
  - [Actions](#actions)
  - [Modules](#modules)
  - [Components using the store](#components-using-the-store)
  - [Consuming APIs](#consuming-apis)
  - [Vuex Best practice](#vuex-best-practice)
- [Error Handling](#error-handling)
- [Security](#security)
- [Performance](#performance)
- [Resources](#resources)

</details>
<br>


# Conventions
<a href="#0">👆 Page Top</a>

These conventions are style related. Following them is highly recommended.

## Naming
Always give meaningful names. Do not use abbreviations.
<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```
components/
|- AllResults.vue
|- DataTableList.vue
|- AppDrawerContent.vue
```
</td>
<td>

```
components/
|- A.vue
|- DtList.vue
|- AdContent.vue
```
</td>
</tr>
</table>

Always use the right casing when naming.

| To Name | Appropriate Casing |
| ------- | ------------------ |
| Components | PascalCase |
| Components in DOM template | kebab-case or PascalCase |
| Prop (during declaration) | camelCase |
| Prop (in template)| kebab-case or camelCase |

# Components
<a href="#0">👆 Page Top</a>

<div align="center">

![Component Basic](./images/flowcharts/component-basic.svg)

</div>


You should reference the diagram above should you encounter any doubts about component lifecycle.

When creating new components, note the following guidelines and recommendations.

## Componentize
When should you *componentize* (i.e. make a component)? Whenever you find youself writing the same set of UI elements repeatedly, it is time to make a component. Please do create components when appropriate to keep the code DRY and simplify maintainance.

## Component Grouping
Components are grouped according to their functionalities. Decide which type a component is and place it in the corresponding directory within [components](src/components) folder.

```
components/
|- partials/ (houses components with partial functionalities)
|- templates/ (houses components with limited functionalities)
|- <global components> (big components that are used commonly)
```

## Basic Component Structure
Components should be structured in the sequence of `<template>` then `<script>`. If required, use `<style>` to add scoped styling. Adding common css in the [scss](scr/scss) directory is another option. See also: [Style](#Style).
<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```vue
<template>
  <v-app>
  </v-app>
</template>
<script>
  export default {
    // ...
  }
</script>
<style scoped>
</style>
```
</td>
<td>

```vue
<style scoped>
</style>
<script>
  export default {
    // ...
  }
</script>

<template>
  <v-app></v-app>
</template>
```
</td>
</tr>
</table>

## Component Options Order
Even though this is just a matter of style, following the [default ordering](https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended) of component options is recommanded as it is more consistent and easy to follow.

<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```javascript
// imports
import Example from "@/components/Example";
import someMixin from "@/mixins/someMixin";

// default options order
export default {
  name: "someName",
  components: {Example},
  mixins: {someMixin},
  props: {},
  data: {},
  computed: {},
  watch: {},
  
  // lifecycle events
  beforeCreated: {},
  created: {},
  beforeMount: {},
  mounted: {},
  beforeUpdate: {},
  updated: {},
  activated: {},
  deactivated: {},
  beforeDestroy: {},
  destroyed: {},

  methods: {},
}
```
</td>
<td>

```javascript
// imports
import Example from "@/components/Example";
import someMixin from "@/mixins/someMixin";

// incoherent ordering - NOT recommended
export default {
  props: {},
  components: {Example},
  watch: {},
  methods: {},

  data: {},
  destroyed: {},
  mixins: {someMixin},
  beforeCreated: {},
  updated: {},
  activated: {},
  deactivated: {},
  created: {},
  beforeMount: {},
  beforeDestroy: {},
  mounted: {},

  beforeUpdate: {},
  name: "someName",
  computed: {},
}
```
</td>
</tr>
</table>

## Use of alias
To reference the [`src`](/src) folder, please use `@`. This is easier to refactor and less error-prone then using `./` or `../`.
<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```vue
<template>
  <img src="@/assets/logo.svg">
</template>

<script>
import Example from "@/components/Example";

import "@/scss/main.scss";
</script>
```
</td>
<td>

```vue
<template>
  <img src="./../assets/logo.svg">
</template>

<script>
import Example from "./../../components/Example";

import "./../../scss/main.scss";
</script>
```
</td>
</tr>
</table>


## Directive shorthands
Using [directive shorthand](https://vuejs.org/v2/guide/syntax.html#Shorthands) is recommended. However, in the interest of consistency, always use full directive name or always use shorhand, but mixing full directive name and shorthand is not encouraged.

<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```vue
// v-bind
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
/>

// v-on
<input
  @input="onInput"
  @focus="onFocus"
/>

// v-slot
<template #header>
  <h1>Here might be a page title</h1>
</template>
```
</td>
<td>

```vue
// v-bind
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
/>

// v-on
<input
  @input="onInput"
  v-on:focus="onFocus"
/>

// v-slot
<template v-slot:header>
  <h1>Here might be a page title</h1>
</template>
```
</td>
</tr>
</table>

## Use of `$emit`
The aim is to "emit" a signal—a signal from a child component to notify a parent component that an event has taken place (for example, a click event). Typically, the parent component will then perform some sort of action, such as the execution of a function. See also: [How to Emit Data in Vue?](https://www.telerik.com/blogs/how-to-emit-data-in-vue-beyond-the-vuejs-documentation)

```vue
// child
<v-btn
  ...
  :key="action.id"
  v-for="action in actions"
  @click="emitAction(action.id)"
>
  {{ action.name }}
</v-btn>

...
emitAction(action) {
  this.$emit('doAction', {'action': action});
}

// parent
<data-cards-crud
  ...
  @doAction="performAction"
/>

...
performAction(actionObj) {
  console.log(actionObj)
}
```

## Parent-Child Communications

### Component Parent Child
<div align="center">

![Component Parent Child](./images/flowcharts/component-parent-child.svg)

</div>


### Component Parent Child Details
<div align="center">

![Component Parent Child Details](./images/flowcharts/component-parent-child-details.svg)

</div>


# Style
<a href="#0">👆 Page Top</a>

Adding reusable, global styles is encourage. Below are demonstrations on how you could add styles globally and some WET code you should avoid.

## Colors
Add a color so that it is available for use throughout the application. Using color values is repetitive and should be avoided.
<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```vue
<template>
  <v-button color="primary"></v-button>
  <v-button color="white"></v-button>
</template>
```
</td>
<td>

```vue
// avoid using repetitive color values
<template>
  <v-button color="#FFFFFF"></v-button>
</template>
```
</td>
</tr>
</table>


## Icons
Icon configuration is part of [vuetify](https://vuetifyjs.com/en/components/icons/) config where, all [material UI icons](https://cdn.materialdesignicons.com/5.1.45/) are recommended to use whenever required,
but in case if we want to create custom icon in our application following are the steps :

1. Create New `.vue` file for icon template at `@/plugins/icons`
  ```javascript
  // Syntax
  <template>
    <svg></svg> // here add svg file content of your icon
  </template>
  ```
> 💡 Tip 
> 
> <small>In SVG content change color rule with 'currentColor' variable, which helps to change color of icon based on props and classes while using it, else it will take defined color in SVG file.</small>

2. Go to file vuetify.js at `@/plugins/vuetify.js`
  ```javascript
    export default new Vuetify(
      {
          icons: {
            values: {}
          }
      }
  )
  ```

3. In `icons.values` block needs to define icon name and needs to bind template with `component` property.
  ```javascript
    // Example
    import OutlinePrinter from './icons/outline-printer-icon.vue';
    export default new Vuetify(
        {
            icons: {
                values: {
                    icon_outline_printer: {
                        component: OutlinePrinter
                    }
                }
            }
        }
    )
  ```
4. Now we are set with icon configurations, we can use defined icon in our templated simply by:
  ```html
    <v-icon>$vuetify.icons.icon_outline_printer</v-icon>
  ```

Alternatively, you may use [semantic SVG icons](https://vuetifyjs.com/en/components/icons/#semantic-svg-icons) if the icon is not regularly used throughout the application.
```vue
<v-icon>
  mdi-heart-outline
</v-icon>
```

## Themes

Similar to Icon configuration Vuetify have some default theme and variables which are predefined, where as vuetify gives option to define our own application theme
based on our wireframes and prototype.
See also: [How to use Theme Generator](https://vuetifyjs.com/en/features/theme/)
- Basic Structure of vuetify.js file for theme customization :
```javascript
// Syntax

// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: { 
...
 },
})
```
- Here we can define theme block for basic 2 theme modes <b>DARK | LIGHT</b>
```javascript
{
  theme: {
    themes: {
      light: {
        primary: colors1.darken1,
        secondary: color2.darken1,
        accent: color3.darken1,
        error: color4.darken1,
      },
      dark: {
         primary: colors1.lighten3,
         secondary: color2.lighten3,
         accent: color3.lighten3,
         error: color4.lighten3,
      },
    }
  }
}
```

- We define our custom variant for design purpose
example :
```javascript
{
    theme: {
        themes: {
            light: {
                primary_400: colorStyles.colorPrimary400 // custome variant
            }
        }
    }
}
```
- full list of the over-writable keys on the theme object :

    + base: `string`
    + lighten5: `string`
    + lighten4: `string`
    + lighten3: `string`
    + lighten2: `string`
    + lighten1: `string`
    + darken1: `string`
    + darken2: `string`
    + darken3: `string`
    + darken4: `string`

## Variables
Defining designing variables in application and export them to use at application as well as in stylesheet, is very important with respect to big application.
For big application all definitions should be generic as well as atomic such way it can agile for change requests or scale on scope extension.

* All style variables must be defined in `variables.scss` guidelines are as follows :
  + All color codes needs to be define here.
  + All override variables of `vuetify` should be declared here. 
  + All chart color pallets should be defined with proper variable syntax.
  + In `src/scss/export.scss` we define colors which we want to export
  
```scss
// Example
@import "variables";
:export {
    /*COLORS*/
    colorPrimary10: $color-primary-10;
}
```
> NOTE : These variables can be used in .vue file as well. In graphs, we use these variables to declare example hit-map graph color palette.
>due to this feature we can change anythings at only one point of source.


# Vue Router
<a href="#0">👆 Page Top</a>

The official [router](https://router.vuejs.org/) for Vue.js.

Application route start from `src\main.js` which is bind with `src/router/index.js`  

Guidelines :
1. new route should be part of one of module or create new module for same
2. Authentication before redirection is important `beforeEnter: authGuard` will be required part.
3. Use Lazy loading.
4. Add dynamic parameters in route whenever required.
5. In project maintain state in store for projectId & applicationId through route & route-change.
6. All Routing should be identified by route-name.
7. Use route name for redirection in application than path change.
8. based on route our application's master frame is configured:
    * `src/mixins/appBarMixin.js` & `src/mixins/appGlobal.js` are play main role in route changes handing with application.
    * `appBarMixin.js` 
        + This is use to configure application bar & Left Nav which are again bind with `navconfig` to show/decide application bar, left navigation bar components to load and there context menus, icons etc data.
        + Application Bar components contains : 
            * AppSwitch, Application Logo, Buttons like Home, Right side User Options.
        + Left Navigation Contains :
            * All Left side menus, Submenus & there states, Components etc.
        + based on the route we need to define in Navigation config or create config file.
        + Basic there are 2 groups of Config maintained:
            1. Default 
            2. Defined (User needs to choose group or needs to extend for new type of group)
    * `appGlobal.js`
        + Used to maintain complete application state based on route & route change.
        + Define only Global level application settings here.
        + Any change in here needs to be discussed before and properly analysed.
9. All defined Routes should be bound with Component, Navigation Config, previous route state & Authentication guard.
10. All config are part of groups so its very important to maintain group & mapping of component files with in groups.

>NOTE : Folder structure should be maintained same like Route Flow. 

## Lazy loading components
[Guide](https://thevueguy.com/blog/lazy-load-routes-vue-router/)

*** Thoughts of adding [grouping chucks](https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk)

<table>
<tr>
<th>✅</th><th>⛔️</th>
</tr>
<tr>
<td>

```vue
// Do 
{
  path: '/login',
  name: 'login',
  // correct example - lazy loading component
  component: () => import(`../views/stemly/onboarding/Home`),
  beforeEnter: authGuard,
  meta: {title: "Login"}
}
```

</td>
<td>

```vue
// Don't
// wrong example

import OnboardingHome from '@/views/stemly/onboarding/Home
```
</td>
</tr>
</table>

## Routes Grouping
1. Stemly / Main Module
2. Manage settings
3. Workspace
   - settings is in './settings/workspaceSettings'
4. ApplicationModule
   - settings is in './settings/applicationSettings'
5. Global pages 
   - example : 'page-not-found'
```javascript
import stemlyModule from './stemlyModule';
import manageSettings from './settings/manageSettings';
import workspaceModule from './workspaceModule';
import applicationModule from './applicationModule';
import oldRoutes from './oldRoutes';  // to be removed

routes: [
  // 4 main groups
  ...stemlyModule,
  ...manageSettings,
  ...workspaceModule,
  ...applicationModule,
    Global pages
]
```

## Usage
```javascript
this.$router.push(
  {
    // Named Routes
    name: 'optimization-overview',
    // With params
    params: {
      path: 'opt_overview'
    }
  }
)
```

## Data fetching
Sometimes you need to fetch data from the server when a route is activated.

[Data fetching](https://router.vuejs.org/guide/advanced/data-fetching.html)

## Dynamic Route Matching
```javascript
// Defined Syntax
{
  // match workspace ID
  path: "/workspace/:wsId/application",
  name: "workspace-application",
  component: () => import(`../views/workspace/Application`),
  beforeEnter: authGuard,
  meta: {title: "Applications"}
}
```

```javascript
// Usage Syntax

to: {name: 'workspace-application', params: {id: data.id}}

```


## Navigation guards

[More info on Navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)

```javascript
// Global After Hooks
instance.$router.afterEach(
  (to) => {
    if (
      to.path.startsWith('/project/') ||
      to.path.startsWith('/application/') ||
      to.params.appId
    ) {
      instance.$store.commit('pid', to.params.appId || to.params.id)
    } else {
      instance.$store.commit('pid', undefined)
    }
  }
)

// Per-Route Guard example
import { authGuard } from '../auth/authGuard';

{
  path: "/workspace/:wsId/application",
  name: "workspace-application",
  component: () => import(`../views/workspace/Application`),
  // Per-Route Guard
  beforeEnter: authGuard,
  meta: {title: "Applications"}
}
```

## The Full Navigation Resolution Flow
[Navigation Flow](https://router.vuejs.org/guide/advanced/navigation-guards.html#the-full-navigation-resolution-flow)

# Vuex
<a href="#0">👆 Page Top</a>

The official [state management pattern + library](https://vuex.vuejs.org/) for Vue.js.
Vuex helps us work with shared state management, its very useful in large scale applications.
Sometimes it creates complex structure but its a very good option for to better handle state outside of your Vue components.

![Component Parent Child](./images/flowcharts/vuex.svg)

`@/store/index.js` initialises the application store.
 
**Basic Structure**
```javascript
import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // variables
    },
    getters:{
        // methods which return state values or manipulated data using state data
    },
    mutations:{
        // methods which use to set & updates state data
    },
    actions:{
        // use to commit(update) state data values
        // async actions to get data from APIs and dispatch back. 
    },
    modules: {
    /* Application level modules
         |  Group type level modules
            | Group page level modules
    */
    }
})
``` 
>💡 <small> Tip : Use maximum use of ES6 & shorthands</small>
    
## Core concepts
+ **Initialization**
    The first thing we need to do is instantiate our store using Vuex store.
+ **State**
Here, we declare and initialize the properties of the state of our store.

+ **Getters**
This is our computed getter to obtain the reversed version of the `variableName` state property. 
These functions receive the state as the first parameter.

+ **Mutations**
These are the two mutations we’re going to provide in order to change our state. They also receive the state as the first parameter.

+ **Actions**
We’re going to provide only one async action that returns a promise. 
Actions receive a context that’s a representation of the state.
Actions always end up calling a mutation with the store `commit` function to change the state. 
In this case, the promise is resolved and returns the new value of the count property.

##### Add the store to our root component
```javascript
import store from './store'

var instance =  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
})
instance.$mount('#app')
```

## State
The state of your app is stored as a single large JSON object.

```javascript
state: {
  loading: false
}
```

## Getters
Getters are used to access values stored in your state.

```javascript
getters: {
  getLoading(state){
    return state.loading;
  }
}
```

## Mutations
Mutations update your state. It is to be remembered that mutations are synchronous.

```javascript
mutations: {
  loading(state, loading){
    state.loading = loading
  }
}
```

## Actions
All asynchronous operations must be executed inside Actions. Actions alter the state by committing a mutation.

```javascript
actions: {
  startLoading({commit}){
    commit("loading", true);
  }
}
```

## Modules
Modules can be used to organize your store into multiple smaller store files.
```javascript
// Grouped into 'demand-planning' & 'managed'
modules: {
  demandPlanning: demandPlanning,
  manage: {
    // Use of namespacing
    namespaced: true,
    state: {
      ...
    },
    actions: {
      ...
    },
    getters: {
      ...
    },
    mutations: {
      ...
    }
  }
}
```

## Components using the store
Use Namespace & path at every instance in application, as `mapState`, `mapGetters` & `mapActions` leads to complication in large & interactive applications.  

```javascript
// component.vue // getter example
 let listItems = this.$store.getters["modulename/groupModules/pageModule/getList"]({
            parameter: this.parameterValue
          });

```

```javascript
// component.vue // action dispatch example with parameters
this.$store.dispatch("modulename/groupModules/pageModule/onListFilter", {
          filter: [],
          vm: this,
        });
```
> Note : Keep folder structure sync with routing rules and routes.

## Consuming APIs
API calls using Axios ([Our APIs](https://api.dev.soptai.sg/api/))

## Vuex Best practice
Make it a practice to always commit a Mutation only through an Action.  
    [Mastering Vuex — Zero to Hero](https://medium.com/dailyjs/mastering-vuex-zero-to-hero-e0ca1f421d45)

# Error Handling
All axios request should add catch handler for errors

[Axios error handling](https://github.com/axios/axios#handling-errors)

```javascript
// An example
...
.catch((error) => {
  dispatch("stopLoading");
  return Promise.reject(error);
})
```

# Security
To take note
  - [Injecting HTML](https://vuejs.org/v2/guide/security.html#Injecting-HTML)
  - [Injecting URLs](https://vuejs.org/v2/guide/security.html#Injecting-URLs)
  - [Injecting Styles](https://vuejs.org/v2/guide/security.html#Injecting-Styles)
  - [Injecting JavaScript](https://vuejs.org/v2/guide/security.html#Injecting-JavaScript)

# Performance
How we can improve the app's performance
  - [Vue webpack analyzer](https://www.npmjs.com/package/vue-cli-plugin-webpack-bundle-analyzer)
  - [Interesting tips](https://codesthq.com/how-to-improve-vue-js-apps-some-practical-tips/)
  - [Performance](https://learn-vuejs.github.io/vue-patterns/useful-links/#performance)

# Resources
A list of useful resources
  - [Useful Links](https://learn-vuejs.github.io/vue-patterns/useful-links/)
  - [Tips & Best Practices](https://medium.com/js-dojo/vuejs-tips-best-practices-39d9962bb255)
  - [Event Handling Cheatsheet](https://learnvue.co/2020/01/a-vue-event-handling-cheatsheet-the-essentials/)
