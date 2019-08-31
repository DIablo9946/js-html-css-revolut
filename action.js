// EX DI OGGI
// NOME REPO= js-html-css-revolut
// DESCRIZIONE=
// Ricreare almeno l’header completo con i dropdown che al click
// si mostrano e spariscono ricliccando.
// La traccia da riprodurre è questa: https://www.revolut.com/en-IT/
// Poi tutto quello che riuscite a ricreare della pagina è tutto di
//  guadagnato per ripasso e ex ulteriore vostro. Quindi più fate più vi conviene.
// NOTE=
// quindi una cartella del repo con il progetto, sul quale andate
// avanti più che potete, ma che almeno ha la richiesta base.
// revolut.comrevolut.com

$(document).ready(function(){

$(".acc").click(function(){
  $(".dropdownMenu.acc").toggleClass("active");
});

$(".product").click(function(){
  $(".dropdownMenu.product").toggleClass("active");
});

$(".company").click(function(){
  $(".dropdownMenu.company").toggleClass("active");
});

$(".comp").click(function(){
  $(".dropdownMenu.comp").toggleClass("active");
});

$(".help").click(function(){
  $(".dropdownMenu.help").toggleClass("active");
});

$(".lang").hover(function(){
  $(".dropdownMenu.lang").toggleClass("active");
});


});
