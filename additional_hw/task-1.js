// Створити простенький калькулятор за допомогою класу.
// </p>
// <p>Цей клас буде мати такі методи:</p>
// <ol>
class Calculator {
  result = null;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  //<li>Метод що запитує в користувача 2 числа</li>
  inputRequest(a, b) {
    //this.a = prompt("Введите первое число");
    //this.b = prompt("Введите второе число");
    this.a = a;
    this.b = b;
  }
  sum() {
    this.result = this.a + this.b;
    this.getResult();
  }
  minus() {
    this.result = this.a - this.b;
    this.getResult();
  }
  mult() {
    this.result = this.a * this.b;
    this.getResult();
  }
  division() {
    this.result = this.a / this.b;
    this.getResult();
  }

  getResult() {
    console.log(`Результат операції ${this.result}`);
  }

  getNewFunc(callback) {
    this.result = callback.call(this, this.a, this.b);
    this.getResult();
  }
}

const calc = new Calculator(0, 0);

calc.inputRequest(3, 3);
console.log("mult");
calc.mult();
console.log("sum");
calc.sum();
console.log("division");
calc.division();
console.log("minus");
calc.minus();

console.log("power");
// calc.getNewFunc(power(bind(calc).a, power.bind(calc).b));
calc.getNewFunc((a, b) => {
  return Math.pow(a, b);
});

//   //
//   <li>
//     Метод що додає ці числа
//   </li>
//   <li>Метод що віднімає ці числа</li>
//   <li>Метод що перемножує ці числа</li>
//   <li>Метод що ділить ці числа</li>
//   <li>
//     Метод що виводить результат арефметичної операції на екран в
//     форматі <code> `Результат операції ${value}`</code>
//     <br />
//     цей метод запускаєтьсяв кінці кожного з методів 2-5
//   </li>
//   <li>
//     Метод що додає в калькулятор новий функціонал (Приймає
//     аргументом колбек в якому описаний новий метод)
//   </li>
//   <li>
//     Передати в метод №7 колбек ф-ю що підносить числа в степінь
//   </li>
//   <li>Написати всі методи і перевірити чи вони працюють</li>
// </ol>
// </li>
// <li>
