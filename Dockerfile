# Use the official Python image from the Docker Hub
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt /app/requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the rest of the application code into the container
COPY . /app

# Copy the .env file into the container
COPY .env /app/.env

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Copy the entrypoint.sh script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Ensure that the entrypoint.sh script is executable
RUN chmod +x /app/entrypoint.sh

# Define environment variable
ENV NAME World

# Run entrypoint.sh when the container launches
CMD ["/app/entrypoint.sh"]
