// Load saved settings
document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', darkMode);
    document.getElementById('darkModeToggle').checked = darkMode;

    // Language
    const savedLanguage = localStorage.getItem('language') || 'en';
    document.getElementById('languageSelect').value = savedLanguage;

    // Font Size
    const savedFontSize = localStorage.getItem('fontSize') || 16;
    document.documentElement.style.fontSize = `${savedFontSize}px`;
    document.getElementById('fontSizeValue').textContent = savedFontSize;

    // Notifications
    const notifications = localStorage.getItem('notifications') !== 'false';
    document.getElementById('notificationToggle').checked = notifications;
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    localStorage.setItem('darkMode', this.checked);
});

// Language Selector
document.getElementById('languageSelect').addEventListener('change', function() {
    localStorage.setItem('language', this.value);
    alert('Language changed to ' + this.options[this.selectedIndex].text);
});

// Font Size Controls
function changeFontSize(change) {
    const currentSize = parseInt(getComputedStyle(document.documentElement).fontSize);
    const newSize = Math.min(20, Math.max(12, currentSize + change));
    document.documentElement.style.fontSize = `${newSize}px`;
    document.getElementById('fontSizeValue').textContent = newSize;
    localStorage.setItem('fontSize', newSize);
}

// Notifications Toggle
document.getElementById('notificationToggle').addEventListener('change', function() {
    localStorage.setItem('notifications', this.checked);
    if(this.checked) {
        alert('Notifications enabled');
    } else {
        alert('Notifications disabled');
    }
});