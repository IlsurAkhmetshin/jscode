let uname = prompt('Как тебя зовут?', "Имя");
let age = prompt('Сколько тебе лет?', 0);

greeting = `Привет ${uname}! Тебе ${age} лет!`;

alert(greeting); 

document.open();
      document.write(`<h1> ${greeting} </h1>`);
      document.write( typeof greeting);
      document.close();