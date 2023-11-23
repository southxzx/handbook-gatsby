FROM node:18-alpine

WORKDIR /app
COPY ["package.json", "package-lock.json*", "gatsby-config.ts", "gatsby-browser.js", "./"]

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop"]