#!/usr/bin/env bash

VERSION=devlop
IMAGE=seria1coder/fabric-starter-rest-serial-coder-extended
docker build -t ${IMAGE}:${VERSION} .
docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest