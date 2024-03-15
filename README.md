<div id="0" align="center">

[![Stemly](images/stemlyLogo.svg)](https://www.soptai.sg/)

<strong>User Interface Repository</strong>

</div>

<br>
<details>
    <summary>
        TABLE OF CONTENTS 
        <small>(click to expand)</small>
    </summary>

- [About](#about)
- [Project Overview](#project-overview)
  - [Packages](#packages)
  - [Configurations](#configurations)
  - [Environments](#environments)
- [Getting Started](#getting-started)
  - [Required Installations](#required-installations)
  - [Running stemly ui on your local machine](#running-stemly-ui-on-your-local-machine)
  - [Adding new packages](#adding-new-packages)
- [Project Compilation](#project-compilation)
- [Project Build](#project-build)
- [Linting](#linting)
- [Contribute to stemly ui](#contribute-to-stemly-ui)
- [Resources](#resources)
  - [Backend & API](#backend--api)
  - [Vue](#vue)
  - [Vuetify](#vuetify)
  - [Ask Humans](#ask-humans)

</details>
<br>

# About
<a href="#0">👆 Page Top</a>

Stemly's business goal is to develop and offer a suite of cloud based applications tailored for the Supply Chain and Finance industry.

Main applications of Stemly are:
1. 🚩 Demand Forecasting
2. 🚩 Promotion Optimisation
3. 🚩 Cash Flow Forecasting
4. 🚩 Forecasting Web API

# Project Overview
<a href="#0">👆 Page Top</a>

## Packages
Node packages used in this project include:

1. `auth0 authentication`
    <small><i>Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. 
    Now each time a user tries to authenticate, Auth0 will verify their identity and send the required information back to your app.
    </i></small>
    
2. `vue`
    <small><i>
    Progressive model–view–viewmodel JavaScript framework  for building user interfaces & perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
    </i></small>
    
3. `vue-cli`
    <small><i>
    Vue Command Line Interface is the Standard Tooling for Vue CLI.
    <p>
    Which is a full system for rapid Vue.js development, providing Interactive project scaffolding, Zero config rapid prototyping & A full graphical user interface to create and manage Vue.js projects.
    </p>
    </i></small>
        
4. `vuetify`
 <small><i>
 Vuetify is a Vue UI Library with beautifully handcrafted Components using the Material Design specification.
 It supports all the modern browsers & offers basic templates for Simple HTML, Webpack, NUXT, PWA, Electron, A La Carte, Apache Cordova. 
 </i></small>
 
5. `vuex`
    <small><i>
    Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
    </i></small>
    
6. `echarts`
    <small><i>
    ECharts is a powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts.
    </i></small>
7. `babel` and `vue` config:
    <small><i>
    Used for packaging and configuration purpose.
    </i></small>

## Configurations
* Babel configurations
  
  Babel is used for transformations compilation and packaging project builds. 
  Presets are definded from `@vue/cli-plugin-babel`


* Vue configurations
  
  `lintOnSave` is set to `false` so that lint errors will not be emitted as warnings.

  `devServer-port` is set to port `3000`.

## Environments
There are four environments all with different apis, domains, client-ids and audiences defined.
1. Dev
2. Production
3. Demo

# Getting Started
<a href="#0">👆 Page Top</a>

## Required Installations
To get started, install the following programmes/packages/extensions.
1. [Git](https://git-scm.com/downloads) - version control
2. [Node](https://nodejs.org/en/) - javascript runtime environment
3. [Vue CLI](https://cli.vuejs.org/guide/) - for vue.js development
4. Preferred IDE - [VSCode](https://code.visualstudio.com/download) used by members of our team.
     * *(optional)* [Vuetur VSCode Extension](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Vue tooling for VSCode
5. Preferred Browser - [chrome](https://www.google.com/chrome/) | [firefox](https://www.mozilla.org/en-US/firefox/new/) | others
6. [Vue Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) - chrome extension helpful for debugging
7. *(optional)* [Cmder](https://cmder.net/) - nice console emulator for Windows
8. *(optional)* [Homebrew](https://brew.sh/) - package manager for macOS/Linux

## Running stemly ui on your local machine
Run the following commands in your terminal.
1. Clone this repository to your local machine
   ```shell
   # using HTTPS
   git clone https://github.com/soptai/stemly_ui.git

   # OR using SSH
   git clone git@github.com:soptai/stemly_ui.git
   ```

2. Download all package dependencies
   ```shell
   # change into stemly_ui directory
   cd stemly_ui
   
   # using node package manager
   npm install

   # OR using yarn package manager
   yarn 
   ```

3. Run stemly ui on local server
   ```shell
   # using node package manager
   npm run serve
   
   # OR using yarn package manager
   yarn serve
   ```

   expected outcome:
   ```shell
   App running at:
    - Local:   http://localhost:3000/
    - Network: http://192.168.0.123:3000/
  
    Note that the development build is not optimized.
    To create a production build, run npm run build.
   ```
   To view stemly ui, open `http://localhost:3000/` in your browser.

   To stop local server, hit `ctrl` + `c` in terminal.



## Adding new packages
<a href="#0">👆 Page Top</a>

Packages listed in `package.json` are installed after `npm install` OR `yarn` is executed.
</br>

If other package dependecies need to be added, first, determine if the new packages is a `dev dependecy package` or a  `project dependecy package`.

- `dev dependecy package` : 
    Package required only for development purposes, 
    
    💡 <u>Examples</u> : sass-loader, vuetify-loader etc. 
- `project dependecy package` : 
    Package required during runtime & for functionalities, 

    💡 <u>Examples</u> : echarts, lodash etc. 

1. Basic syntax to install package dependecies:
    ```shell script
    npm install [<@scope>/]<name>
    npm install [<@scope>/]<name>@<tag>
    npm install [<@scope>/]<name>@<version>
    
    # OR
    yarn add [<@scope>/]<name>
    yarn add [<@scope>/]<name>@<tag>
    yarn add [<@scope>/]<name>@<version>
    ```
2.  If Package need to add in project dependencies:
    ```shell script
    npm install <packageReference> --save-prod
    #OR
    npm install -P
    ```
    
3. If Package need to add in devDependencies:
    ```shell script
    npm install --save-dev
    npm install -D
    
    # OR
    yarn add --save-dev
    yarn add --dev
    ```

 # Project Compilation
<a href="#0">👆 Page Top</a>

This project can be compiled using different environments. Each predefined environments has environment-variables suitable for different purposes.

To compile: 
   ```shell
   # replace <environment> with:
   #    serve: for dev
   #    prod: for production
   #    demo: for demo

   # using node package manager
   npm run <environment>

   # using yarn package manager
   yarn run <environment>
   ```


# Project Build
<a href="#0">👆 Page Top</a>

Default project build will be development build which is developer friendly build, with minimal minification, 
with devDependencies packages and debugger mode will be true, where `NODE_ENV` environment variable is set to `development`.

Demo & Production builds are highly optimized, minified without devDependencies packages and debugging mode off.
Build command will create dist folder in project root level with all complied and deployable structure,
 where `NODE_ENV` environment variable is set to `production`

To build in development environment:
```shell
# Using node package manager
npm run build

# Using yarn package manager
yarn run build
```

To build in other environments:
```shell
# Replace <environment_name> with:
#   prod: for production
#   demo: for demo

# Using node package manager
npm run build:<environment_name>

# Using yarn package manager
yarn run build:<environment_name>
```
      
# Linting
<a href="#0">👆 Page Top</a>

Lint, or a linter, is a code analysis tool used to flag programming errors, bugs, stylistic errors, and suspicious constructs to avoid potential errors.
```
npm run lint
```

# Contribute to stemly ui

Before begin with code, its very important to discuss with your team & check type of contribution :

1. Story or Feature development
    - Check <a href="https://soptai.atlassian.net/">JIRA</a> ticket for story, review description
    - Discuss with team
    - Plan design & implementation with team
    - Create branch with JIRA Number
    - Commit your work

2. Issue Bug-Fix
    - check <a href="https://soptai.atlassian.net/">JIRA</a> Bug, review details and scenarios.
    - Mark issue In Progress in JIRA
    - Create a branch with JIRA Number
    - Commit your work
* Note : Do not upload or commit any credentials/passwords or sensitive information in Application. 

##Every PR should follow version update + tags,
#### Syntax will be like : ```sprint.feature.fix```
version of application should be updated in branch with following definations:
- 1st digit (Major version): sprint number
- 2nd digit (Minor version): If feature or story finished.
- 3rd digit (Patch version): If ui enhancements, issue fixes and minor feedback integrations completed. 

```
# For example from tomorrow 4.x.x will start so,
If the feature / task is finished in coming week then it should update the version to 4.1.0
And if it is a bug or small patch / task then it should be 4.1.1 or 4.0.1
```
Once PR created you can verify if package.json has conflicts for versions if there is update in version greater than you branch version you have to consider develop branch version and then run command for version update
use this command to update version and put message, it will directly create tag on same comit which can be pushed to develop branch
```
npm version major -m "Upgrade to %s for reasons"`
```
```
npm version minor -m "Upgrade to %s for reasons"`
```
```
npm version patch -m "Upgrade to %s for reasons"`
```
Please submit a Pull Request to https://github.com/soptai/stemly_ui.git.
After code Merge update JIRA with proper details. 

Do Refer [Contribution Guide](CONTRIBUTING.md) for detail documentation to understand project practices.

# Resources
<a href="#0">👆 Page Top</a>

## Backend & API
* [Stemly API Repository](https://github.com/soptai/core_ds)
  
## Vue
* [Official Documentation](https://vuejs.org/v2/guide/)
* [Vue Cookbook](https://vuejs.org/v2/cookbook/)
  
## Vuetify
* [Official Documentation](https://next.vuetifyjs.com/en/getting-started/installation/)

## Ask Humans
* [Stemly Slack Group](https://soptai.slack.com)

