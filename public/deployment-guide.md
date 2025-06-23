# SPA Deployment Guide for Vue Router History Mode

This guide will help you deploy your Vue.js Single Page Application (SPA) with proper routing support. The issue you're experiencing with 404 errors when refreshing pages is common with SPAs and can be fixed with the correct server configuration.

## What's Included

- `.htaccess` - For Apache web servers (most common with Plesk)
- `web.config` - For IIS web servers (sometimes used with Plesk)
- `nginx.conf` - Reference configuration for Nginx (if your Plesk uses Nginx)

## Deployment Steps

1. **Build your application:**
   
   The configuration files have been placed in the `public` directory, so they will be automatically included in your build.
   
   ```bash
   # Just run the build command
   npm run build
   ```

2. **Upload to your server:**
   
   Upload the entire contents of your `dist` folder to your server, including these configuration files.

3. **Plesk Configuration:**
   
   - If using Apache (most common): The `.htaccess` file should work automatically
   - If using Nginx: You'll need to add the configuration from `nginx.conf` to your site's Nginx settings in Plesk
   - If using IIS: The `web.config` file should work automatically

## Verifying It Works

1. Navigate to your website's homepage
2. Click links to navigate to different pages (should work)
3. Refresh the page on a non-homepage URL (should work now instead of 404)
4. Try accessing a non-homepage URL directly (should work now instead of 404)

## Troubleshooting

If you still encounter 404 errors:

1. **Check if the server is using the configuration files:**
   - For Apache: Make sure `.htaccess` files are allowed (AllowOverride setting)
   - For Nginx: Confirm the configuration was added correctly
   - For IIS: Ensure the URL Rewrite module is installed

2. **Check file permissions:**
   - Ensure the configuration files have appropriate read permissions

3. **Contact your hosting provider:**
   - If you can't modify server configurations directly, ask your hosting provider to add the necessary rewrite rules

4. **Alternative approach:**
   - If server configuration isn't possible, you could modify your Vue router to use hash mode instead:
   ```javascript
   // In main.ts, change:
   const router = createRouter({
     history: createWebHistory(),
     // to:
     history: createWebHashHistory(),
   ```

## Additional Resources

- [Vue Router: HTML5 History Mode](https://router.vuejs.org/guide/essentials/history-mode.html)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
