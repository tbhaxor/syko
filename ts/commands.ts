/**
 * @name commands.ts
 * @author Gurkirat Singh <tbhaxor@gmail.com>
 * @returns NOTING
 * 
 * @description
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

