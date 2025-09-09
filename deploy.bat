@echo off
echo CREO Designers Deployment Script
echo ================================
echo.
echo Please follow these steps:
echo 1. Run 'vercel login' in your terminal
echo 2. Choose Google authentication when prompted
echo 3. After successful login, run this script again
echo.
pause
echo.
echo Setting up project...
cd /d "C:\Users\nikhil\Desktop\templates\creodesigners"
echo.
echo Deploying to Vercel...
vercel --prod --yes
echo.
echo Deployment completed!
pause