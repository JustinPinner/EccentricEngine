#!/bin/bash

USAGE="release.sh -v version [-t tag]"
TAG=""
PWD=$(pwd)

# validate expected parameters
while getopts ":v:t:" opt; do
  case $opt in
    v) VERSION="$OPTARG"
    ;;
    t) TAG="--tag $OPTARG"
    ;;
    \?) echo $USAGE
    ;;
  esac
done

echo "clearing /dist"
rm -rf dist

echo "setting version to $VERSION"
sed 's/##VERSION/'"$VERSION"'/g' $PWD/package.json.template > $PWD/package.json

echo "building for release..."
npm run build-prod
echo "done!"
echo ""
echo "setting up for publish..."
mv $PWD/package.json $PWD/dist/package.json
echo ""

echo "switching to /dist"
cd $PWD/dist

echo "publishing..."
npm publish $TAG

cd $PWD

# echo "done!"
