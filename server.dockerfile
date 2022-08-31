FROM node:18-alpine3.15
# ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install -y 
COPY . . 
CMD ["yarn","run", "dev"]
EXPOSE 3000