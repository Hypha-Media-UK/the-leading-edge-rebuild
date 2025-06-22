/**
 * This script removes all v-motion directives and animation-related code from Vue components
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import glob from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to recursively get all .vue files
function getVueFiles(directory) {
  return glob.sync(path.join(directory, '**/*.vue'));
}

// Function to remove v-motion directives and animation props
function removeAnimations(fileContent) {
  // Remove v-motion directives
  let updatedContent = fileContent.replace(/\s*v-motion\s*/g, '');
  
  // Remove animation binding properties
  updatedContent = updatedContent.replace(/\s*:initial="[^"]*"/g, '');
  updatedContent = updatedContent.replace(/\s*:enter="[^"]*"/g, '');
  updatedContent = updatedContent.replace(/\s*:exit="[^"]*"/g, '');
  updatedContent = updatedContent.replace(/\s*v-bind="[^"]*Animation[^"]*"/g, '');
  
  // Remove animation related imports
  updatedContent = updatedContent.replace(/import\s+{[^}]*useAnimation[^}]*}\s+from\s+['"]@\/composables\/useAnimations['"];?\n?/g, '');
  updatedContent = updatedContent.replace(/import\s+{[^}]*}\s+from\s+['"]@\/composables\/useAnimations['"];?\n?/g, '');
  
  // Remove animation related computed properties and functions
  const animationPropPattern = /\s*\/\/\s*Animation.*\n*\s*const\s+\w+Animation\s*=\s*computed\(\(\)\s*=>\s*\w+\([^)]*\)\);/g;
  updatedContent = updatedContent.replace(animationPropPattern, '');
  
  // Remove delay props
  const delayPropPattern = /\s*delay:\s*{\s*type:\s*Number,\s*default:\s*\d+\s*},?/g;
  updatedContent = updatedContent.replace(delayPropPattern, '');
  
  return updatedContent;
}

// Main execution
const vueFiles = getVueFiles('./src');
console.log(`Found ${vueFiles.length} Vue files to process`);

vueFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file contains animation code
    if (content.includes('v-motion') || 
        content.includes('useAnimation') || 
        content.includes(':initial=') || 
        content.includes(':enter=')) {
      
      const updatedContent = removeAnimations(content);
      
      // Only write if content changed
      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Removed animations from: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
});

console.log('Animation removal complete');
