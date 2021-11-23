document.getElementById('btnajax').addEventListener('click',
makerequest)


function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.txt', true);
    xhr.timeout = 2000;
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr);
            console.log(xhr.responseText);
        } else {
            console.log("Problem occured");
        }
    };
    xhr.onprogress = (e)=>{
        console.log(e.loaded);
        console.log(e.total);
    },

    xhr.onerror = (e)=>{
        console.log("Network Not Available");
    }

    xhr.onloadstart = (e)=>{
        console.log("Transaction has started");
    }

    xhr.onloadend = (e)=>{
        console.log("Transaction has terminated");
    }

    xhr.onabort = (e)=>{
        console.log("Abort");
    }

    xhr.ontimeout = (e)=>{
        console.log("Time out");
    }

    xhr.send()
}