
# Dockerfile for client

# Stage 1: Build react client
FROM node:16-alpine

# Working directory be app
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# COPY next.config.js ./next.config.js

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]