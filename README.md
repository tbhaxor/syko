
# Syko [![TS](https://img.shields.io/badge/TypeScript-2.9.x-blue.svg)](https://www.typescriptlang.org/) ![Status](https://img.shields.io/badge/Status-Under%20Development-red.svg) ![Version](https://img.shields.io/badge/Version-1.4.1-yellow.svg)

Syko is an easy and customisable interpreter with flexible commands

<div style="text-align:center">

<img src="https://user-images.githubusercontent.com/28386721/45036650-aaa15a80-b07a-11e8-9d9e-96abf3d0361f.png">


</div>

# Requirements
+ [NodeJS](https://node.org)
+ Terminal

# Changing Commands
_all commands are registered in `ts/commands.ts`_
```ts
/**
 * NOTE TO CHANGE THE VARIABLE YOU MUST CHANGE THE "VALUE" OF THE APPROPRIATE KEY
 * 
 * For example
 *      suppose you want to change the "exit" command to "q",
 *      then change "exit" (right hand side) to "q"(the value)
 * 
 *  it may look like
 *     .......
 *     "help": "?",  // help command
 *     "exit": "q", // exit interpreter command
 *     .......
 */

export default {
    "globals": { // global commands
        "help": "?", // help command
        "exit": "exit",  // exit interpreter command
        "clear": "clear", // clear console command
        "info": "info",  // information command
        "lic": "lic"  // license command
    },
    "repl": { // repl commands
        "set": "set", // set new variable command
        "describe": "desc", // description for variable command
        "delete": "delete",  // delete variable command
        "show": "show",  // show i.e print varible content
        "copy": "copy",  // copy content of one variable to many
        "execute_external": "exec"  // execute external commands
    }
}


```

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

    $ npm run build

