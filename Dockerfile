# Stage 1: Build the static site
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the static site
RUN pnpm build

# Stage 2: Serve with nginx
# To switch to Next.js server mode later:
#   1. Remove `output: 'export'` from next.config.js
#   2. Replace this stage with:
#      FROM node:20-alpine
#      WORKDIR /app
#      COPY --from=builder /app ./
#      EXPOSE 3000
#      CMD ["pnpm", "start"]
FROM nginx:alpine

# Copy the static files to nginx
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
