# FoodFlow API Reference (v1)

### Authentication
- `POST /api/v1/auth/login` - Authenticate user
- `POST /api/v1/auth/register` - Register new entity

### Food Batches & Inventory
- `GET /api/v1/food-batches` - Query inventory batches
- `POST /api/v1/food-batches` - Register a food batch
- `GET /api/v1/food-batches/:id` - Fetch batch details

### AI & Prediction
- `GET /api/v1/predictions/demand` - Get demand projection
- `POST /api/v1/predictions/surplus` - Predict batch surplus

### Quality & Safety
- `POST /api/v1/quality/evaluate` - Calculate quality score

### Redistribution
- `GET /api/v1/redistributions` - List active redistribution tasks
- `POST /api/v1/redistributions` - Create redistribution offer
- `PATCH /api/v1/redistributions/:id/accept` - NGO accepts food

### Fleet & Tracking
- `POST /api/v1/tracking/position` - Record driver GPS ping
- `GET /api/v1/tracking/:taskId/position` - Query live location

### Analytics & Governance
- `GET /api/v1/analytics/metrics` - High-level ESG metrics
- `GET /api/v1/audit` - Query audit trail
