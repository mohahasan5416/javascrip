// Toggle Dark Mode
const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Toggle Light Mode';
    } else {
        toggleThemeButton.textContent = 'Toggle Dark Mode';
    }
});

// Add interactivity to card buttons
const cardButtons = document.querySelectorAll('.card-btn');

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You clicked a card button!');
    });
});