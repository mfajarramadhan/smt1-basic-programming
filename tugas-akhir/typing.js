var t = 0, text;
text = "Muhammad Fajar Ramadhan";

function typing(){
if(t < text.length){
    document.getElementById("text").innerHTML += text.charAt(t);
    t++;
    setTimeout(typing, 100);
}
}
typing();