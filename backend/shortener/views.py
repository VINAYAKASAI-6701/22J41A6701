# shortener/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny  # ✅ Add this
from django.shortcuts import get_object_or_404, redirect

from .models import ShortURL
from .serializers import ShortURLSerializer
import random
import string

class CreateShortURLView(APIView):
    permission_classes = [AllowAny]  # ✅ Make public

    def post(self, request):
        serializer = ShortURLSerializer(data=request.data)
        if serializer.is_valid():
            # Generate a random 6-character short code
            short_code = ''.join(random.choices(string.ascii_letters + string.digits, k=6))

            # Create and save the short URL
            original_url = serializer.validated_data['original_url']
            short_url = request.build_absolute_uri(f'/api/{short_code}/')
            ShortURL.objects.create(original_url=original_url, short_code=short_code)

            return Response({
                "short_url": short_url
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RedirectShortURLView(APIView):
    permission_classes = [AllowAny]  # ✅ Also make redirection public

    def get(self, request, short_code):
        url_obj = get_object_or_404(ShortURL, short_code=short_code)
        return redirect(url_obj.original_url)
