Need to install the following tools / ides / plugins to develop and run the application locally. For a list everything included in the template see [[Included in Template]]

## Tooling

### Client UI
- Node/NPM - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
	- v18.2 - latest LTS at time of writing
	- *(Optional)* NVM - node version manager - https://github.com/coreybutler/nvm-windows/releases/tag/1.1.11 - This allows for easy switching between node versions
- Yarn 4 - https://yarnpkg.com/getting-started/install
	- need latest yarn for PnP feature - https://yarnpkg.com/features/pnp
	- from `./client`, run `corepack enable` (will install yarn)
	- once installed run `yarn -v` from `./client/` it should show version 4+
- VS Code
	- This is used for the React application
	- Be sure to use TypeScript from `./client/.yarn/sdks/typescript/lib`, or VS Code won't be able to resolve package imports
		- Ctrl-Shift-P, Preferences: Open Workspace Settings (JSON)
		- Add the following (if missing or different):
			```
			"typescript.enablePromptUseWorkspaceTsdk": true,
    		"typescript.tsdk": ".\\client\\.yarn\\sdks\\typescript\\lib"
			```
		- Open TS/TSX file
		- Ctrl-Shift-P, TypeScript: Select TypeScript Version...
		- Pick Use Workspace Version (should show same path specified above)
- VS Code Extensions
	- ZipFS
	- ESLint
	- PnP Sdk - need to install an sdk in order for visual studio to properly use the zip'd yarn packages - https://yarnpkg.com/getting-started/editor-sdks
		- run `yarn dlx @yarnpkg/sdks vscode`

### Server
- .Net - https://dotnet.microsoft.com/en-us/download
	- v8.0 - latest LTS at time of writing
- Visual Studio
	- 2022 is latest at time of writing
	- This is used to run the .Net application
	- May need to `Restore Nuget Packages` for project to update everything
- Docker Desktop
	- Needed for Swagger API generation
	- Can be used to test build the deployment images

## Docker performance
To prevent docker from using all available resources eventually make this update if you havnt: [[Docker Performance]]

## Run application
See [[Run Application]]