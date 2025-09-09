# CREO Designers - Vercel Deployment Script (PowerShell)

Write-Host "========================================" -ForegroundColor Green
Write-Host "CREO Designers - Vercel Deployment" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "This script will deploy your website to Vercel." -ForegroundColor Yellow
Write-Host "Make sure you have already logged in to Vercel using 'vercel login'" -ForegroundColor Yellow
Write-Host ""
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Changing to project directory..." -ForegroundColor Cyan
Set-Location -Path "C:\Users\nikhil\Desktop\templates\creodesigners"
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""
Write-Host "Building and deploying to Vercel..." -ForegroundColor Cyan
Write-Host ""

vercel --prod --yes

Write-Host ""
Write-Host "Deployment process completed!" -ForegroundColor Green
Write-Host ""
Write-Host "If the deployment was successful, you should see a URL where your site is hosted." -ForegroundColor Yellow
Write-Host ""
Read-Host -Prompt "Press Enter to exit"