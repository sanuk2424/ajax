document.getElementById('btnajax').addEventListener('click',
    makerequest)


let userid = document.getElementById('userid')
let title = document.getElementById('title')
let body = document.getElementById('body')
function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.responseType = 'json'



    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.response.id);
            console.log(xhr.response.title);
            console.log(xhr.response.body);

            userid.innerText = xhr.response.id
            title.innerText = xhr.response.title
            body.innerText = xhr.response.body
        } else {
            console.log("Problem occured");
        }
    };


    xhr.send()
}