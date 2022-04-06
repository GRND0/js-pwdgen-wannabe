//DICHIARAZIONE DATI UTENTE
const NomeUtente = prompt ("Inserire Nome Utente") ;
const CognomeUtente = prompt ("Inserire Cognome Utente") ;
const ColorePreferito = prompt ("Inserire Colore Preferito") ;

//ELABORAZIONE
const PasswordGenerata = NomeUtente + CognomeUtente + ColorePreferito ;

//OUTPUT
document.getElementById ("password").innerHTML = PasswordGenerata; 
