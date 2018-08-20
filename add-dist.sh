#!/bin/sh
set -e

echo "> npm run dist"
npm run dist

echo "> git add dist"
git add dist
