#!/bin/bash
cd /home/ubuntu/frontend_projects/landing

npm install
npm run build

rsync -a /home/ubuntu/frontend_projects/landing/dist/  /var/www/html