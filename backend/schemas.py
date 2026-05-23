"""
Pydantic schemas for API responses.

Add models here when you build city/module endpoints later, for example:
- CityResponse
- ModuleResponse
- ChecklistItemResponse
"""

from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
