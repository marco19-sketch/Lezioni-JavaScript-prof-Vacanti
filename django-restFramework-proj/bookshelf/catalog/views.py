from django.shortcuts import render
from rest_framework import viewsets 
from .models import Autore, Libro
from .serializers import AutoreSerializer, LibroSerializer

# Create your views here.
class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
    
    
class AutoreViewSet(viewsets.ModelViewSet):
    queryset = Autore.objects.all()
    serializer_class = AutoreSerializer