FROM node:14.18-alpine as stage-build
RUN apk update
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
RUN npm run build

# FROM nginx:1.15
# COPY --from=stage-build /usr/src/app/dist/my-app/ /usr/share/nginx/html


