#!/bin/bash

current_dir=$(pwd)
cd mobile-app
npx expo start
cd "$current_dir"