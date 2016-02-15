/**
 * Created by Stoian Ioan-Catalin on 2/11/2016.
 */
$('.mobile .button.dropdown').dropdown();
$('.orderby i').popup();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var colors = ['red', 'blue', 'yellow', 'turcoaz'];

$(document).ready(function() {
    colors = shuffle(colors);
    var index = 0;
    $('.event').each(function() {
        $(this).addClass(colors[index++]);
        if (index == colors.length) index = 0;
    });
});
$(document).ready(function() {
    var tip = $('input[name=tip]:checked').val();
    if (tip=="persoana") {
        $('.grupOnly').hide();
        $('.persoanaOnly').show();

        $('.formularDeInscriere').form({
            fields: {
                tip: "empty",
                nume: "emtpy",
                prenume: "empty",
                oras: "empty",
                scoala: "empty",
                clasa: "empty",
                email: "email",
                newsletter: "integer",
                telefon: ["minLength[10]", "maxLength[12]"]
            }
        });
    }
    else if (tip == "grup") {
        $('.persoanaOnly').hide();
        $('.grupOnly').show();

        $('.formularDeInscriere').form({
            fields: {
                nrPersGrup: ["empty", "integer"],
                clasaElevi: "empty",
                scoalaGrup: "empty",
                orasGrup: "empty",
                numePrenumeGrup: "empty",
                emailGrup: ["empty", "email"],
                telefonGrup: ["minLength[10]", "maxLength[12]"],
                newsletter: "integer"
            }
        });
    }
});
$(document).on("change", "input[name=tip]", function() {
    var tip = $('input[name=tip]:checked').val();
    if (tip=="persoana") {
        $('.grupOnly').hide();
        $('.persoanaOnly').show();

        $('.formularDeInscriere').form({
            fields: {
                tip: "empty",
                nume: "emtpy",
                prenume: "empty",
                oras: "empty",
                scoala: "empty",
                clasa: "empty",
                email: "email",
                newsletter: "integer",
                telefon: ["minLength[10]", "maxLength[12]"]
            }
        });
    }
    else if (tip == "grup") {
        $('.persoanaOnly').hide();
        $('.grupOnly').show();

        $('.formularDeInscriere').form({
            fields: {
                nrPersGrup: ["empty", "integer"],
                clasaElevi: "empty",
                scoalaGrup: "empty",
                orasGrup: "empty",
                numePrenumeGrup: "empty",
                emailGrup: ["empty", "email"],
                telefonGrup: ["minLength[10]", "maxLength[12]"],
                newsletter: "integer"
            }
        });
    }
});
