# Psihofon backend (Django)

## Project setup

1. Create `backend/.env` based on `backend/example.env`
2. Run: 

        `docker-compose up`

3. **(Optional)** To create superuser, run:
 
        `docker exec -it psihofon-django sh -c 'python manage.py createsuperuser --noinput'`
