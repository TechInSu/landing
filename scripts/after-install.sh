#!/bin/bash

cd /home/ubuntu/frontend_projects/landing

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 18.17.1
nvm use 18.17.1

npm install -g yarn
npm install -g typescript

yarn
yarn build

rsync -a /home/ubuntu/frontend_projects/landing/dist/  /var/www/html