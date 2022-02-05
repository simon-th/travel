FROM node:16.13

WORKDIR /site

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "8000" ]