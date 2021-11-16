FROM node:17-alpine as base

WORKDIR /src
COPY . /
EXPOSE 3999

FROM base as production
ENV NODE_ENV=production
RUN yarn install
RUN yarn add bcrypt
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN yarn install
RUN yarn add bcrypt

COPY . /
CMD ["yarn", "ts-node", "index.ts"]
