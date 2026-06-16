from django.shortcuts import render
from rest_framework import viewsets 
from .models import Autore, Libro
from .serializers import AutoreSerializer, LibroReadSerializer, LibroWriteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

# Create your views here.
class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    # serializer_class = LibroSerializer
    # permission_classes = [IsAuthenticated]
    
    def get_serializer_class(self):
        # For write operations (create, update, partial_update, destroy)
        if self.action in ['create', 'update', 'partial_update']:
            return LibroWriteSerializer
        # For read operations (list, retrieve)
        return LibroReadSerializer
    
    def get_permissions(self):
        if self.action == 'list':  # GET (list)
            permission_classes = [AllowAny]
        elif self.action == 'create':  # POST
            permission_classes = [IsAuthenticated]
        elif self.action == 'destroy':  # DELETE
            permission_classes = [IsAdminUser]
        elif self.action in ['retrieve', 'update', 'partial_update']:  # GET (detail), PUT, PATCH
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        
        return [permission() for permission in permission_classes]


class AutoreViewSet(viewsets.ModelViewSet):
    queryset = Autore.objects.all()
    serializer_class = AutoreSerializer
    # permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action == "list":  # GET (list)
            permission_classes = [AllowAny]
        elif self.action == "create":  # POST
            permission_classes = [IsAuthenticated]
        elif self.action == "destroy":  # DELETE
            permission_classes = [IsAdminUser]
        elif self.action in [
            "retrieve",
            "update",
            "partial_update",
        ]:  # GET (detail), PUT, PATCH
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profilo(request):
    return Response({'username': request.user.username, 'user_id': request.user.id})
