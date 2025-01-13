# Setting up Aspire Deployment to Docker

## Setting Up a Local Docker Registry:

Before proceeding with Aspir8, let’s set up a local Docker registry. This eliminates the need to publish containers to
Docker Hub, Azure Container Registry, ECR, Harbor, or GitLab Registry. Run the following command:

```bash
docker run -d -p 5001:5000 --restart always --name registry registry:2
```

## Deploying with Aspir8

Change Directory to RealtySystem.AppHost

```bash 
cd src/RealtySystem.AppHost
```

1. Generate the Manifest File: Navigate to the App Host project and execute:

```bash
dotnet run --publisher manifest --output-path manifest.json
```

This command generates a manifest.json file, which outlines the app graph - a useful representation of the system's
components and their interactions.

2. Initialize Aspir8 by Executing:

```bash
aspirate init
```

This creates the aspirate.json file

3. Build the Project with Aspir8 by Executing:

```bash
aspirate build
```

This builds the resources defined in the manifest.json file.

4. Generate Dockerfile or Kubernetes files by executing:

**Kubernetes**

```bash 
aspirate generate
```

This step creates Kubernetes files for the project.
**Dockerfile**

```bash
aspirate generate --output-format compose
```

This step creates Dockerfile for the project.

5. For Kubernetes: Apply the Deployment: Finally, deploy by running:

```bash
aspirate apply
```

6. For Docker
```bash
docker compose up
```


## Source

Medium [.NET 8, Aspire, & Aspir8: Deploy Microservices Into Dev Environments Effortlessly with CLI — No Dockerfiles or YAML Needed! Plus, a Little Yarp](https://medium.com/@josephsims1/aspire-aspi8-deploy-microservices-effortlessly-with-cli-no-docker-or-yaml-needed-f30b58443107)