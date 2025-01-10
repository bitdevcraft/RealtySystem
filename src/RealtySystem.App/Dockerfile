# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["RealtySystem.App/RealtySystem.App.csproj", "RealtySystem.App/"]
COPY ["RealtySystem.Presentation/RealtySystem.Presentation.csproj", "RealtySystem.Presentation/"]
COPY ["RealtySystem.Application/RealtySystem.Application.csproj", "RealtySystem.Application/"]
COPY ["RealtySystem.Domain/RealtySystem.Domain.csproj", "RealtySystem.Domain/"]
COPY ["RealtySystem.Infrastructure/RealtySystem.Infrastructure.csproj", "RealtySystem.Infrastructure/"]
COPY ["RealtySystem.Persistence/RealtySystem.Persistence.csproj", "RealtySystem.Persistence/"]
COPY ["RealtySystem.ServiceDefaults/RealtySystem.ServiceDefaults.csproj", "RealtySystem.ServiceDefaults/"]
RUN dotnet restore "./RealtySystem.App/RealtySystem.App.csproj"
COPY . .
WORKDIR "/src/RealtySystem.App"
RUN dotnet build "./RealtySystem.App.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./RealtySystem.App.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RealtySystem.App.dll"]