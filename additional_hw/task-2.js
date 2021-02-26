// {
//   /* <p>Створити класи Library та Book</p> */
// }
// {
//   /* <ol>
//   <li>
//     Клас Library буде описувати нашу бібліотеку книжок. Всі книжки
//     будуть зберігатися в масиві.
//     <p>Також цей клас буде мати такі методи:</p>
//     <ul>
class Library {
  books = [];
  favorites = [];

  // }
  // Метод <strong>buy</strong> - це метод що приймає аргументом
  // обєкт книги і додає її в бібліотеку якщо її там ще немає.
  // Якщо книга вже є показує повідомлення що книга вже куплена

  buy(book) {
    if (!this.books.includes(book)) {
      this.books.push(book);
    } else {
      return console.log(`книга вже куплена`);
    }
  }

  // Метод <strong>sell</strong> - це метод що приймає аргументом
  // назву книги і видаляє її з бібліотеки

  sell(book) {
    this.books = this.books.filter((el) => {
      return el.title !== book;
    });
  }
  //         Метод <strong>addToFavourite</strong> - це метод що приймає
  //         аргументом назву книги і додає обєкт книги в список
  //         улюблених
  //       </li>
  //       <li>
  addToFavourite(book) {
    this.favorites.push(
      this.books.find((el) => {
        return el.title == book;
      })
    );
  }

  // Метод <strong>removeFromFavourite</strong> - це метод що
  //         приймає назву книги і видаляє її з списку улюблених
  removeFromFavourite(book) {
    this.favorites = this.favorites.filter((el) => {
      console.log(el);
      return el.title !== book;
    });monitoring.submit
  }

  //         Гетер <strong>сountFavouriteBooks</strong> - це гетер що
  //         показує кількість книжок що додані в улюблені

  get сountFavouriteBooks() {
    return this.favorites.length;
  }
  //         Гетер <strong>finishedBook</strong> - це гетер що містить
  //         колекцію всіх прочитаних книжок
  get finishedBooks() {
    return;
  }
}

const lib = new Library();

//         Метод <strong>totalCost</strong> - це метод що рахує
//         вартість всіх книжок в бібліотеці
//         <br />
//         <br />
//       </li>
//     </ul>
//   </li>
//   // <li>
//   //   Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт
//   //   з такими ключами
//   //   <ul>
class Book {
  constructor({ author, title, price, totalPages, currentPage = 0 }) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }

  //   Метод <strong>read</strong> - це метод що приймає кількість
  //   сторінок що було прочитано і міняє значення currentPage

  read(page) {
    this.currentPage += page;
  }

  //         Гетер <strong>bookProgres</strong> - гетер що переводить
  //         кількість прочитаних сторінок в відсотки
  get bookProgress() {
    return (this.currentPage / this.totalPages) * 100;
  }

  //         Сетер <strong>bookProgres</strong> - сетер що переводить
  //         відсоток прочитаних сторінок в кількість
  set bookProgress(percent) {
    this.currentPage = this.totalPages * (percent / 100);
  }
}

const kobzar = new Book({
  author: "shevchenko",
  title: "kobzar",
  price: 100,
  totalPages: 500,
});

const azbuka = new Book({
  author: "noname",
  title: "azbuka",
  price: 200,
  totalPages: 10,
});

const green = new Book({
  author: "green",
  title: "green",
  price: 400,
  totalPages: 450,
});

kobzar.read(25);
kobzar.read(5);
console.log(kobzar.currentPage);
console.log(kobzar.bookProgress);

kobzar.bookProgress = 50;
console.log(kobzar.currentPage);

lib.buy(kobzar);
lib.buy(azbuka);
lib.buy(green);
lib.buy(green);

lib.sell("kobzar");

lib.addToFavourite("green");
lib.addToFavourite("azbuka");
console.log(lib.сountFavouriteBooks);
console.log(lib);
lib.removeFromFavourite("green");
console.log(lib);

// console.log(
//   lib.books.filter((el) => {
//     return el.title !== "kobzar";
//   })
// );

//       Клас Book приймає один аргумент - обєкт з парметрами книги. В
//       середині класу використовувати деструктуризацію обєкта
//     </p>
//   </li>
// </ol>
// </li>
// </ol>
// </article>
