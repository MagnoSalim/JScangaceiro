var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    //Cancelando a submissão
    event.preventDefault();
    
    var tr = document.createElement('tr');
    
    campos.forEach(function(campo){
        //Cria uma td sem informação
        var td = document.createElement('td');
        //atribui o valor do campo à td
        td.textContent = campo.value;
        //Adiciona a td a tr
        tr.appendChild(td);
    });

    //Nova td que armazenará o volume da negociacao
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    //Limpando os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].focus();


});