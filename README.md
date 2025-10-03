# 🏛️ FOIA Portal - Unified Repository

[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![CI/CD Pipeline](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/actions)

A comprehensive web application system for managing Freedom of Information Act (FOIA) requests to federal agencies. This unified repository contains the complete FOIA portal system that helps citizens submit and track their FOIA requests.

## 📋 What is FOIA?

The [Freedom of Information Act (FOIA)](https://www.justice.gov/oip/freedom-information-act-5-usc-552) gives you the right to access information from the federal government. This portal makes it easier to submit requests to any federal agency from one central location.

## 🏗️ System Overview

This repository contains the complete FOIA Portal system:

- **Backend**: A Drupal-based API and content management system for processing FOIA requests
- **Frontend**: A Jekyll-based public-facing website where citizens can submit and track requests
- **Admin Interface**: Drupal's administrative interface for agencies to manage and respond to requests

## 📁 Repository Structure

```
FOIA-Portal---Unified-Repository/
├── 📁 backend/              # Drupal backend application
│   ├── 📁 config/          # Drupal configuration files
│   ├── 📁 blt/             # Build and Launch Tool setup
│   ├── 📄 composer.json    # PHP dependencies
│   └── 📄 README.md        # Backend setup instructions
├── 📁 frontend/             # Jekyll frontend application
│   ├── 📁 _layouts/        # Jekyll templates
│   ├── 📁 _includes/       # Reusable components
│   ├── 📁 assets/          # CSS, JS, images
│   ├── 📄 _config.yml      # Jekyll configuration
│   ├── 📄 Gemfile          # Ruby dependencies
│   ├── 📄 package.json     # Node.js dependencies
│   └── 📄 README.md        # Frontend setup instructions
├── 📁 docs/                 # Project documentation
│   ├── 📄 DEVELOPMENT.md   # Development guide
│   └── 📄 DEPLOYMENT.md    # Deployment instructions
├── 📁 .devcontainer/        # VS Code dev container setup
├── 📁 .github/              # GitHub workflows and templates
├── 📄 docker-compose.yml    # Docker services configuration
├── 📄 README.md            # This file
└── 📄 CONTRIBUTING.md      # How to contribute
```

## 🚀 Quick Start Guide

### Option 1: Easy Setup with Dev Containers (Recommended)

**Perfect for beginners!** This method works on Windows, Mac, and Linux.

#### For Windows Users:

1. **Install Required Software:**
   - Download and install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
   - Download and install [Visual Studio Code](https://code.visualstudio.com/)
   - Download and install [Git for Windows](https://git-scm.com/download/win)

2. **Setup VS Code:**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for and install "Dev Containers" extension

3. **Get the Code:**
   ```cmd
   # Open Command Prompt or PowerShell
   git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
   cd FOIA-Portal---Unified-Repository
   code .
   ```

4. **Start Development Environment:**
   - VS Code will detect the dev container configuration
   - Click "Reopen in Container" when prompted (or press F1 and type "Dev Containers: Reopen in Container")
   - Wait for the container to build (first time takes 5-10 minutes)
   - You're ready to develop! 🎉

#### For Mac/Linux Users:

1. **Install Required Software:**
   ```bash
   # Mac (using Homebrew)
   brew install git docker
   brew install --cask visual-studio-code
   
   # Ubuntu/Debian Linux
   sudo apt update
   sudo apt install git docker.io code
   ```

2. **Follow steps 2-4 from Windows instructions above**

### Option 2: Manual Setup

If you prefer to set up everything manually, see our detailed guides:
- [Complete Development Guide](docs/DEVELOPMENT.md)
- [Backend Setup Instructions](backend/README.md)

## 🛠️ What You Can Do

Once you have the development environment running, you can:

- **View the Application**: Access the local development site
- **Submit Test Requests**: Test the FOIA request submission process
- **Manage Agencies**: Add/edit federal agency information
- **Process Requests**: Work with the request management system
- **Run Tests**: Execute automated tests to ensure everything works
- **Make Changes**: Modify the code and see changes immediately

## 🎯 Key Features

### For Citizens:
- **Easy Request Submission**: Simple forms to submit FOIA requests
- **Agency Directory**: Find the right agency for your request
- **Request Tracking**: Check the status of your submitted requests
- **Learning Resources**: Understand how FOIA works

### For Agencies:
- **Request Management**: Process and respond to incoming requests
- **Reporting Tools**: Generate required annual and quarterly reports
- **User Management**: Control access and permissions
- **API Integration**: Connect with existing agency systems

### For Developers:
- **RESTful API**: Well-documented API for building frontends and integrations
- **Modern Stack**: Built with Drupal (backend) and Jekyll (frontend)
- **Docker Support**: Consistent development environment
- **Automated Testing**: Comprehensive test suite
- **CI/CD Pipeline**: Automated deployment and testing

## 📚 Documentation & Help

### 📖 Documentation
- **[🚀 Development Guide](docs/DEVELOPMENT.md)** - Detailed setup and development instructions
- **[🚢 Deployment Guide](docs/DEPLOYMENT.md)** - How to deploy the application
- **[🤝 Contributing Guide](CONTRIBUTING.md)** - How to contribute to this project
- **[⚙️ Backend Documentation](backend/README.md)** - Technical details about the Drupal backend

### 🆘 Getting Help
- **[📋 Create an Issue](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/issues/new/choose)** - Report bugs or request features

### 🔧 Troubleshooting Common Issues

#### Windows-Specific Issues:

**Docker Desktop not starting:**
- Ensure Hyper-V is enabled in Windows Features
- Check that virtualization is enabled in BIOS
- Try restarting Docker Desktop

**VS Code can't find Docker:**
- Make sure Docker Desktop is running
- Restart VS Code after installing Docker
- Check that Docker is added to your PATH

**Git line ending issues:**
- Run: `git config --global core.autocrlf true`
- This automatically handles Windows/Linux line ending differences

**Permission issues:**
- Run VS Code as Administrator if you encounter permission errors
- Ensure your user is in the docker-users group

#### General Issues:

**Container build fails:**
- Check your internet connection
- Try running: `docker system prune` to clean up Docker
- Restart Docker Desktop and try again

**Application not loading:**
- Wait a few minutes for services to fully start
- Check Docker Desktop logs for any error messages
- Ensure ports 80 and 3306 are not being used by other applications

## 🤝 Contributing

We welcome contributions from developers, designers, and FOIA experts! Here's how you can help:

### 🌟 Ways to Contribute
- **🐛 Report Bugs**: Found something broken? [Create an issue](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/issues/new?template=bug_report.md)
- **💡 Suggest Features**: Have an idea? [Request a feature](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/issues/new?template=feature_request.md)
- **📝 Improve Documentation**: Help make our docs clearer and more helpful
- **💻 Write Code**: Fix bugs, add features, or improve performance
- **🎨 Design**: Improve user experience and accessibility

### 🚀 Quick Contribution Steps
1. **Fork this repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes and test them**
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to your branch**: `git push origin feature/amazing-feature`
6. **Create a Pull Request**

Read our detailed [Contributing Guide](CONTRIBUTING.md) for more information.

## 📜 License

This project is in the **public domain** within the United States. Copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

**What this means:**
- ✅ You can use this code for any purpose
- ✅ No attribution required (but appreciated!)
- ✅ You can modify and distribute freely

## 🎯 Project Status & Roadmap

### Current Status: 🚧 Active Development

**Repository Contents:**
- ✅ **Backend API**: Complete Drupal-based FOIA processing system
- ✅ **Frontend**: Jekyll-based public portal for citizens
- ✅ **Admin Interface**: Full Drupal administrative interface

### Recent Updates:
- ✅ Repository reorganization and cleanup
- ✅ Improved documentation and setup guides
- ✅ Enhanced Windows support
- ✅ Added comprehensive GitHub templates

### Upcoming Features:
- 🔄 Enhanced API documentation
- 🔄 Improved testing coverage
- 🔄 Performance optimizations
- 🔄 Additional agency integrations
- � Frontend/Backend integration improvements

## 📞 Support & Community

### 🆘 Need Help?
- **[📋 GitHub Issues](https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository/issues)** - Report bugs and request features
- **[📚 Documentation](docs/)** - Comprehensive guides and references

### 🏛️ Government Resources
- **[FOIA.gov](https://www.foia.gov/)** - Official FOIA information
- **[DOJ FOIA Guide](https://www.justice.gov/oip/freedom-information-act-5-usc-552)** - Legal framework and requirements
- **[FOIA Improvement Act of 2016](https://www.justice.gov/oip/oip-summary-foia-improvement-act-2016)** - Legislative background
