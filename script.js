const getData = () => {
    return fetch('db.json')
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
}

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .catch(error => console.log(error));
}

let user;

getData()
    .then(data => {
        user = data;
        console.log(user);
        return sendData('https://jsonplaceholder.typicode.com/posts', user);
    })
    .then(response => response.json())
    .then(data => console.log(data));