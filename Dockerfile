# Use Node.js image as base
# docker build -t mcp_webappdk /mnt/j/dev/Portfolio/mcp_webapp
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (replace 'npm run build' with your build command)
RUN npm run build

# Expose the port (if your app runs on a specific port)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
