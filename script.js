function compute()
{
    var principal = document.getElementById("principal").value;
    if(!principal || principal<0)
    {
        alert("Please Enter valid values");
        principal = null;
        window.location.reload();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var years = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "<br>If you deposit "+principal +"<br>"+
    "at an interest rate of "+rate+"<br>"+
    "You will receive an amount of "+interest+",<br>"+
    "in the year "+years+"<br>";
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval+"%";
}
        
