In order to update the API for use by the front end when changes are made in the .Net project we need to take the following steps:

- Clean / Build / Run the API application in `http` mode
	- it should be running on `http://localhost:5238`
- Have Docker running
- From the project root run `docker-compose --project-directory . -f ./tools/api-code-generator/docker-compose.yml run --rm generate-api-client-template`

This will use the OpenApi docker image to create an api and place it inside `src/generated/` that can then be imported and used in the application.