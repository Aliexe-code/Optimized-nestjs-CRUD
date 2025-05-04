#!/bin/bash
lsof -i tcp:3000 | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null || echo "Port 3000 is available"
