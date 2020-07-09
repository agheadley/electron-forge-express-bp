# electron-forge app 
https://www.electronforge.io/

```
npx create-electron-app my-app
```


## electron/express

```
npm install --save express body-parser path

require('./app.js') // index.js
```

app.js
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! xxx'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```


## parcel/vue

```
npm install --save parcel-bundler vue vue-router
```


package.json - build and run commands in "scripts":
```
    "dev": "parcel src/main.html",
    "build": "parcel build src/main.html"
```
Dev:
- npm run dev
- index.js  
    ```
    //mainWindow.loadFile(path.join(__dirname, 'dist.html'));
    mainWindow.loadURL(`http://localhost:1234/`)
    ```

Build:
- npm run build
- copy dist/main.html into src/ and change links in main.html to ./../dist/
- index.js  
    ```
    mainWindow.loadFile(path.join(__dirname, 'dist.html'));
    //mainWindow.loadURL(`http://localhost:1234/`)
    ```

## create executables

npm run package (creates out/ and contains executable)

(npm run make - to explore!)

## file structure

|-- package.json
|-- src
    |-- index.html (testing electron)
    |-- index.js (main electron start)
    |-- app.js (express/node app.js)
    |-- main.html (parcel main.html)
    |-- main.js (vue main)
    |-- router.js
    |-- App.vue
    |-- views
        |-- Home.vue
        |-- etc
    |-- components
        |-- Form1.vue
        |-- etc
|-- dist
|-- node_modules


 
