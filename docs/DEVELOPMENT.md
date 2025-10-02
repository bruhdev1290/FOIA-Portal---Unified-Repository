# 🚀 Development Guide

This guide helps developers set up and work with the FOIA Portal codebase on any operating system.

## 🏁 Quick Start

### Method 1: Dev Containers (Recommended for All Platforms)

**Perfect for beginners and ensures consistency across all operating systems!**

#### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

#### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
   cd FOIA-Portal---Unified-Repository
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Install Dev Containers extension:**
   - Open VS Code Extensions (Ctrl+Shift+X)
   - Search for "Dev Containers"
   - Install the extension by Microsoft

4. **Start the dev container:**
   - Press `F1` or `Ctrl+Shift+P`
   - Type "Dev Containers: Reopen in Container"
   - Wait for the container to build (5-10 minutes first time)

5. **You're ready to develop!** 🎉

### Method 2: Windows Manual Setup

#### Prerequisites for Windows

1. **Install Windows Subsystem for Linux (WSL2):**
   ```powershell
   # Run in PowerShell as Administrator
   wsl --install
   # Restart your computer when prompted
   ```

2. **Install required software:**
   - [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
   - [Git for Windows](https://git-scm.com/download/win)
   - [Ruby 3.1+](https://rubyinstaller.org/) (for Jekyll frontend)
   - [Node.js LTS](https://nodejs.org/) (for frontend assets)
   - [PHP 8.1+](https://windows.php.net/download/) (for Drupal backend)
   - [Composer](https://getcomposer.org/download/) (PHP package manager)

3. **Configure Git for Windows:**
   ```cmd
   git config --global core.autocrlf true
   git config --global core.filemode false
   ```

#### Backend Setup on Windows

1. **Clone and enter directory:**
   ```cmd
   git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
   cd FOIA-Portal---Unified-Repository\backend
   ```

2. **Install PHP dependencies:**
   ```cmd
   composer install
   ```

3. **Start with Docker:**
   ```cmd
   docker-compose up -d
   ```

#### Frontend Setup on Windows

1. **Install Ruby dependencies:**
   ```cmd
   cd ..\frontend
   bundle install
   ```

2. **Install Node.js dependencies:**
   ```cmd
   npm install
   ```

3. **Start Jekyll development server:**
   ```cmd
   bundle exec jekyll serve
   ```

   The frontend will be available at: http://localhost:4000

### Method 3: macOS Manual Setup

#### Prerequisites for macOS

1. **Install Homebrew:**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install required software:**
   ```bash
   brew install git docker php composer node ruby
   brew install --cask docker visual-studio-code
   ```

#### Backend Setup on macOS

```bash
# Clone repository
git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
cd FOIA-Portal---Unified-Repository

# Install dependencies
cd backend
composer install

# Start services
docker-compose up -d
```

### Method 4: Linux Manual Setup

#### Prerequisites for Ubuntu/Debian

```bash
# Update package list
sudo apt update

# Install required packages
sudo apt install git docker.io docker-compose php php-cli php-mbstring php-xml composer nodejs npm

# Add user to docker group
sudo usermod -aG docker $USER
# Log out and back in for group changes to take effect
```

#### Backend Setup on Linux

```bash
# Clone repository
git clone https://github.com/bruhdev1290/FOIA-Portal---Unified-Repository.git
cd FOIA-Portal---Unified-Repository

# Install dependencies
cd backend
composer install

# Start services
docker-compose up -d
```

## 🛠️ Troubleshooting

### Windows-Specific Issues

#### Docker Desktop Issues
```powershell
# If Docker Desktop won't start:
# 1. Enable Hyper-V in Windows Features
# 2. Enable virtualization in BIOS
# 3. Restart computer
# 4. Try running as Administrator:
```

#### WSL2 Issues
```powershell
# Update WSL2 kernel:
wsl --update

# Set WSL2 as default:
wsl --set-default-version 2

# Check WSL status:
wsl --status
```

#### File Permission Issues
```cmd
# If you get permission errors:
# 1. Run VS Code as Administrator
# 2. Or add your user to docker-users group in Windows
```

### macOS-Specific Issues

#### Docker Memory Issues
```bash
# Increase Docker memory allocation:
# Docker Desktop > Settings > Resources > Memory > 4GB+
```

#### Permission Issues
```bash
# Fix Docker permission issues:
sudo chown -R $(whoami) ~/.docker
```

### Linux-Specific Issues

#### Docker Permission Issues
```bash
# Add user to docker group:
sudo usermod -aG docker $USER
# Log out and back in

# Fix Docker socket permissions:
sudo chmod 666 /var/run/docker.sock
```

### General Issues

#### Container Build Failures
```bash
# Clean Docker system:
docker system prune -a

# Rebuild containers:
docker-compose down
docker-compose up --build
```

#### Port Conflicts
```bash
# Check what's using port 80:
# Windows:
netstat -ano | findstr :80

# macOS/Linux:
lsof -i :80

# Kill process using port:
# Windows:
taskkill /PID <PID> /F

# macOS/Linux:
sudo kill -9 <PID>
```

#### Database Connection Issues
```bash
# Reset database:
docker-compose down
docker volume prune
docker-compose up -d

# Check database logs:
docker-compose logs db
```

## 🔧 Development Tools

### Recommended VS Code Extensions

Essential extensions for development:

```json
{
  "recommendations": [
    "ms-vscode-remote.remote-containers",
    "bmewburn.vscode-intelephense-client",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "redhat.vscode-yaml"
  ]
}
```

### Useful Commands

```bash
# Backend commands (run in backend/ directory):
composer install              # Install PHP dependencies
composer update               # Update dependencies
vendor/bin/phpcs              # Check coding standards
vendor/bin/phpcbf             # Fix coding standards
vendor/bin/phpunit            # Run tests

# Docker commands:
docker-compose up -d          # Start services in background
docker-compose down           # Stop services
docker-compose logs           # View logs
docker-compose exec web bash  # Access web container

# Git commands:
git status                    # Check file status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push origin branch-name   # Push to remote branch
```