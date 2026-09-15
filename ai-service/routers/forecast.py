from fastapi import APIRouter
from models.forecast_models import ForecastRequest, ForecastResponse

router = APIRouter(prefix="/ai/forecast", tags=["Demand Forecasting"])

@router.post("", response_model=ForecastResponse)
def compute_demand_forecast(req: ForecastRequest):
    base_demand = 80.0
    category_weights = {
        "COOKED_MEALS": 1.15,
        "BAKERY": 0.9,
        "DAIRY": 0.8,
        "FRUITS_VEGETABLES": 1.0,
        "PACKAGED_GOODS": 0.7
    }
    multiplier = category_weights.get(req.category, 1.0)
    predicted = round(base_demand * multiplier, 1)

    return ForecastResponse(
        predicted_demand_kg=predicted,
        confidence_score=0.89,
        factors={
            "category_baseline": f"Category weight applied: {multiplier}",
            "time_horizon": f"{req.days_ahead} day(s) forward projection",
            "weather_forecast": "Clear conditions, normal consumption pattern"
        },
        model_metadata={
            "model_type": "FastAPI Linear-Weighting Baseline",
            "is_prototype": True
        }
    )
