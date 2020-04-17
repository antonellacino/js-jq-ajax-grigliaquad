// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {

    $('.square').click(
        function() {
            var self = $(this);
            var number;

            $.ajax({
                method: "GET",
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                success: function(data, stato) {
                    console.log(data);
                    var number = data.response;
                    if (number <= 5) {
                        self.addClass('yellow');
                    } else {
                        self.addClass('green');
                    }
                    self.text(number);
                },
                error: function(richiesta, stato, errori) {
                    alert("E' avvenuto un errrore." + errore);
                }
            });

        });




});