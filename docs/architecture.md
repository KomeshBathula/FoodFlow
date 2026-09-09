# FoodFlow Architecture Overview

FoodFlow is an AI-powered Surplus Food Redistribution Platform built for Smart India Hackathon.

## Core Architectural Layers
1. **Presentation Layer**: React (Vite) Single Page Application with RBAC views for Kitchen, NGO, Driver, Admin, and User.
2. **Portal & API Orchestration**: Node.js & Express API with versioned endpoints (`/api/v1/*`), JWT authentication, and structured validation.
3. **Data Layer**: MongoDB for transactional documents; Redis Cache for high-performance dashboard metrics.
4. **AI/ML Layer**: FastAPI microservice for demand forecasting, surplus prediction, and food quality scoring, with local fallback logic.
5. **IoT & Edge Integration**: ESP32 IoT telemetry simulator for cold-chain monitoring with anomaly detection.
6. **Logistics & Routing**: Haversine distance engine, simulated polyline tracking, and real-time updates.
