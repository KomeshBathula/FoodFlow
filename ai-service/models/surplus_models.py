from pydantic import BaseModel
from typing import Dict, Any

class SurplusRequest(BaseModel):
    kitchen_id: str
    quantity_kg: float
    category: str
    storage_temp_c: float = 4.0

class SurplusResponse(BaseModel):
    predicted_surplus_kg: float
    surplus_probability: float
    recommended_action: str
    factors: Dict[str, Any]
