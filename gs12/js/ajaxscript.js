document.getElementById('btnajax').addEventListener('click',
    makerequest)


let resultall = document.getElementById('resultall');
let table = document.getElementById('table')

function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.responseType = 'json'

    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);

        } else {
            console.log("Problem occured");
        }
    };

    mydata = '{"name":"Sohan","salary":"12","age":"25"}';
    xhr.send(mydata)
}