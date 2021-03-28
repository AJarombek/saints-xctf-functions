# Dockerfile which runs a mocked implementation of the SaintsXCTF Function API.
# Author: Andrew Jarombek
# Date: 3/28/2021

FROM python:3.9

LABEL maintainer="andrew@jarombek.com" \
      version="1.0.0" \
      description="Dockerfile which runs a mocked implementation of the SaintsXCTF Function API."

WORKDIR /src
COPY . .
RUN pip install pipenv \
    && pipenv install --system

STOPSIGNAL SIGTERM
EXPOSE 5000

ENTRYPOINT ["uwsgi", "--ini", "uwsgi.ini"]