FROM node:11.14.0-alpine as build-stage
WORKDIR /application-frontend
COPY ./crud-app/ /application-frontend
RUN npm install
EXPOSE 4200
# RUN npm run start

# FROM nginx:1.15.12-alpine
# COPY --from=build-stage /application-frontend/dist/crud-app /usr/share/nginx/html
# COPY --from=build-stage /application-frontend/nginx.conf/nginx.conf /etc/nginx/nginx.conf
