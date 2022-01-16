FROM node:14

WORKDIR /app

COPY . /app/

RUN yarn install

EXPOSE 3001

CMD ["npm", "run", "start:prod" ]