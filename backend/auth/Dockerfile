FROM node:18-alpine as base

FROM base as deps
WORKDIR /app
RUN npm i -g pnpm   
COPY package.json pnpm-lock.yaml ./
RUN pnpm i

FROM base as dev
ARG PORT
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE $PORT
CMD ["npm", "run", "start:dev"]

FROM base as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM base as prod
ARG PORT
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE $PORT
CMD ["npm", "run", "start:prod"]
