# Use an official Node.js runtime as a parent image
FROM node:20.13.1-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application with environment variables
ARG VITE_API_URL
ARG VITE_IMAGE_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_IMAGE_URL=$VITE_IMAGE_URL
RUN npm run build

# Use an official Nginx image to serve the built application
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]