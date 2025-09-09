# Vercel Deployment Instructions

## Step-by-Step Deployment Guide

### 1. Login to Vercel

Open a new terminal/command prompt and run:

```bash
vercel login
```

When prompted with the authentication options:
- Use the arrow keys to select "Continue with Google" (should be the second option)
- Press Enter to confirm

This will open a browser window where you can complete the Google authentication.

### 2. Deploy the Website

After successful login, navigate to your project directory and deploy:

```bash
cd creodesigners
vercel --prod
```

When prompted:
- Select the default options by pressing Enter
- Confirm the deployment when asked

### 3. Alternative Deployment Method

If you prefer to deploy using the Vercel Dashboard:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to https://vercel.com/dashboard
3. Click "New Project"
4. Import your repository
5. Configure the project settings:
   - Framework: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"

### 4. Environment Variables (if needed)

If your application requires environment variables:

1. Add them in the Vercel Dashboard under "Settings" > "Environment Variables"
2. Or use the CLI:
   ```bash
   vercel env add <NAME>
   ```

### 5. Custom Domain (optional)

To use a custom domain:

1. In the Vercel Dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Login Issues

If you encounter login issues:
1. Try `vercel logout` to clear existing credentials
2. Run `vercel login` again
3. Try a different authentication method if Google doesn't work

### Deployment Issues

If deployment fails:
1. Check the build logs in the Vercel Dashboard
2. Ensure all dependencies are correctly listed in package.json
3. Verify that the build command is correct

## Support

For additional help:
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment