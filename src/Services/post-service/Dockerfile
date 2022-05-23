FROM node:16-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --development

COPY . .

FROM base as dev
CMD ["yarn", "start:dev"]

FROM base as builder
RUN npm run build

FROM node:16-alpine as prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --production

COPY . .

COPY --from=builder /usr/src/app/dist ./dist

CMD ["node", "dist/main"]