document.querySelectorAll('.fibonacci-button').forEach(button => {
    button.addEventListener('click', function() {
        const number = this.dataset.number;
        const color = this.style.backgroundColor;

        document.getElementById('selected-number').innerText = number;
        document.getElementById('display-screen').style.backgroundColor = color;
        document.getElementById('selection-screen').style.display = 'none';
        document.getElementById('display-screen').style.display = 'flex';
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('display-screen').style.display = 'none'
    document.getElementById('selection-screen').style.display = 'flex';
});

// Return to the selection screen when the 'Back' button is clicked
document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('display-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'flex';
});
