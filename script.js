// =========================================================
// JS CODE PARA SA HAMBURGER MENU (MOBILE NAVIGATION)
// =========================================================

// Kunan ang element na may class na 'dropdown'
// Ito ang buong menu na lalabas/tataas
const dropdown = document.querySelector('.dropdown');

// Function na tatawagin kapag pinindot ang hamburger icon
// Ang function name na 'hamburg()' ay tinatawag sa HTML: onclick="hamburg()"
function hamburg() {
    // Nagdadagdag ng 'active' class sa dropdown element
    // Ang 'active' class ang magpapabago ng transform sa CSS
    dropdown.classList.add('active');
}

// Function na tatawagin kapag pinindot ang 'X' icon
// Ang function name na 'cancel()' ay tinatawag sa HTML: onclick="cancel()"
function cancel() {
    // Aalisin ang 'active' class para bumalik sa original (tago) na state
    dropdown.classList.remove('active');
}

// =========================================================
// Tandaan: Ang code na ito ay kailangang kumpletohin ng CSS!
// =========================================================