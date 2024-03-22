# Use the official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Run the Node.js server
CMD ["yarn", "start"]
