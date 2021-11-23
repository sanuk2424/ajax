document.getElementById('btnajax').addEventListener('click',
makerequest)


function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.txt', true);
   
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            document.getElementById('data').innerText = xhr.responseText
            
        } else {
            console.log("Problem occured");
        }
    };
    

    xhr.send()
}