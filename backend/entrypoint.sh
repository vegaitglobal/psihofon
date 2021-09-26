#!/bin/sh

set -ex

echo "Starting Django project..."

echo "Running migrations"
python3 manage.py migrate

echo "Updating fixtures"
python3 manage.py loaddata psihofon/fixtures/*.json

echo "Running development web server"
python3 manage.py runserver 0.0.0.0:8000
