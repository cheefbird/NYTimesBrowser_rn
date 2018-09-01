#!/usr/bin/env bash
set -ex

brew uninstall node@6

brew install node

brew link node
# brew uninstall node
# NODE_VERSION="8.11.3"
# curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
# sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"