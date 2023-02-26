#!/bin/sh

set -e

pnpm install

pnpm update:version

pnpm run build

cp README.md ./packages/xh-component/

cd packages/xh-component

npm publish

