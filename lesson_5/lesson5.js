// С помощью паттерна синглтон и декоратора, реализовать класс(классы) для отправки запросов с клиента и возможностью:
// - логировать действия
// - обработки ошибок
// - изменять тип запроса (POST, GET, ...) 

// Например, использовать открытый бесплатный api https://reqres.in или любой его аналог.

'use strict';

(function() {

    // GET - запрос
    const url = 'https://reqres.in/api/users/2';

    async function getData(url) {
        const response = await fetch(url);
        const json = await response.json();
        console.log(JSON.stringify(json)); // Данные в виде строки
        console.log(json); 				   // Данные в виде объекта

    }

    getData(url);

    // GET - запрос с обработкой ошибок
    try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError('Ошибка: JSON не получен');
        }
        const json = await response.json();
        console.log(JSON.stringify(json)); // Данные в виде строки
        console.log(json); 				   // Данные в виде объекта
    } catch (error) {
        console.log(error);
    }

    // POST - запрос
    const url = 'https://reqres.in/api/users/2';
    const data = {
        'name': 'morpheus',
        'job': 'leader'
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }

}());