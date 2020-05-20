FROM node:alpine

RUN mkdir -p /app/temps-in-map-frontend
WORKDIR /app/temps-in-map-frontend
COPY package.json /app/temps-in-map-frontend
COPY package-lock.json /app/temps-in-map-frontend
RUN npm i
COPY . /app/temps-in-map-frontend

CMD [ "npm", "start" ]