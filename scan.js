var scnbtn = document.getElementById("scn-btn");

const BASE_URL = 'http://c0e7-35-225-225-193.ngrok.io/test';

const sendData = async (id, name, file) => {
    try {
        const formdata = { image: file, name: name, id: id };
        const data = { username: 'example' };
        const res = await fetch(BASE_URL, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        return res;
    } catch (error) {
        console.log(error);
    }


};

scnbtn.addEventListener("click", async () => {
    console.log("clicked");
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var file = document.getElementById("file").value;
    const res = await sendData(id, name, file);
    console.log(res);
    var content = "Name: subhash"
    window.open("data:application/txt," + encodeURIComponent(content), "_self");
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("file").value = "";

})