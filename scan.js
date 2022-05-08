var scnbtn = document.getElementById("scn-btn");

const BASE_URL = 'http://e1ca-35-225-225-193.ngrok.io/test';

const sendData = async (id, name, file) => {
    const formdata = { image: file, name: name, id: id };
    const data = { username: 'example' };
    const res = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

};

scnbtn.addEventListener("click", () => {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var file = document.getElementById("file").value;
    const res = sendData(id, name, file);
    console.log(res);
})