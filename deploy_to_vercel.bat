@echo off
echo ========================================
echo Deploy to Vercel
echo ========================================
echo.
echo Your code has been successfully pushed to GitHub.
echo Now we'll deploy it to Vercel.
echo.
echo Opening Vercel dashboard in your browser...
echo.
timeout /t 3 /nobreak >nul
start https://vercel.com/new
echo.
echo Please follow these steps in your browser:
echo 1. Sign up/in with GitHub
echo 2. Click "New Project"
echo 3. Select your "creodesigners" repository
echo 4. Click "Deploy"
echo.
echo The deployment process will take 2-3 minutes.
echo Once completed, you'll get a URL for your live website.
echo.
pause