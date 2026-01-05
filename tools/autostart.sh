#!/bin/sh

DIR="$(dirname "$(readlink -f $0)")"
echo $DIR
. "$DIR/lib/common.sh"

$DIR/patchctl.sh start
