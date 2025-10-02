# FOIA Portal - Contributing Guide

Thank you for your interest in contributing to the FOIA Portal project! This guide will help you get started.

## Repository Structure

This repository contains the backend component of the FOIA portal:

- **backend/**: Drupal-based API and content management system
- **.devcontainer/**: Development container configuration
- **.github/**: GitHub workflows and templates

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/FOIA-Portal---Unified-Repository.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

### Backend Development
See [backend/README.md](backend/README.md) for detailed setup instructions.

## Making Changes

### Backend Changes
- Navigate to the `backend/` directory
- Follow Drupal best practices
- Test your changes with PHPUnit and Behat
- Ensure code follows PSR standards

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation as needed
3. Add or update tests for your changes
4. Create a pull request with a clear description
5. Request review from maintainers

## Code Review

All submissions require review. We use GitHub pull requests for this purpose.

## Testing

- Backend: Run `composer test` in the backend directory
- Frontend: Run `npm test` in the frontend directory

## Documentation

- Update relevant documentation in the `docs/` directory
- Update README files as needed
- Add inline code comments for complex logic

## Questions?

If you have questions, please open an issue or reach out to the maintainers.

## License

By contributing to this project, you agree to license your contributions under the same license as the project (CC0 1.0 Universal).