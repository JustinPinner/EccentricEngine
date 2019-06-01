#!/bin/bash

# ensure you have run 
#  npm install --save-dev webpack 
#  npm install --save-dev webpack-cli
#  npm install --save-dev webpack-merge
#  npm install --save-dev clean-webpack-plugin
#  npm install --save-dev uuid
# before compiling

echo 'clearing /dist directory'
rm -rf dist

echo 'runnning webpack for local dev build...'
npm run build-dev
echo 'done!'

