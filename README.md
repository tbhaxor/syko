
# Syko [![TS](https://img.shields.io/badge/TypeScript-2.9.x-blue.svg)](https://www.typescriptlang.org/) ![Status](https://img.shields.io/badge/Status-Under%20Development-red.svg)

Syko is an easy and customisable interpreter with flexible commands.

<div>

![image](https://user-images.githubusercontent.com/28386721/43343194-f7d14158-9202-11e8-897c-9b3388b06bb5.png) ![image](https://user-images.githubusercontent.com/28386721/43343253-38379346-9203-11e8-8d29-291cf9897f84.png)

</div>

# Requirements
+ [NodeJS](https://node.org)
+ Terminal
+ GNU Linux / OSX

# How to run
### For Developers
1. Install dependencies
    ```
    $ npm install
    ```
2. Running the interpreter
    ```
    $ npm start
    ```

### For Users
1. Install dependencies
    ```
    $ npm run setup
    ```
2. Running the interpreter
    ```
    $ npm start
    ```

**Note :** Make sure you have node and npm and grunt in your enviroment `PATH` variable if you are a windows users and change the following
```bat
--FROM--
rm -rf js/ && grunt > /dev/null
--TO--
rmdir  js /Q /S && grunt > null
```

# How to build
_only for developers_
    ```
    $ npm run build
    ```

