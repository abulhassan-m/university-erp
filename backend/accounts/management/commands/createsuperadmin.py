from django.core.management.base import BaseCommand
from accounts.models import User

class Command(BaseCommand):
    help = 'Create a super admin user if none exists'

    def handle(self, *args, **kwargs):
        if not User.objects.filter(is_superuser=True, is_superadmin=True).exists():
            username = input("Enter super admin username: ")
            email = input("Enter super admin email: ")
            password = input("Enter super admin password: ")

            user = User.objects.create_superuser(
                username=username,
                email=email,
                password=password
            )
            user.is_superadmin = True
            user.save()

            self.stdout.write(self.style.SUCCESS(f'Successfully created super admin: {username}'))
        else:
            self.stdout.write(self.style.WARNING('Super admin already exists'))
