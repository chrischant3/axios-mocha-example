# Use an official node runtime as a parent image
FROM node:8.9.2

# Set the working directory to /axios-mocha-test
WORKDIR /axios-mocha-test

# Copy the current directory contents into the container at /axios-mocha-test
ADD . /baxios-mocha-test

# Install any needed packages specified in package.json
RUN npm install

# Run app.py when the container launches
CMD [ "npm", "run", "test"]