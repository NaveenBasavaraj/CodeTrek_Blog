FROM python:3.10-slim

# set working dir
WORKDIR /app

# install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy project
COPY . .

# expose & run
EXPOSE 8000
CMD ["gunicorn", "CodeTrek.wsgi:application", "--bind", "0.0.0.0:8000"]
