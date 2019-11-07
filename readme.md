# Static site hosting - NodeJS

## Description
A minimal NodeJS powered express app to act as a base for some static site hosting.

## Build
### NodeJS
```
npm install
```
### Docker
```
docker build . -t express-site
```
## Run
### NodeJS
```
node index.js
```
### Docker
```
docker run -p 8090:8090  express-site
```
## Serving your own files
You have two options for serving your own pages within this container.
## Baked
You can bake your files into the container image ahead of time before you run the build command.  To do this just copy your site into the *www* folder.
## Mounted
You can mount a folder as a volume when the container is run.  Simply mount over the path *www* to achieve this.