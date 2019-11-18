// С помощью паттерна синглтон и декоратора, реализовать класс(классы) для отправки запросов с клиента и возможностью:
// - логировать действия
// - обработки ошибок
// - изменять тип запроса (POST, GET, ...) 

// Например, использовать открытый бесплатный api https://reqres.in или любой его аналог.

'use strict';

(function() {

    const url = 'https://reqres.in/api/users/2';
    const data = {
        'name': 'morpheus',
        'job': 'leader'
    }
    const method = 'POST';

    // Синглтон класс
    class Request {
        constructor(url, method, data) {
            if (typeof Request.instance === 'object') {
                return Request.instance;
            }

            this.url = url;
            this.method = method;
            this.data = data;

            Request.instance = this;
            return this;
        }

        async requestData() {
            try {
                let response;
                if (this.method == 'POST') {
                    response = await fetch(this.url, {
                        method: 'POST',
                        body: JSON.stringify(this.data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                } else {
                    response = await fetch(this.url);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError('Ошибка: JSON не получен');
                }
                const json = await response.json();
                console.log('Успех:', JSON.stringify(json)); // Данные в виде строки
                console.log('Успех:', json); // Данные в виде объекта
            } catch (error) {
                console.log('Ошибка:', error);
            }
        }

    };

    // Декоратор
    function logDecorator(wrapped) {
        return function() {
            console.group('Start log');
            const logResult = wrapped.apply(this, arguments);
            console.log(`Вызов функции ${wrapped.name}`);
            console.log(`Получение ${logResult}`);
            console.groupEnd();
            console.log('Finish log');
            return logResult;
        }
    }

    const myReq1 = new Request(url); // GET
    const myReq2 = new Request(url, method, data); // POST

    myReq1.requestData = logDecorator(myReq1.requestData);
    myReq2.requestData = logDecorator(myReq2.requestData);

    myReq1.requestData();
    myReq2.requestData();

    console.log(myReq1 === myReq2); // true => что одначает ссылку на один и тот же объект
}());