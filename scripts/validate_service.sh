#!/bin/bash
echo "Validating application..."
curl -f http://localhost:3000/health || exit 1
