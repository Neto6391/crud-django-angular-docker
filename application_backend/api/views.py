from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.serializers import MovieSerializer
from api.models import Movie


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
