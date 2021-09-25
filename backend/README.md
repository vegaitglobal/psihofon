# Psihofon backend (Django)


## Requirements
- **Docker**:
    - Windows - [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
    - Mac - [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
    - Linux - [Docker Engine](https://docs.docker.com/engine/install/#server)
      and [Docker Compose](https://docs.docker.com/compose/install/)

## Project setup

1. Create `backend/.env` based on `backend/example.env`
2. Run:

        `docker-compose up`

3. **(Optional)** To create superuser, run:

        `docker exec -it psihofon-django sh -c 'python manage.py createsuperuser --noinput'`

4. To load fixtures, run:

        `docker exec -it psihofon-django sh -c 'python manage.py loaddata psihofon/fixtures/*.json'`
