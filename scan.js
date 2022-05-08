var scnbtn = document.getElementById("scn-btn");
var file = document.getElementById("file");
var id = document.getElementById("id").value;
var name = document.getElementById("name").value;
const BASE_URL = 'http://localhost:3000/';

const sendData = async (id, name, file) => {
    const formData = new FormData();
    // console.log(file.files[0]);
    formData.append("image", file.files[0]);

    const res = await axios.post(BASE_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data;

};

scnbtn.addEventListener("click", async () => {
    console.log("clicked");


    const res = await sendData(id, name, file);
    console.log(res);
    let positve = "Alert. There are high chances of Covid";
    let negative = "Congratulations. there is a high probability of x-ray to be normal.";
    var content;
    if (res.result == "NORMAL") {
        content = `name: ${document.getElementById("name").value} \n id: ${document.getElementById("id").value} \n Result: ${negative}`
    }
    else {
        content = `name: ${document.getElementById("name").value} \n id: ${document.getElementById("id").value} \n Result:${positve}`
    }
    window.open("data:application/txt," + encodeURIComponent(content), "_self");
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("file").value = "";

})