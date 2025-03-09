FROM node:lts-alpine

WORKDIR /home/node/app
COPY sshd_config /etc/ssh/
ADD . .

RUN npm install
RUN npm run build
EXPOSE 3000

ENV NODE_ENV=production

# Start and enable SSH
# Note: add \ at end of lines for continuation if multiline
RUN apk add openssh && echo "root:Docker!" | chpasswd && chmod +x ./entrypoint.sh && cd /etc/ssh/ && ssh-keygen -A

EXPOSE 8000 2222

ENTRYPOINT ["./entrypoint.sh"]
#CMD ["node", "./bin/script/server.js"]
