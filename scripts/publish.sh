#!/bin/sh

set -e

cp README.md ./packages/xh-component/

cd packages/xh-component
npm publish

