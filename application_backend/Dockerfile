FROM python:3.6.8-alpine3.9
WORKDIR /application
RUN \
    apk add --no-cache postgresql-libs postgresql-dev gcc \ 
    python3-dev \
    musl-dev
COPY . /application/
RUN pip install -r /application/requirements.txt
EXPOSE 8000