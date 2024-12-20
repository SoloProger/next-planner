FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@17

RUN npm ci

COPY . .

FROM base as dev

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]


FROM base as prod

RUN ng build

FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=prod /app/dist/client/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

