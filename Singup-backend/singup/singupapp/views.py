from django.shortcuts import render
from .serializers import SignUpserialiser
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers
# Create your views here.

class SignUpView(APIView):
  def post(self,request):
    serializer = SignUpserialiser(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response ({'message': 'User registered successfully'},status=status.HTTP_201_CREATED)
    return Response (serializer.errors,status=status.HTTP_400_BAD_REQUEST)
  
class GetTokenPair(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)
    token['username']=user.username
    return token
  
class LoginView(TokenObtainPairView):
  serializer_class = GetTokenPair