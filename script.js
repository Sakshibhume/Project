document.getElementById("criminal-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get Input Values
    let station = document.getElementById("station").value;
    let crimeNo = document.getElementById("crimeNo").value;
    let section = document.getElementById("section").value;
    let accusedName = document.getElementById("accusedName").value;
    let address = document.getElementById("address").value;
    let releaseDate = document.getElementById("releaseDate").value;
    let otherDetails = document.getElementById("otherDetails").value;
    let photoInput = document.getElementById("photo");

    let photoURL = "";
    if (photoInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function(e) {
            photoURL = e.target.result;
            addCriminalRecord(station, crimeNo, section, accusedName, address, releaseDate, otherDetails, photoURL);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        addCriminalRecord(station, crimeNo, section, accusedName, address, releaseDate, otherDetails, "");
    }

    // Reset Form
    document.getElementById("criminal-form").reset();
});

function addCriminalRecord(station, crimeNo, section, accusedName, address, releaseDate, otherDetails, photoURL) {
    let table = document.getElementById("criminal-list");

    let row = table.insertRow();
    row.innerHTML = `
        <td>${station}</td>
        <td>${crimeNo}</td>
        <td>${section}</td>
        <td>${accusedName}</td>
        <td>${address}</td>
        <td>${releaseDate}</td>
        <td>${otherDetails}</td>
        <td><img src="${photoURL}" alt="No Image"></td>
        <td><button onclick="deleteRow(this)">हटवा</button></td>
    `;
}

function deleteRow(button) {
    button.parentElement.parentElement.remove();
}
