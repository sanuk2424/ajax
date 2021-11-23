document.getElementById('btnajax').addEventListener('click',
    makerequest);

// function makerequest() {
//     console.log("Button clicked");
//     const xhr = new XMLHttpRequest()
//     console.log("Before Opened",xhr.readyState);
//     xhr.open('GET', 'data.txt', true);
//     console.log("After Opened",xhr.readyState);
//     xhr.onreadystatechange = () => {
//         console.log("readystate",xhr.readyState);
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 console.log(xhr);
//                 console.log(xhr.responseText);

//             } else {
//                 console.log("Problem Occured");

//             }
//         }
//     }
//     xhr.send();

// }


function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    if (xhr.readyState ===0 ) {
        console.log("Open Method not yet called 0");
    }
   
    xhr.open('GET', 'data.txt', true);
    if (xhr.readyState ===1 ) {
        console.log("Open Method  called 1");
    }
   
    xhr.onreadystatechange = () => {
        if (xhr.readyState ===2 ) {
            console.log("Response Header 2");
        }

        if (xhr.readyState ===3 ) {
            console.log("Loading 3");
        }

        if (xhr.readyState ===4 ) {
            console.log("Done 4");
        }
       
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr);
                console.log(xhr.responseText);

            } else {
                console.log("Problem Occured");

            }
        }
    }
    xhr.send();

}