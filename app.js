// Zobrazení hlavní stránky
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('setMoviePage').style.display = 'none';

    // Zobrazíme film, pokud je uložený v sessionStorage
    const favoriteMovie = sessionStorage.getItem('favoriteMovie');
    if (favoriteMovie) {
        document.getElementById('favoriteMovieText').textContent = `Nejoblíbenější film: ${favoriteMovie}`;
    } else {
        document.getElementById('favoriteMovieText').textContent = 'Žádný film nebyl nastaven.';
    }
}

// Zobrazení stránky pro nastavení filmu
function showSetMoviePage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('setMoviePage').style.display = 'block';
}

// Uložení filmu do sessionStorage
function saveMovie() {
    const movieName = document.getElementById('movieInput').value;
    if (movieName) {
        sessionStorage.setItem('favoriteMovie', movieName);
        showMainPage(); // Po uložení přejdeme zpět na hlavní stránku
    } else {
        alert("Prosím, zadejte název filmu.");
    }
}

// Spustíme hlavní stránku při načtení stránky
window.onload = function() {
    showMainPage();
};
