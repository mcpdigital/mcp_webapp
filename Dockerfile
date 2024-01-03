# Use Node.js image as base
#mcplaza@MARCELO-PC:/mnt/j/dev/portfolio$ docker build -t mcp_webappdk /mnt/j/dev/Portfolio/mcp_webapp from the directory mcplaza@MARCELO-PC:/mnt/j/dev/portfolio$
# Use an alpine version of node which is much smaller
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies with the --production flag to only install necessary dependencies
RUN npm install --production

# Use multi-stage builds - This will create a separate build stage that will be discarded in the final image
FROM node:alpine

WORKDIR /usr/app

# Copy only the built app and package.json from the previous stage
COPY --from=0 /usr/app .

# Expose the port (if your app runs on a specific port)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]


