#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
  const ans: { TODO: string; addmore: boolean } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "What do you want to add in your todo? ",
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to add more in your todo? ",
      default: false,
    },
  ]);

  const { addmore, TODO } = ans;
  console.log(ans)
  loop = addmore;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Kindly add valid input");
  }
}

if(todos.length > 0){
    console.log("Your TOdo List:")
    todos.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log("No todos found")
}