#!/usr/bin/env bash
set -ex

brew uninstall --force node
brew cleanup --force -s node
brew prune
brew install node

# brew uninstall node
# NODE_VERSION="8.11.3"
# curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
# sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"