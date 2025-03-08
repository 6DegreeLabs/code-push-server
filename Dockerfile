FROM node:lts-alpine

WORKDIR /home/node/app
ADD ./api .

RUN npm install
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production

# Discouraged
# ARG AZURE_STORAGE_ACCOUNT
# ARG AZURE_STORAGE_ACCESS_KEY

# ENV AZURE_STORAGE_ACCOUNT=$AZURE_STORAGE_ACCOUNT
# ENV AZURE_STORAGE_ACCESS_KEY=$AZURE_STORAGE_ACCESS_KEY

CMD ["node", "./bin/script/server.js"]
