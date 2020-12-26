FROM node:14-alpine
WORKDIR /kei-bot
COPY . .
RUN npm install --production
CMD ["node", "index.js"]

