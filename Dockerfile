FROM oven/bun:debian

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

ARG PORT
ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["bun", "run", "dev"]