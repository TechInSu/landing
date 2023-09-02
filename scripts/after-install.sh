#!/bin/bash

# Define project paths and variables
PROJECT_DIR="/home/ubuntu/frontend_projects/landing"
BUILD_DIR="$PROJECT_DIR/dist"
WEB_SERVER_DIR="/var/www/html"
NODE_VERSION="18.17.0"  # Specify the Node.js version you want to use

# Navigate to the project directory
cd "$PROJECT_DIR"

# Ensure that the necessary packages and tools are installed
sudo apt-get update
sudo apt-get install -y curl

# Install Node Version Manager (NVM) and use a specific Node.js version
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install "$NODE_VERSION"
nvm use "$NODE_VERSION"

# Install Yarn
npm install -g yarn

# Install project dependencies and build the project
yarn
yarn build

# Use rsync to deploy the built project to the web server directory
rsync -av "$BUILD_DIR/" "$WEB_SERVER_DIR"

# Optionally, restart your web server if needed
# For example, if you're using Apache:
# sudo service apache2 restart

# Print a success message
echo "Deployment completed successfully."
