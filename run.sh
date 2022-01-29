docker run --rm -it -p 5000:5000 -p 3000:3000 --entrypoint /bin/bash -v $(pwd):/app -v $(pwd)/root:/root -w /app node:10-slim
