- [ ] update me
There is a dockerfile in each main app folder

- selune-ui
- selune-api

	These are used in the build / deploy pipeline only. You can test build them locally, but the application is not setup to run locally in docker. The main issue to setting that up is the key vault permissions used in the selune-python-api would be complex.