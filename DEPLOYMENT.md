# Deployment Guide for CBSE Learning App

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your Git repository (GitHub/GitLab/Bitbucket)
   - Or upload the project folder directly

3. **Configure Project**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Environment Variables** (if needed)
   - No environment variables required for current setup

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

6. **Make Public**
   - After deployment, go to Project Settings
   - Under "Deployment Protection", ensure it's set to **"Public"** or **"Disabled"**
   - This ensures anyone can access the app without login

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd cbse-learning-app
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? cbse-learning-app
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Option 3: Deploy via Git Integration (Best for Continuous Deployment)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Add video switching and One Shot videos"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-deploy on every push to main branch

## Troubleshooting

### Issue: Deployment Requires Login

**Problem:** App redirects to Vercel login page when accessed

**Solution:**
1. Go to your Vercel project dashboard
2. Click on "Settings"
3. Navigate to "Deployment Protection"
4. Select **"Standard Protection"** or **"Disabled"**
5. Save changes
6. Redeploy if necessary

### Issue: Build Fails

**Common causes:**
- Missing dependencies: Run `npm install` locally first
- TypeScript errors: Run `npm run build` locally to check
- Environment issues: Check Node.js version (should be 18+)

**Fix:**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build

# If successful, commit and redeploy
git add .
git commit -m "Fix build issues"
git push
```

### Issue: Videos Not Loading

**Possible causes:**
- YouTube API restrictions
- Invalid video IDs
- Network/CORS issues

**Fix:**
- Verify video IDs are correct
- Test videos manually on YouTube
- Check browser console for errors

## Testing Locally Before Deployment

Always test locally first:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000

# Test production build
npm run build
npm start
```

## Post-Deployment Checklist

- [ ] App loads without login requirement
- [ ] Video player displays correctly
- [ ] Multiple videos appear for concepts with 2+ videos
- [ ] Video switching works (click different videos)
- [ ] Test on both Maths and Science chapters
- [ ] Mobile responsiveness check
- [ ] Performance check (Lighthouse score)

## Current Deployment Status

**URL:** https://cbse-8qvrzn9th-raghus-projects-5d876d6d.vercel.app/

**Issue:** Currently redirecting to login page - needs deployment protection settings updated

**Next Steps:**
1. Login to Vercel dashboard
2. Update deployment protection to "Public"
3. Test the URL again
4. If still issues, try redeploying

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
