let uname = prompt('Как тебя зовут?', "Имя");
let age = prompt('Сколько тебе лет?', 0);

greeting = `Привет ${uname}! Тебе ${age} лет!`;
alert(greeting); 

if ( age < 18) {alert (`Извините, ${uname} , в доступе отказано. Только +18! `);
document.write (`<h1>Доступ запрещен</h1>`);
};
if ( age >= 18) {alert (` ${uname} , добро пожаловать! `);
document.write (`<h1>Доступ разрешен!</h1>`);

};

 document.close();