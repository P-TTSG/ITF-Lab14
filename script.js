function updateUsername() {
    const newUsername = document.getElementById('username-input').value;
    if (newUsername) {
        document.getElementById('username-link').textContent = newUsername;
    }
}

function updateImage() {
    const newImageUrl = document.getElementById('image-url-input').value;
    if (newImageUrl) {
        document.querySelector('.avatar').style.backgroundImage = `url('${newImageUrl}')`;
    }
}

function addEntry() {
    const name = document.getElementById('name-input').value;
    const phone = document.getElementById('phone-input').value;
    if (name && phone) {
        const table = document.getElementById('phone-book').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `<td>${table.rows.length}</td><td>${name}</td><td>${phone}</td>`;
    }
}

function exportToCSV() {
    let csvContent = "ลำดับ,ชื่อ,เบอร์โทร\n";
    const rows = document.querySelectorAll("#phone-book tbody tr");
    rows.forEach(row => {
        const cols = row.querySelectorAll("td");
        const data = Array.from(cols).map(col => col.innerText).join(",");
        csvContent += data + "\n";
    });
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "phonebook.csv";
    link.click();
}
