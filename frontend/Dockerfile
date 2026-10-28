
FROM node:24-alpine

RUN apk add --no-cache ca-certificates

ENV NODE_OPTIONS=--use-system-ca

WORKDIR /app

RUN npm install --global pnpm@11.20.0

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0"]
