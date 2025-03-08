FROM node:lts-alpine

WORKDIR /home/node/app
ADD ./api .

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "./bin/script/server.js"]
