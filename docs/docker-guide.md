# Docker Deployment Guide

## Using Docker Compose
Run all services with a single command:
```bash
cd infra
docker-compose up -d
```

This launches:
- MongoDB on `localhost:27017`
- Redis on `localhost:6379`
- Express Backend on `localhost:5000`
- FastAPI AI Microservice on `localhost:8000`
- React Frontend on `localhost:5173`
