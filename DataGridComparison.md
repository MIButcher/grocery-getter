Data Grid comparison:

AG Grid:
AG Grid offers the most features and is closest to Excel.  It also comes with a chart package that integrates with the Data Grid.  This allows real time row and column selection to generate a chart. If you want the most Data Grid features I recommend going with AG Grid.  Bulk discounts are available, they charge 1K to 1.2K per developer and an additional deployment license fee.  I didn’t see a limitation for “outsourcing” companies that would prevent them from owning the license and building for multiple clients.
Overview of some features is provided here:
https://www.youtube.com/watch?v=bcMvTUVbMvI

React Data Grid by DevExtreme:
React Data Grid by DevExtreme has a Data Grid that is not as fully featured as AG Grid.  It’s missing the option to copy cells by dragging them and I didn’t see Pivot mode at the time of writing this.  
An Overview of some features is provided here:
https://www.youtube.com/watch?v=IMtc0muUVLE
They offer other components in addition to their data grid for WPF, Maui and others.  The price ranges from $900 to $2200.  If the client is fine with less features for the Data Grid and interested in using a library across a web application, desktop application, or mobile application then DevExtreme may be something to consider.  The developer license is the main cost, there is no deployment license fee.  I did not see anything limiting an “outsourcing” company from owning the license and building products for clients.

ReactDataGrid by Inovua:
ReactDataGrid is similarly missing the option to copy cells by dragging them and I also did not see Pivot mode.  Their main benefit is a less featured Data Grid at about half the cost of their competitors.  They don’t charge for a deployment License but have the limitation that “Outsourcing” companies can only buy licenses for their clients.
https://reactdatagrid.io/demo

MUI X:
The following link shows pricing and a list of features.  Some of the features are in development.  The demo shown by MUI  X shows fewer features than all of the Data Grids discussed here.  Considering MUI X should be based on whether their other paid components, such as charts and date time pickers are needed.  Their price point of $540 to $1332 makes them less competitive than DevExtreme, AG Grid, and ReactDataGrid.  Several features are in development so they may catch up soon.
https://mui.com/pricing/



License Comparison:
AG Grid:
Offers a free community version.
Single Application License Per developer: 
$999 -AG Grid
$199 – AG Charts
Multi Application License per developer:
$1499 – AG Grid
$399 – AG Charts
Deployment License Add-on – required per production instance only.
$750 for AG Grid
$109 for AG Charts
$859 for bundle.

Bulk discounts are available. Example: AG Grid Deployment License goes from $750 to $295 each when buying 10.
These licenses are perpetual.  A year of support and updates is included with purchase.  At the end of the year the license would need to be “renewed at a significantly lower cost”, but they do not say what that cost is.  
Licenses explained:
https://youtu.be/VPr__OKxH50
EULA:
https://www.ag-grid.com/eula/AG-Grid-Enterprise-License-Latest.html


Dev Extreme:
I didn’t see a mention for single application licenses for Dev Extreme so they should be multiple application licenses.  Their licenses are also perpetual with upgrades limited to one year.  If you wish to upgrade past the 1 year term then they charge 50% of the purchase price for an additional year.  This price is valid for the first month and goes up the longer you do not renew.  Volume pricing is also available.  They do not charge for a deployment license.
$900 for Dev Extreme Complete per developer.
$1000 for ASP.NET and Blazor
$1500 for DXperience.
$2200 for Universal which includes everything they have.

Information on features is provided here:
https://js.devexpress.com/Buy/
EULAs are provided here:
https://devexpress.com/support/eulas/


ReactDataGrid by Inovua:
Free for community version
$299 per developer for single application
$499 per developer for multiple applications.
Please note that they have a term in their EULA that requires companies to work under their client’s licenses.  A COMPANY cannot own a license and use it to outsource software. This limitation does not seem to be present for AG Grid or DevExtreme.  If one would like different licensing terms, they are willing to provide custom license terms upon contact.
ReactDataGrid is also selling its source code at the time of this writing.

more information on pricing can be found here:
https://reactdatagrid.io/pricing


License EULA:
https://github.com/inovua/reactdatagrid/blob/master/enterprise-edition/LICENSE.md



MUI Licensing:
Perpetual license with 1 year updates:  
MUI Pro: $540 per dev and “no additional fee past 10”.
Mui Premium: on sale from $1764 to $1332 per dev.
subscription based license where rights expire at the end of the year:
MUI Pro: $180 per developer.
Mui Premium:  $444 per developer



Installation:

AG Grid installation:
https://www.ag-grid.com/react-data-grid/getting-started/

A video is available from the link above and is part of a tutorial series:
https://www.youtube.com/watch?v=6hxbPqziELk&list=PLsZlhayVgqNwHNHeqpCkSgdRV08xrKtzW

Setup for the Enterprise edition has not been attempted due to a lack of licensing.  Attempting to follow the examples provided in the link required additional setup:


Add the following to the package.json file in the project under “dependencies”:
    "@ag-grid-community/client-side-row-model": "~31.3.2",
    "@ag-grid-community/core": "^31.3.2",
    "@ag-grid-community/react": "31.3.2",
    "@ag-grid-community/styles": "31.3.2",
    "ag-grid-react": "^31.3.2",

Then run: npm install
This should pull in the right references to try out the examples.
Here are the list of imports I used when trying out their example:
import { useState } from 'react';
import { AgGridReact } from '@ag-grid-community/react'; // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css"; // Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
ModuleRegistry.registerModules([ ClientSideRowModelModule ]);


ReactDataGrid Installation:
https://reactdatagrid.io/docs/#getting-started

Getting started
There are 2 editions of the <ReactDataGrid /> that you can use:
•	the Community Edition - includes the core grid functionality most people actually use in their products - you can install it by doing
$ npm install @inovua/reactdatagrid-community --save
•	the Enterprise Edition - includes advanced functionality, especially targeted for enterprise apps
$ npm install @inovua/reactdatagrid-enterprise --save
Both editions of the <ReactDataGrid /> are published and available in the public npm registry.

Installing the community version also requires installing babel runtime:
npm add @babel/runtime

I had the following under dependencies in my package.json:
    "@babel/runtime": "^7.24.7",
    "@inovua/reactdatagrid-community": "^5.10.2",

And the following under “dev dependencies”  in my package.json:
    "@babel/core": "^7.24.7",
    "@types/babel__core": "^7",


DevExtreme Installation:
https://js.devexpress.com/React/Documentation/Guide/React_Components/Application_Template/

DevExtreme React - Application Template
The DevExtreme React Application Template helps you create a simple React application with a navigation menu and several sample views in a responsive layout (see live preview).
Generate a New Application
•	npx devextreme-cli new react-app app-name
•	// ===== or generate a template with TypeScript =====
•	npx devextreme-cli new react-app app-name --template=typescript
•	cd app-name
•	npm run start
The application already contains the DataGrid and Form components. You can find their configurations in the src\pages\display-data\display-data.js and src\pages\profile\profile.js files correspondingly.
DevExtreme does not have a community version.  A trial can be started for 30 days.

Mui Core Installation:

https://mui.com/material-ui/getting-started/installation/

To install:
yarn add @mui/material @emotion/react @emotion/styled
Peer dependencies
Please note that react and react-dom are peer dependencies, meaning you should ensure they are installed before installing Material UI.
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
},

