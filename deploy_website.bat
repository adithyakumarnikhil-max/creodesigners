@echo off
echo ========================================
echo CREO Designers - Vercel Deployment
echo ========================================
echo.
echo This script will deploy your website to Vercel.
echo Make sure you have already logged in to Vercel using 'vercel login'
echo.
echo Current directory: %cd%
echo.
echo Changing to project directory...
cd /d "C:\\Users\\nikhil\\Desktop\\templates\\creodesigners"
echo Current directory: %cd%
echo.
echo Building and deploying to Vercel...
echo.
vercel --prod --yes
echo.
echo Deployment process completed!
echo.
echo If the deployment was successful, you should see a URL where your site is hosted.
echo.
pause