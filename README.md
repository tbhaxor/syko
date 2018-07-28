
# Syko [![TS](https://img.shields.io/badge/TypeScript-2.9.x-blue.svg)](https://www.typescriptlang.org/) ![Status](https://img.shields.io/badge/Status-Under%20Development-red.svg)

Syko is an easy and customisable interpreter with flexible commands.

<div style="text-align:center">

![image](https://user-images.githubusercontent.com/28386721/43351740-47e600ee-9234-11e8-98bc-e12898f6e631.png)


</div>

# Requirements
+ [NodeJS](https://node.org)
+ Terminal
+ GNU Linux / OSX

# Commands

```
→ ?
-=[ Global Commands ]=-
	?		Shows this help message
	clear		Clears the console output
	exit		Exits out from terminal
	lic		Prints license
	info		Prints information about the program
-=[ REPL Commands ]=-
	set		Sets the variable in variable DB
	delete		Unsets the variable from variable DB
	copy		Copies the content of one variable to others
	exec		Executes the external system command.
			Also saves to a variable is used save-to argument
	show		Shows the content of variable in pretty format
	desc		Describes a variable

Note : To view more about commands pass '?' as their first argument i.e exec ? or just type the command and hit enter

```

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

