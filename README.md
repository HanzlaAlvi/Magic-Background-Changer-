# Magic Background Changer

## Description of CI/CD pipeline
This repository uses GitHub Actions to build a Docker image for the React+Vite app, push the image to Docker Hub, and deploy the image to an AWS EC2 instance via SSH automatically on each push to `main` or when a PR is merged.

Pipeline stages:
- Build: builds optimized production files and Docker image.
- Test (optional): runs a quick smoke test by starting the container and requesting `/`.
- Push: pushes the image to Docker Hub.
- Deploy: SSH to EC2, pull new image, restart the container.

## How to run locally
1. Install Node.js and npm.
2. `npm install`
3. `npm run dev` (dev server)
4. To build: `npm run build` (creates `dist`)
5. To run with Docker locally:
   ```bash
   docker build -t magic-bg .
   docker run -d -p 8080:80 magic-bg


   

