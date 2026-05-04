# Docker Docker Setup

This directory contains all Docker-related configuration files for the ecommerce project.

## Files

- **Dockerfile** - Production-optimized multi-stage build
- **Dockerfile.dev** - Development build with hot-reload support
- **docker-compose.yml** - Production compose configuration
- **docker-compose.dev.yml** - Development compose configuration with volume mounts

## Usage

### Production

Run from the project root:
```bash
docker-compose -f docker/docker-compose.yml up --build
```

### Development

Run from the project root:
```bash
docker-compose -f docker/docker-compose.dev.yml up --build
```

The application will be available at `http://localhost:3000`
