#!/bin/bash

set -e
#unset TMUX
#tmux attach
#tmate -S /tmp/tmate.sock display -p '#{tmate_ssh}'
MSG=$(cat mail.txt)
timeout=$((180*60))
while (( timeout > 0 )); do
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
echo Waiting on tmate connection timed out!
exit 1
