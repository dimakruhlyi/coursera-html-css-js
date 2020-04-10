let names = ["Dima", "John", "Jen", "Jason", "Paul", "Frank", "Jim", "Larry", "Paula", "Laura"];
names[50] = "Nikita"; 
names[100] = 'Joffre';

function sayHello(name){
    console.log("Hello, "+ name + "!");
}
function sayGoodbye(name){
    console.log("Goodbye, " + name + "!");
}

names.forEach(function(item){
    let firstLetter = item.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          sayGoodbye(item);
        } else {
          sayHello(item);
        }
});