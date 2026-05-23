from fastapi import APIRouter

from schemas import HealthResponse

router = APIRouter(tags=["health"])


@router.get("/health", response_model=HealthResponse)
def health_check():
    """Simple health check for monitoring and frontend connectivity tests."""
    return HealthResponse(status="ok")
