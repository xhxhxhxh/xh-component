#!/bin/sh

set -e

pnpm install

pnpm run build

cd packages/xh-component

npm publish

