var bill=document.querySelector('#bill');
var nom=document.querySelector('#nom');
var tippp=document.querySelector('#tippp');
var totalpp=document.querySelector('#totalpp');
var fiveper=document.querySelector('#fiveper');
var tenper=document.querySelector('#tenper');
var fifteenper=document.querySelector('#fifteenper');
var twentyfiveper=document.querySelector('#twentyfiveper');
var fifteenper=document.querySelector('#fifteenper');
var custombtn=document.querySelector('#custombtn');
var errdis=document.querySelector('#errdis');
function split(billval,members,tip)
{
    tippp.innerText=(billval*tip/100/members).toFixed(2);
    totalpp.innerText=((billval/members)+((billval*tip/100)/members)).toFixed(2);
}
fiveper.addEventListener('click',()=>
{
    if((nom.value)==0)
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),5);
        fiveper.style.backgroundColor='hsl('+172+','+ 67+'%,'+ 45+'%)';
    }
})
tenper.addEventListener('click',()=>
{
    if((nom.value)==0)
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),10);
        tenper.style.backgroundColor='hsl('+172+','+ 67+'%,'+ 45+'%)';
    }
})
fifteenper.addEventListener('click',()=>
{
    if((nom.value)==0)
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),15);
        fifteenper.style.backgroundColor='hsl('+172+','+ 67+'%,'+ 45+'%)';
    }
})
twentyfiveper.addEventListener('click',()=>
{
    if((nom.value)==0)
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),25);
        twentyfiveper.style.backgroundColor='hsl('+172+','+ 67+'%,'+ 45+'%)';
    }
})
fiftyper.addEventListener('click',()=>
{
    if((nom.value)==0)
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),50);
        fiftyper.style.backgroundColor='hsl('+172+','+ 67+'%,'+ 45+'%)';
    }
})
custombtn.addEventListener('click',()=>
{
    if((nom.value)=="")
    {
        errdis.innerText='Number of members cannot be zero. Try again';
    }
    else
    {
        split((bill.value),(nom.value),customtip.value);
    }
})
resetbtn.addEventListener('click',()=>
{
    errdis.innerText="";
    bill.value="";
    nom.value="";
    custombtn.value="";
    tippp.innerText="$0.00";
    totalpp.innerText="$0.00";
    fiveper.style.backgroundColor=tenper.style.backgroundColor=fifteenper.style.backgroundColor=twentyfiveper.style.backgroundColor=fiftyper.style.backgroundColor='hsl('+183+','+ 100+'%,'+ 15+'%)';
})