@echo off
echo ========================================
echo GitHub Repository Setup
echo ========================================
echo.
echo Please follow these steps:
echo 1. Go to github.com and log in to your account
echo 2. Click the "+" icon in the top right corner and select "New repository"
echo 3. Name your repository "creodesigners"
echo 4. Make sure to keep it public (unless you want it private)
echo 5. Don't initialize with a README
echo 6. Click "Create repository"
echo.
echo After creating the repository, please enter your GitHub username below:
echo.
set /p username="Enter your GitHub username: "
echo.
echo Setting up remote repository...
cd /d "C:\Users\nikhil\Desktop\templates\creodesigners"
git remote add origin https://github.com/%username%/creodesigners.git
echo.
echo Pushing code to GitHub...
git push -u origin master
echo.
echo Setup completed!
echo.
echo Now go to https://vercel.com and:
echo 1. Sign up/in with GitHub
echo 2. Click "New Project"
echo 3. Select your "creodesigners" repository
echo 4. Click "Deploy"
echo.
pause