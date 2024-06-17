# Base image
FROM node:20.11.0-alpine AS base

# Builder step
FROM base AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production step
FROM base AS production

WORKDIR /app

# COPY .env.local .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV production

CMD HOSTNAME="0.0.0.0" node server.js
