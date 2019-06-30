#!/bin/bash

USAGE="compile-dev.sh -v version"
TAG=""
PWD=$(pwd)

# validate expected parameters
while getopts ":v:" opt; do
  case $opt in
    v) VERSION="$OPTARG"
    ;;
    \?) echo $USAGE
    ;;
  esac
done

echo "clearing /dist"
rm -rf dist

echo "setting version to $VERSION-DEV"
sed 's/##VERSION/'"$VERSION-DEV"'/g' $PWD/package.json.template > $PWD/package.json

echo "building for dev testing..."
npm run build-dev
mv $PWD/package.json $PWD/dist/package.json
echo ""
echo "done!"
echo "Now you can run"
echo "npm add file:$PWD/dist/EccentricEngine"
echo "in your game project directory. Later, when you're done, you can remove the dev build by running"
echo "npm remove EccentricEngine@$VERSION-DEV"
