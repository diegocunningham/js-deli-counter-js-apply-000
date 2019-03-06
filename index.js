function takeANumber(line, name){

  line.push(name);

  return 'Welcome, ' + name + '. You are number ' + (line.length) + ' in line.';
}

var new_line = ["Ada", "Grace", "Kent"];
takeANumber(new_line, 'Steven');

function nowServing(line){
  if (line.length ===0){
    return "There is nobody waiting to be served!";
  }
  else{
    var first_in_line = line[0];
    line.shift();
    return "Currently serving " + first_in_line + '.';
  }

  }
  function currentLine(line){
  if (line.length == 0){
     return 'The line is currently empty.';
   }
   else{
     var people_in_line = 'The line is currently: ';

     for (var i = 0; i < line.length; i++){
       if (i === line.length -1){
         var people_in_line = people_in_line.concat((i + 1) + '. ' + line[i])
       }
       else{
         var people_in_line = people_in_line.concat((i + 1) + '. ' + line[i] + ', ')
       }
     }
     return people_in_line;
   }

   }
