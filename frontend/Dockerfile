# Use the official Ruby image
FROM ruby:3.1

# Set working directory
WORKDIR /app

# Install Node.js (required for Jekyll assets)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Copy Gemfile and package.json first for better caching
COPY Gemfile Gemfile.lock package.json package-lock.json ./

# Install Ruby dependencies
RUN bundle install

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 4000 (Jekyll default)
EXPOSE 4000

# Start Jekyll in development mode
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--incremental"]