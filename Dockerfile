# Use Ubuntu 20.04 as base
FROM ubuntu:20.04

# Disable interactive prompts during install
ENV DEBIAN_FRONTEND=noninteractive

# Update & install base tools & compilers
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

# Link python3 to python for compatibility
RUN ln -s /usr/bin/python3 /usr/bin/python

# Install Node.js 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install Python libraries
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

# Install global Node tools
RUN npm install -g \
    typescript \
    eslint \
    nodemon \
    prettier

# Set app directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Open backend port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]
