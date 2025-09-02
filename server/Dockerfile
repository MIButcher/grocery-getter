# Use the official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy and build the project
COPY . ./
RUN dotnet publish -c Release -o out

# Use the ASP.NET runtime image for running
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

# Expose port and run the app
EXPOSE 8080
ENTRYPOINT ["dotnet", "GroceryGetter.dll"]
