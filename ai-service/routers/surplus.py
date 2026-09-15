from fastapi import APIRouter
from models.surplus_models import SurplusRequest, SurplusResponse

router = APIRouter(prefix="/ai/surplus", tags=["Surplus Prediction"])

@router.post("", response_model=SurplusResponse)
def compute_surplus_prediction(req: SurplusRequest):
    expected_local_need = 35.0
    surplus_kg = max(0.0, round(req.quantity_kg - expected_local_need, 1))
    probability = 0.94 if surplus_kg > 0 else 0.10
    action = "REDISTRIBUTE" if surplus_kg > 10 else ("LOCAL_BUFFER" if surplus_kg > 0 else "HOLD")

    return SurplusResponse(
        predicted_surplus_kg=surplus_kg,
        surplus_probability=probability,
        recommended_action=action,
        factors={
            "initial_batch_kg": req.quantity_kg,
            "projected_consumption_deficit": expected_local_need,
            "storage_temp_c": req.storage_temp_c
        }
    )
