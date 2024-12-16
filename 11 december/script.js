function usdtogel(){
    var usd = document.getElementById("usdollar").value;
    var currentLari = 2.82;
    var result =  usd*currentLari;
    document.getElementById("result").innerHTML = result.toFixed(2)
}
