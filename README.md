# figl.space

## Prereqs
[NodeJS v12+](https://nodejs.org/en/)

## Install
```
npm install
```

## Run Locally
```
node index.js
```
Site will run at http://localhost:8080

## CICD
Changes made to the client folder will automatically trigger an action that will sync the folder to  an s3 bucket that hosts the site.

## Renovate
Renovate is installed and will automatically open merge requests to keep depdencies up to date.
