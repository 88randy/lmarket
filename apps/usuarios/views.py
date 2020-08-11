from django.shortcuts import render, redirect

# Create your views here.

def home(request):
    return render(request, 'usuarios/index.html', )

def login(request):
    return render(request, 'usuarios/login.html', )

def registro(request):
    return render(request, 'usuarios/registro.html', )