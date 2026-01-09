#!/bin/bash

# Start Next.js development server for WSL
echo "Starting Next.js development server on port 3001..."
echo "----------------------------------------"
echo "Access the application at:"
echo "  http://localhost:3001"
echo "----------------------------------------"

# Run Next.js with explicit hostname binding for WSL
npx next dev --hostname 0.0.0.0 --port 3001