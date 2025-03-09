#!/bin/sh
set -e
#service ssh start
/usr/sbin/sshd

echo "Starting SSH ..."

node ./bin/script/server.js 2>&1 | tee out.log