var output = document.getElementById('output');
var user = prompt('Inserisci il tuo cognome (con la prima lettera maiuscola)!');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
listaCognomi.push(user);
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  output.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

var index = listaCognomi.indexOf(user);
output.innerHTML += 'La tua posizione è: ' + (index + 1);
