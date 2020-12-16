var listaCognomi = document.getElementById('lista-cognomi');
var user = prompt('Inserisci il tuo cognome!');
listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
listaCognomi.push(user);
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomi.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
