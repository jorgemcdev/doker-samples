FROM node:6.5.0

RUN useradd --user-group --create-home --shell /bin/false node_app

ENV HOME=/home/node_app

COPY package.json npm-shrinkwrap.json $HOME/app/

RUN chown -R node_app:node_app $HOME/*
USER node_app
WORKDIR $HOME/app
RUN npm install

CMD ["node", "dist/index.js"]
