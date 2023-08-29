const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overduejery = () => {
        
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      let Overduejery = [];
      Overduejery = all.filter((TodoList) => TodoList.dueDate < new Date().toLocaleDateString("en-CA"));
      return Overduejery;
    }
  
    const dueTodayjery = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      let DueTodayjery = [];
      DueTodayjery=all.filter((TodoList) => TodoList.dueDate === new Date().toLocaleDateString("en-CA"));
      return DueTodayjery;
    }
  
    const dueLaterjery = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let DueLaterjery = [];
      DueLaterjery = all.filter((TodoList) => TodoList.dueDate > new Date().toLocaleDateString("en-CA"));
      return DueLaterjery;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list.map(
        (TodoList) =>
          `[${TodoList.completed ? "x" : " "}] ${TodoList.title} ${
            TodoList.dueDate !== formattedDate(new Date()) ? TodoList.dueDate : ""
          }`).join("\n").trim();
    }
  
    return {
      all,
      add,
      markAsComplete,
      overduejery,
      dueTodayjery,
      dueLaterjery,
      toDisplayableList
    };
  };
const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overduejery()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueTodayjery()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLaterjery()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
  
  module.exports = todoList;
