# webOS 4.x+ TVs are aarch64
env CGO_ENABLED=0 GOOS=linux GOARCH=arm64 \
  go build -trimpath -ldflags="-s -w" -o mitm ./...

# legacy 32-bit targets
env CGO_ENABLED=0 GOOS=linux GOARCH=arm GOARM=5 \
  go build -trimpath -ldflags="-s -w" -o mitm ./...