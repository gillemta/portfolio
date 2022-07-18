# stage 1
FROM node:16-alpine as builder

WORKDIR /app
COPY .  /app
RUN npm install @angular/cli -g
RUN npm i
# A head-of-time compilation
RUN ng build --configuration production

# stage 2
FROM nginx:1.17.1-alpine
COPY --from=builder /app/dist/portfolio/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]