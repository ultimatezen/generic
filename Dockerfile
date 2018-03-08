FROM node:7.7.4-alpine

# File Author / Maintainer
LABEL authors="Tien Le <tien.le.in.jp@gmail.com>"

# Update & install required packages (python for bcrypt)
RUN echo -e 'http://dl-cdn.alpinelinux.org/alpine/edge/main\nhttp://dl-cdn.alpinelinux.org/alpine/edge/community\nhttp://dl-cdn.alpinelinux.org/alpine/edge/testing' > /etc/apk/repositories && \
  apk add --no-cache build-base python

# install aws-cli
RUN wget "s3.amazonaws.com/aws-cli/awscli-bundle.zip" -O "awscli-bundle.zip" && \
  unzip awscli-bundle.zip && \
  apk add --update groff less && \
  rm /var/cache/apk/* && \
  ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws && \
  rm awscli-bundle.zip && \
  rm -rf awscli-bundle

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# set your port
ENV PORT 8080

# expose the port to outside world
EXPOSE  8080

COPY scripts/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN ln -s /usr/local/bin/docker-entrypoint.sh /docker-entrypoint.sh

# use different entry point
ENTRYPOINT ["/docker-entrypoint.sh"]

# start command as per package.json
CMD ["npm", "start"]
