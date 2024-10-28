# Use a Node.js image
FROM node:21-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Pass the token as a build argument
ARG GITHUB_TOKEN

# Configure git to use the token for cloning
RUN apk add --no-cache git \
    && git config --global url."https://${GITHUB_TOKEN}:@github.com/".insteadOf "https://github.com/"

# Clone the repository
RUN git clone https://github.com/habrpg-com/Archangel-CMS.git .

# Install dependencies with pnpm
RUN pnpm install

# Start the app
CMD ["pnpm", "run", "app:api", "start"]

