# Slice Viewer for UBC Neuroanatomy Website

A small react app that takes a json of image info and places them into
a content-agnostic viewer with highlighting overlays

## Getting started

In order to take advangtage of JSX in development, use babel to interpret before
putting into production.

## Set-up
In root directory, run:

```
npm install
```

If babel-cli is not already installed, run:

```
sudo npm install -g babel-cli
```

package dist folder, run:

```
cp -r src/* dist/
babel  src --out-dir dist --presets react
```

there is a small server in the test_server directory to get around CORS, though not necessary when the files are being served already. To run server:

```
node test_server/server.js
```

## Authors
* **Dante Cerron** - *Software Engineer* - [dacerron](https://github.com/dacerron)
