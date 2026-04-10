# 📚 Owly Books App

## Descrizione
Owly Books è un'applicazione sviluppata in JavaScript che permette di cercare libri per categoria utilizzando le API di Open Library.
L’interfaccia è semplice e intuitiva: l’utente inserisce una categoria (es. fantasy) e ottiene una lista di libri con titolo e autori.  
Cliccando su un libro è possibile visualizzarne i dettagli tramite una seconda richiesta API.


## Demo online
Link: inserire il link 


## Screenshot
<img width="1440" height="758" alt="Screenshot 2026-04-10 alle 18 13 14" src="https://github.com/user-attachments/assets/f24ed9ee-04d4-4b68-8bed-2e5a11acfebd" />


## Funzionalità
- Ricerca libri per categoria
- Visualizzazione lista risultati (titolo + autori)
- Visualizzazione dettagli libro
- Gestione stati di caricamento
- Messaggi per nessun risultato
- Interfaccia semplice e responsive


## Tecnologie usate
- JavaScript (ES6+)
- Vite
- Vitest
- HTML5
- CSS3
- Open Library API


## Installazione e avvio
1. Clona la repository ed inseriscilo nel terminale: git clone https://github.com/elpidioalessandro/Owly-books-app.git
2. Entra nella cartella del progetto: cd Owly-books-app
3. Installa le dipendenze se assenti: npm install
4. Avvia il progetto: npm run dev
5. Apri il browser su: http://localhost:5173/

## Test
Per eseguire i test automatici: npm run test

## Note
- Alcuni libri potrebbero non avere descrizione (dipende dai dati API)
- I dati provengono da Open Library e possono essere incompleti
