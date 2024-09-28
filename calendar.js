// Générer le calendrier et afficher les émoticônes en fonction de l'humeur
function generateCalendar() {
    const calendar = document.getElementById('moodCalendar');
    const monthDays = 30; // Nombre de jours du mois pour simplification
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let rows = '<tr>';
    for (let i = 1; i <= monthDays; i++) {
        const date = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
        const moodEntry = localStorage.getItem(date);
        let moodEmoji = '❓';  // Emoji par défaut si pas de données

        if (moodEntry) {
            const moodData = JSON.parse(moodEntry);
            switch (moodData.mood) {
                case 'heureux':
                    moodEmoji = '😊';
                    break;
                case 'neutre':
                    moodEmoji = '😐';
                    break;
                case 'triste':
                    moodEmoji = '😔';
                    break;
                case 'anxieux':
                    moodEmoji = '😟';
                    break;
            }
        }

        rows += `<td data-date="${date}" onclick="showMoodDetails('${date}')">${i}<br>${moodEmoji}</td>`;

        if (i % 7 === 0) {
            rows += '</tr><tr>';
        }
    }
    rows += '</tr>';
    calendar.innerHTML = rows;
}

// Afficher les détails de l'humeur lorsque l'utilisateur clique sur une journée
function showMoodDetails(date) {
    const moodEntry = localStorage.getItem(date);

    if (moodEntry) {
        const moodData = JSON.parse(moodEntry);
        document.getElementById('moodDetails').innerHTML = `
            <h3>Détails du ${date}</h3>
            <p><strong>Comment s'est déroulée la journée :</strong> ${moodData.dayReview}</p>
            <p><strong>Challenges :</strong> ${moodData.challenges}</p>
            <p><strong>Meilleurs moments :</strong> ${moodData.highlights}</p>
            <p><strong>Réflexion :</strong> ${moodData.reflection}</p>
        `;
    } else {
        document.getElementById('moodDetails').innerHTML = `Aucune donnée pour cette journée.`;
    }
}

// Initialiser le calendrier à la charge de la page
generateCalendar();
