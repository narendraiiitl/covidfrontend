var scnbtn = document.getElementById("scn-btn");
var file = document.getElementById("file");
var id = document.getElementById("id").value;
var name = document.getElementById("name").value;
const BASE_URL = 'https://warm-ocean-03768.herokuapp.com/';

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

    const res = await sendData(id, name, file);
    console.log(res);
    let positve = "Alert. There are high chances of Covid.";
    let negative = "Congratulations. there is a high probability of x-ray to be normal.";
    var content;

    if (res.result == "NORMAL") {
        content = '\r Patient ID: ' + document.getElementById("id").value + ' \r\n ' +
            'Name: ' + document.getElementById("name").value + ' \r\n ' +

            'Result: ' + negative;
    }
    else {
        content = '\r Patient ID: ' + document.getElementById("id").value + ' \r\n ' +
            'Name: ' + document.getElementById("name").value + ' \r\n ' +
            'Result: ' + positve;

    }


    const textToBLOB = new Blob([content], { type: 'text/plain' });
    const sFileName = 'report.txt';
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();


    // window.open("data:application/txt," + encodeURIComponent(content), "_self");

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("file").value = "";

})