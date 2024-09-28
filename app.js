// Sauvegarde des données du journal d'humeur
function saveMoodEntry() {
    const dayReview = document.getElementById('dayReview').value;
    const mood = document.getElementById('mood').value;
    const challenges = document.getElementById('challenges').value;
    const highlights = document.getElementById('highlights').value;
    const reflection = document.getElementById('reflection').value;

    const today = new Date().toISOString().split('T')[0];  // Formate la date au format AAAA-MM-JJ

    const moodEntry = {
        dayReview,
        mood,
        challenges,
        highlights,
        reflection,
    };

    // Enregistre les données dans le localStorage sous la clé de la date du jour
    localStorage.setItem(today, JSON.stringify(moodEntry));

    alert('Humeur enregistrée avec succès!');
}

// Ouvrir le calendrier dans un nouvel onglet
function openCalendar() {
    window.open('calendar.html', '_blank');
}
