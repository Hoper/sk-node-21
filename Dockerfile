FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs
COPY . /app
CMD ["usr/bin/node", "/app/index.js"]
