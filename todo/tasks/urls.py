from django.urls import path

from . import views

urlpatterns = [
    # path('', views.taskList, name='task-list'),
    path('', views.main, name='main'),
    # path('task/<int:id>', views.taskView, name="task-view"),
    # path('yourname/<str:name>', views.yourName, name='your-name'),
]