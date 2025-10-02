# Deployment Guide

This document provides instructions for deploying the FOIA Portal application.

## Prerequisites

- Docker and Docker Compose
- Access to target environment
- Required environment variables configured

## Environment Setup

### Development
```bash
# Clone the repository
git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
cd FOIA-Portal---Unified-Repository

# Start the development environment
docker-compose up -d
```

### Staging/Production

The application uses Docker containers for deployment. Ensure the following environment variables are set:

- `DATABASE_URL`
- `DRUPAL_SETTINGS`
- Any other environment-specific configurations

## Backend Deployment

The backend is a Drupal application. See `backend/README.md` for specific deployment instructions.

## Monitoring

- Application logs are available through Docker logs
- Health checks are configured in `docker-compose.yml`
- CI/CD pipeline status can be monitored in GitHub Actions

## Troubleshooting

Common deployment issues and their solutions:

1. **Database Connection Issues**: Verify DATABASE_URL and database accessibility
2. **Permission Issues**: Ensure proper file permissions for Drupal files
3. **Memory Issues**: Adjust PHP memory limits in configuration

For additional support, please create an issue in the GitHub repository.