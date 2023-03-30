#!/bin/bash

set -e
#unset TMUX
#tmux attach
tmate -S /tmp/tmate.sock display -p '#{tmate_ssh}'
MSG=$(tmate -S /tmp/tmate.sock display -p '#{tmate_ssh}')
timeout=$((15*60))
while [ -S /tmp/tmate.sock ]; do
  sleep 1
  timeout=$(($timeout-1))
    if (( $timeout%30 == 0 )); then
      echo $MSG
    fi
  if [ ! -f /tmp/keepalive ]; then
    if (( timeout < 0 )); then
      echo Waiting on tmate connection timed out!
      exit 1
    fi
  fi
done
