function spa(req){
let xhr=XMLHttpRequest()
xhr.open("GET",req,true)
xhr.onload=function(){
    document.write(this.responseText)
}
xhr.send()
}