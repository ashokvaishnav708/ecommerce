#!/bin/bash

# Docker convenience script for the ecommerce project

case "$1" in
  build)
    docker-compose -f docker/docker-compose.yml build
    ;;
  up)
    docker-compose -f docker/docker-compose.yml up
    ;;
  down)
    docker-compose -f docker/docker-compose.yml down
    ;;
  dev)
    docker-compose -f docker/docker-compose.dev.yml up
    ;;
  dev-build)
    docker-compose -f docker/docker-compose.dev.yml build
    ;;
  dev-down)
    docker-compose -f docker/docker-compose.dev.yml down
    ;;
  logs)
    docker-compose -f docker/docker-compose.yml logs -f
    ;;
  *)
    echo "Docker CLI Commands"
    echo "=================="
    echo ""
    echo "Production:"
    echo "  ./docker.sh up          - Start production container"
    echo "  ./docker.sh build       - Build production image"
    echo "  ./docker.sh down        - Stop production container"
    echo "  ./docker.sh logs        - View production logs"
    echo ""
    echo "Development:"
    echo "  ./docker.sh dev         - Start development container with hot-reload"
    echo "  ./docker.sh dev-build   - Build development image"
    echo "  ./docker.sh dev-down    - Stop development container"
    echo ""
    exit 1
    ;;
esac
