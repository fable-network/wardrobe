#!/bin/sh

node ./scripts/generateComponent.js "$@"
yarn generate-tests
