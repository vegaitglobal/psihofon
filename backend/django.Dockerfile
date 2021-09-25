FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

RUN apt-get update && apt-get install -y postgresql-client gettext
RUN pip install --upgrade pip

COPY entrypoint.sh      /app/
COPY requirements.txt   /app/

RUN pip install -r requirements.txt
COPY . /app/

WORKDIR /app/src

EXPOSE 8000

CMD ["/app/entrypoint.sh"]
