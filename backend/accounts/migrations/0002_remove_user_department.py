# Generated by Django 5.1.3 on 2024-11-13 11:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='department',
        ),
    ]
