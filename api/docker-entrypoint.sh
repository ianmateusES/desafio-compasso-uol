#!/bin/sh

if [ -e $(pwd)/'rundb' ]; then
  echo 'Tabelas já criadas'
else
  yarn typeorm migration:run
  echo '' >> rundb
fi

exec "$@"
