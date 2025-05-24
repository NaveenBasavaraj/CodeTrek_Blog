FROM node:18-alpine

WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install

# copy & build
COPY . .
RUN npm run build

# serve build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
