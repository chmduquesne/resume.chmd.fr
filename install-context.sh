#!/bin/bash

mkdir context-lmtx
cd context-lmtx
wget http://lmtx.pragma-ade.nl/install-lmtx/context-linux-64.zip
unzip context-linux-64.zip
chmod +x install.sh
./install.sh
