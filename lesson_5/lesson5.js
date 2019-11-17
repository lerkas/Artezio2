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

    // GET и POST - запрос(ы) с обработкой ошибок
    async function requestData(url, method, data) {
        try {
            let response;
            if (method == 'POST') {
                response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                response = await fetch(url);
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

    requestData(url, method, data);
    requestData(url);

}());