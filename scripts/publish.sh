#!/bin/sh

set -e

pnpm install

pnpm run build

cp README.md ./packages/xh-component/

cd packages/xh-component

npm publish

