# Use the official .NET 9 SDK image as the build environment
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the solution file
COPY "RealtySystem.sln" ./

# Copy all project files and restore dependencies
COPY ["/RealtySystem.App/RealtySystem.App.csproj", "RealtySystem.App/"]
COPY ["/RealtySystem.Application/RealtySystem.Application.csproj", "RealtySystem.Application/"]
COPY ["/RealtySystem.Domain/RealtySystem.Domain.csproj", "RealtySystem.Domain/"]
COPY ["/RealtySystem.Infrastructure/RealtySystem.Infrastructure.csproj", "RealtySystem.Infrastructure/"]
COPY ["/RealtySystem.Persistence/RealtySystem.Persistence.csproj", "RealtySystem.Persistence/"]
COPY ["/RealtySystem.Presentation/RealtySystem.Presentation.csproj", "RealtySystem.Presentation/"]

# Restore dependencies
RUN dotnet restore "RealtySystem.sln"

# Copy the rest of the project files
COPY . .

# Build the application
WORKDIR /app/RealtySystem.App
RUN dotnet publish -c Release -o /app/publish


# Use the official .NET runtime image as the base for the runtime environment
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime

# Set the working directory inside the runtime environment
WORKDIR /app

# Copy the published application from the build environment
COPY --from=build /app/publish .

# Expose the port your application is configured to use (e.g., 5026)
EXPOSE 8080

# Define the entry point for the container
ENTRYPOINT ["dotnet", "RealtySystem.App.dll"]



