FROM node:20 as base

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm ci

COPY . .

FROM base as dev

EXPOSE 3000

CMD ["nest", "start", "--watch"]


FROM base as prod

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
