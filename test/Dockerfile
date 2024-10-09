# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal

# Set the work directory for the application
WORKDIR app

# COPY the needed files to the app folder in Docker image
COPY playwright.config.ts .

# Install the dependencies in Node environment
RUN npm install @grafana/plugin-e2e

# Install browsers
RUN npx playwright install --with-deps chromium

# Run tests
CMD ["npx", "playwright", "test"]
