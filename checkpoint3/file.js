let text = document.getElementById('my-text')
function makeTextBold(){
  text.style.fontWeight = 'bold'
}
function makeTextItalic(){
  text.style.fontStyle = "Italic"                   
}
function makeTextunderlined(){
  text.style.textDecoration="underline"
}
function changeFont(e){
 text.style.fontFamily= e.value
}
function changeSize(e){
 text.style.fontSize= e.value
}
