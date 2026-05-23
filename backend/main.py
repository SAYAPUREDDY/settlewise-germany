"""
SettleWise Germany — FastAPI backend entry point.

Run with: uvicorn main:app --reload --host 0.0.0.0 --port 8000
(from the backend folder)
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import health

app = FastAPI(
    title="SettleWise Germany API",
    description="Minimal backend for health checks. City/module APIs can be added later.",
    version="0.1.0",
)

# Allow the Expo app (and web dev) to call the API during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Routers ---
# Future: app.include_router(cities.router, prefix="/api/cities", tags=["cities"])
# Future: app.include_router(modules.router, prefix="/api/modules", tags=["modules"])
app.include_router(health.router)


@app.get("/")
def root():
    return "settlewise-germany backend is running"
