# FROM node:18-alpine as development

# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "gatsby-config.ts", "gatsby-browser.js", "./"]

# RUN npm install

# COPY . .

# EXPOSE 8000

# CMD ["npm", "run", "develop"]

FROM node:18-alpine as production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "gatsby-config.ts", "gatsby-browser.js", "./"]
RUN npm i

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "start"]