# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]

# Surchargez la commande CMD en fonction de la valeur de NODE_ENV
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm start; else npm run dev; fi"]