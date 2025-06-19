# Use Ubuntu 20.04 as base
FROM ubuntu:20.04

# Disable prompts during install
ENV DEBIAN_FRONTEND=noninteractive

# Update & install core compilers, interpreters, tools
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    gcc \
    g++ \
    make \
    python3 \
    python3-pip \
    openjdk-11-jdk \
    git \
    nano \
    software-properties-common

# Install latest Node.js LTS (v18)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Python: Install commonly used libraries
RUN pip3 install --no-cache-dir \
    numpy \
    pandas \
    matplotlib \
    scipy \
    scikit-learn \
    flask \
    requests \
    pillow \
    nltk \
    jupyter \
    seaborn

# JavaScript: install useful global tools/libraries
RUN npm install -g \
    typescript \
    eslint \
    nodemon \
    prettier

# Set working directory
WORKDIR /app

# Copy Node.js backend code
COPY package*.json ./
RUN npm install

# Copy rest of the codebase
COPY . .

# Open API port
EXPOSE 5000

# Default start command
CMD ["node", "server.js"]
