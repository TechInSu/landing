#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 18.17.1
nvm use 18.17.1
cd /home/ubuntu/frontend_projects/landing
