// alert('Hello word');
// console.log('hello console');

function loginCheck() {//функция для кнопки
    var login;//логин для входа на сайт
    var arrName = [];//объявляем пустой массив имен

    for (i = 0; i < 5; i++) {//заполнение циклом массива до 4 индекса
        arrName[i] = prompt('Введите имя для наполнения массива: ' + [i], '');
    }

    console.log(arrName);//выводим заполненный массив для наглядности

    login = prompt('Зайти на сайт под именем: ', '');//запрашиваем логин



    function find(arrName) {//функция поиска
      for (var i = 0; i < arrName.length; i++) { //счетчик длинны массива
        console.log(arrName[i], login);
         if ( arrName[i] == login ) return true; //в случае выполнения условия возвращает true в функцию find
      }

        return false;
    }

    if( find(arrName) == true ){//если функция поиска истина
      alert(login + ', вы успешно вошли!');
      console.log(login + ', вы успешно вошли!');
    }
    else{
      alert('Нет такого пользователя: ' + login);//если функция поиска ложь
      console.log('Нет такого пользователя: ' + login);
    }


    // for (var i = 0 ; i < arrName.length ; i++) {
    //   if (login == arrName[i]) {
    //     alert(login + ', вы успешно вошли!');
    //     console.log(login + ', вы успешно вошли!');
    //   } else {
    //   alert('Нет такого пользователя: ' + login);
    //   console.log('Нет такого пользователя: ' + login);
    //   }
    // }


    // for (var log in arrName ) {
    //     console.log("in for");
    //     if(login == log) {
    //         alert(login + ', вы успешно вошли!');
    //         console.log(login + ', вы успешно вошли!');
    //         noname = 1;
    //         break;
    //     }
    // }
    //
    // if(noname == 0) {
    //     alert('Нет такого пользователя: ' + login);
    //     console.log('Нет такого пользователя: ' + login);
    //
    // }
}
