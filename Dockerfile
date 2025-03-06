FROM node:lts

ADD ./api /home/node/app/
WORKDIR /home/node/app

ENV NODE_ENV=production
#EXPOSE 3000 2222
#ENTRYPOINT ["init.sh"]