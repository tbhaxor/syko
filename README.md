# Syko

Syko is an easy and customisable interpreter with flexible commands.

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

