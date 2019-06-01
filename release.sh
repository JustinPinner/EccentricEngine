#!/bin/bash

echo 'clearing /dist'
rm -rf dist

echo 'building for release...'
npm run build-prod
echo 'done!'

