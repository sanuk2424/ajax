document.getElementById('btnajax').addEventListener('click',
    makerequest)


// function makerequest() {
//     console.log("Button clicked");
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', 'data.json', true);
//     xhr.responseType = 'json'


//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             console.log(xhr.response.name);
//             console.log(xhr.response.roll);
//             document.getElementById('name').innerText = xhr.response.name
//             document.getElementById('roll').innerText = xhr.response.roll



//         } else {
//             console.log("Problem occured");
//         }
//     };


//     xhr.send()
// }


function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json', true);



    xhr.onload = () => {
        if (xhr.status === 200) {
            // console.log(xhr.response);
            let obj = JSON.parse(xhr.response);
            console.log(obj);
            document.getElementById('name').innerText = obj.name
            document.getElementById('roll').innerText = obj.roll


        } else {
            console.log("Problem occured");
        }
    };


    xhr.send()
}