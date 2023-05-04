FROM node:18.12.1

WORKDIR /user/src/front

COPY . .

RUN yarn install

EXPOSE 3000

RUN yarn build

CMD ["yarn","start"]