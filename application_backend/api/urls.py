from django.urls import include, path
from rest_framework import routers
from api.views import MovieViewSet

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'movies', MovieViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]