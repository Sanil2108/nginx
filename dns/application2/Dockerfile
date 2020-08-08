FROM node

WORKDIR /usr/share/web-app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]
