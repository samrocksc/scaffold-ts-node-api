# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install SWC globally
RUN npm install -g @swc/cli @swc/core

# Copy the rest of the application code
COPY . .

# Build the TypeScript code using SWC
RUN swc src -d dist

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "dist/src/index.js"]
