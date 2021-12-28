function insertNum(number){
    var existingNumbers = $("#result").val();

    $("#result").val(existingNumbers+ number)
}

function clearResult(){
    $("#result").val('')
}
function count(){
   var result = eval($("#result").val()) 
   $("#result").val(result)
}

function deletenum() {
   var num1 = $("#result").val();
   if (num1 != ''){
    $("#result").val($("#result").val().slice(0,-1));
   }
}