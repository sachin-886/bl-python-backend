# Use the official Python image
FROM python:3.11

# Set the working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port (change it if needed)
EXPOSE 8000

# Command to run the application
CMD ["python", "main.py"]