#!/bin/sh
set -e

echo "> npm run dist"
npm run dist

echo "> git add dist"
git add dist

echo "> git commit --amend --no-edit --no-verify"
git commit --amend --no-edit --no-verify
