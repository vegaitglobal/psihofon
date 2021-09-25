FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y postgresql-client gettext

# Create a user app without sudo permissions
RUN addgroup --gid 1000 app && adduser --uid 1000 --ingroup app --system app
RUN mkdir /app && chown app:app /app /var/log

USER app
RUN pip install --upgrade pip

COPY --chown=app:app entrypoint.sh      /app/
COPY --chown=app:app requirements.txt   /app/

RUN pip install -r /app/requirements.txt
COPY --chown=app:app ./src /app/src

WORKDIR /app/src

EXPOSE 8000

CMD ["/app/entrypoint.sh"]
