FROM node:12-alpine as BUILD_IMAGE

RUN apk update && apk add yarn curl bash make && rm -rf /var/cache/apk/*

WORKDIR /usr/share/otasoft-booking

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

FROM node:12-alpine

WORKDIR /usr/share/otasoft-booking

RUN npm prune --production

RUN /usr/local/bin/node-prune

FROM node:12-alpine

WORKDIR /usr/share/microservices/otasoft-booking

COPY --from=BUILD_IMAGE /usr/share/microservices/otasoft-booking/dist ./dist
COPY --from=BUILD_IMAGE /usr/share/microservices/otasoft-booking/node_modules ./node_modules

EXPOSE 60322

CMD ["node", "dist/main"]
