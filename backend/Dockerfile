FROM node:alpine

RUN mkdir -p /app/temps-in-map-backend
WORKDIR /app/temps-in-map-backend
COPY package.json /app/temps-in-map-backend
COPY package-lock.json /app/temps-in-map-backend
RUN npm i
COPY . /app/temps-in-map-backend

CMD [ "npm", "start" ]