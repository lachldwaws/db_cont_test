# Full build
FROM mhart/alpine-node:16 AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN echo "Base build stage complete. Beginning slim build stage..."

# Slim build
FROM mhart/alpine-node:slim-16 AS prod
WORKDIR /app
COPY --from=base /app .
COPY src ./src
CMD ["node", "src/index.js"]
RUN echo "Slim build stage complete."