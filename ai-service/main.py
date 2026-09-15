from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import SERVICE_NAME, VERSION
from routers.forecast import router as forecast_router
from routers.surplus import router as surplus_router

app = FastAPI(
    title=SERVICE_NAME,
    version=VERSION,
    description="Deterministic AI/ML baseline microservice for FoodFlow prototype"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": SERVICE_NAME,
        "version": VERSION,
        "mode": "deterministic-prototype-baseline"
    }

app.include_router(forecast_router)
app.include_router(surplus_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
