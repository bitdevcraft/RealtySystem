# RealtySystem

## Running Docker

Go to the src folder.
```bash
cd src
```

Build the Dockerfile
```bash
docker build -t realty_system:latest
```

Run the Docker Container
```bash
docker run -d -p <localport>:8080 realy_system:latest
```