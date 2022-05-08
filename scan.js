var scnbtn = document.getElementById("scn-btn");

const BASE_URL = 'http://e1ca-35-225-225-193.ngrok.io/test';

const sendData = async (id, name, file) => {
    try {
        const formdata = { image: file, name: name, id: id };
        const data = { username: 'example' };
        const res = await fetch(BASE_URL, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        console.log(error);
    }


};

scnbtn.addEventListener("click", () => {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var file = document.getElementById("file").value;
    const res = await sendData(id, name, file);
    console.log(res);
})