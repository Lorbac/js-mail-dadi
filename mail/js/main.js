// Chiedi all’utente la sua email

var email = prompt("Inserisci la tua email");

// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull’esito del controllo

var listEmail = ["ciccio@gmail.com", "ciao@gmail.com", "gigio@gmail.com", "lorenzo@gmail.com", "baccini.lorenzo@gmail.com" ];

for ( i = 0 ; i < listEmail.length ; i++) 
{
    if (email == listEmail[i]) 
    {
        console.log("puoi accedere")
    }
    else
    {
        console.log("email scorretta")
    }
}


