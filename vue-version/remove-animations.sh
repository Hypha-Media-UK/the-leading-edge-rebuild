#!/bin/bash

# This script removes animation code from Vue components

# Find all Vue files
echo "Finding Vue files..."
find src -name "*.vue" -type f > vue_files.txt

# Remove v-motion directives and animation-related code
echo "Removing animation code from Vue components..."

while IFS= read -r file; do
  echo "Processing $file"
  
  # Remove v-motion directives
  sed -i '' 's/v-motion//g' "$file"
  
  # Remove animation binding properties
  sed -i '' 's/:initial="[^"]*"//g' "$file"
  sed -i '' 's/:enter="[^"]*"//g' "$file"
  sed -i '' 's/:exit="[^"]*"//g' "$file"
  sed -i '' 's/v-bind="[^"]*Animation[^"]*"//g' "$file"
  
  # Remove animation import lines
  sed -i '' '/import.*useAnimation.*from.*composables\/useAnimations/d' "$file"
  
  # Remove delay props
  sed -i '' '/delay:.*{.*type:.*Number.*default:.*[0-9]/d' "$file"
done < vue_files.txt

echo "Animation removal complete"
rm vue_files.txt
