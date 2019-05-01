from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.serializers import MovieSerializer, MovieMiniSerializer
from api.models import Movie
from rest_framework.response import Response

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def list(self, request):
        movies = Movie.objects.all()
        serializer = MovieMiniSerializer(movies, many=True)
        return Response(serializer.data)
