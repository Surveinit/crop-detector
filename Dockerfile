# Use Python 3.6.12 base image
FROM python:3.6.12

# Set the working directory inside the container
WORKDIR /app

# Copy your project files into the container
COPY . /app

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose the port your Flask app runs on (adjust if needed)
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
