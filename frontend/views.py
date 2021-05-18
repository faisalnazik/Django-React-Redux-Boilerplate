from django.shortcuts import render
from django.views import View
# Create your views here.
# def index(request):
#     return render(request, 'frontend/index.html')


class IndexView(View):
    
    def get(self, request):
        return render(request, 'frontend/index.html') #this file is placed in templates of project dir 