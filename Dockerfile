# Base Image
FROM alpine

# Installing nodejs
RUN apk add --update nodejs npm

# Create app directory
RUN mkdir /financeapi

# Move to working directory
WORKDIR /financeapi

# Make owner of the working directory to the user
COPY  ./ ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Move to the server
WORKDIR /financeapi

# Start the server
CMD ["npm","start"]