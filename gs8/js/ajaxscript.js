document.getElementById('btnajax').addEventListener('click',
    makerequest)


n1 = document.getElementById('name1')
r1 = document.getElementById('roll1')

n2 = document.getElementById('name2')
r2 = document.getElementById('roll2')
function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.xml', true);
    xhr.responseType = 'document'



    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.response.getElementsByTagName("student"));
            console.log(xhr.response.getElementsByTagName("student")[0]);
            console.log(xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName('name')[0]
                .childNodes[0]
                .nodeValue
            );
            n1.innerText = xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName('name')[0]
                .childNodes[0]
                .nodeValue

            r1.innerText = xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName('roll')[0]
                .childNodes[0]
                .nodeValue


            n2.innerText = xhr.response
                .getElementsByTagName("student")[1]
                .getElementsByTagName('name')[0]
                .childNodes[0]
                .nodeValue

            r2.innerText = xhr.response
                .getElementsByTagName("student")[1]
                .getElementsByTagName('roll')[0]
                .childNodes[0]
                .nodeValue
            console.log(xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName('roll')[0]
                .childNodes[0]
                .nodeValue
            );



        } else {
            console.log("Problem occured");
        }
    };


    xhr.send()
}