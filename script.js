const getData = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'db.json', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = () => reject(Error('Network Error'));
        xhr.send();
    });
}

const sendData = (url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(Error('Network Error'));
        xhr.send(JSON.stringify(data));
    });
}

let user;

getData()
    .then(data => {
        user = data;
        console.log(user);
        return sendData('https://jsonplaceholder.typicode.com/posts', user);
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });