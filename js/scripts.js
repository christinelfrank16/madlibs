$(document).ready(function(){
  $("#formOne").submit(function(event){
    $(".person1").append($("input#person1").val());
    $(".person2").append($("input#person2").val());
    $(".animal").append($("input#animal").val());
    $(".exclamation").append($("input#exclamation").val());
    $(".noun").append($("input#noun").val());
    $(".verb").append($("input#verb").val());

    $("#story").show();
    event.preventDefault();
  });
});
