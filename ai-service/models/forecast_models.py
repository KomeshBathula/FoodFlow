from pydantic import BaseModel
from typing import Dict, Any

class ForecastRequest(BaseModel):
    kitchen_id: str
    category: str
    days_ahead: int = 1

class ForecastResponse(BaseModel):
    predicted_demand_kg: float
    confidence_score: float
    factors: Dict[str, str]
    model_metadata: Dict[str, Any]
