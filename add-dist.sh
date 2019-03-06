#!/bin/sh
set -e

echo "> npm run dist"
yarn run dist

echo "> git add dist"
git add dist
