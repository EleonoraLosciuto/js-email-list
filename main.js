const tableEmail = document.querySelector('div.email-list');
const emailBtn = document.getElementById('emailGenerateBtn')

const generateAPIEmail = () => {

    const arrResult = [];

    tableEmail.innerHTML = 'Caricamento in corso...'

    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                // Aggiungo l'email all'array
                arrResult.push(response.data.response);

                // CONTROLLO: Se l'array ha 10 elementi, tutte le chiamate sono finite
                if (arrResult.length === 10) {
                    renderEmail(arrResult)
                }
            })
            .catch(error => {
                console.error("Errore durante la chiamata:", error);
            })
    }
};

//chiamata alla funzione al caricamento della pagina
generateAPIEmail();

// Aggiungo lista a pagina HTML
const renderEmail = (arr) => {
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        html += `<p>  
        ${i + 1}: ${arr[i]}
        </p>`
    }
    tableEmail.innerHTML = html;
};

emailBtn.addEventListener('click', generateAPIEmail);