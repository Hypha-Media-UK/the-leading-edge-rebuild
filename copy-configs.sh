#!/bin/bash

# Build the app
echo "Building the application..."
npm run build

# Copy configuration files to the dist folder
echo "Copying configuration files to dist folder..."
cp .htaccess web.config nginx.conf deployment-guide.md dist/

echo "Done! Your build is ready for deployment."
echo "Upload the entire contents of the dist folder to your server."
echo "See deployment-guide.md for detailed instructions."
