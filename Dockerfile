FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       8018;/g' /etc/nginx/conf.d/default.conf
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
