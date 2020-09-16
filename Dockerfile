FROM node:12-alpine as build

WORKDIR /usr/share/otasoft-booking

ADD dist package.json ./

RUN yarn install --production

FROM node:12-alpine

WORKDIR /usr/share/otasoft-booking

COPY --from=build /usr/share/otasoft-booking .

EXPOSE 60231

CMD ["node", "main.js"]