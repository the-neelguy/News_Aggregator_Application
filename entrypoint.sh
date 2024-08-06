#!/bin/bash
# Wait for the PostgreSQL database to be ready
while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

# Apply database migrations
python manage.py migrate

# Start the Django server
python manage.py runserver 0.0.0.0:8000
