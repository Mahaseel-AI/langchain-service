FROM node:18.16.0-alpine 
WORKDIR /app
COPY ./package* ./
RUN pwd
RUN npm install
COPY . .
RUN npm run build

EXPOSE 4200
CMD ["npm", "start"]