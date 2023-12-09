FROM node:18-slim

RUN npm i npm@latest -g 

RUN mkdir /opt/node_app

WORKDIR /opt/node_app

COPY  package.json package-lock.json* ./

RUN npm i -f

WORKDIR /opt/node_app/app
COPY  . .

EXPOSE 8888

CMD [ "node", "index.js" ]