FROM node:18-alpine
WORKDIR /peepo-client

COPY public/ /peepo-client/public
COPY src/ /peepo-client/src
COPY package.json /peepo-client/package.json
COPY postcss.config.js /peepo-client/postcss.config.js
COPY tailwind.config.js /peepo-client/tailwind.config.js

RUN npm install
CMD ["npm", "start"]
