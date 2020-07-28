function newTab(){
  var newtab = prompt('New Tab URL: ');
  window.open(newtab);
}

function replaceTab(){
  var replacetab = prompt('URL to replace tab: ');
  location = replacetab;
}

function changeTitle(){
  var changetitle = prompt('New Title: ');
  document.title = changetitle;
}

function replaceTabHistory(){
  var replacetabhistory = prompt('Replace Tab and History with which URL: ');
  window.location.replace(replacetabhistory);
}

function mir(){
  var url = prompt('URL: ');
  window.open('https://translate.google.com/translate?sl=auto&tl=es&u='+url);
}
