import { Statue } from "./Statue";


const szobrok:Statue[]=[];



function newS()
{

try{
  const nev=(document.getElementById('nev') as HTMLInputElement).value;
  const ev=parseInt((document.getElementById('ev') as HTMLInputElement).value);
  const ar=parseInt((document.getElementById('ar') as HTMLInputElement).value);
  const magassag=parseInt((document.getElementById('magassag') as HTMLInputElement).value);7


  const szobor =new Statue(nev, ev, ar, magassag)
  szobrok.push(szobor);

  let arak=0;
  for(let i=0; i<szobrok.length; i++)
  {
    arak+=szobrok[i].price;
  }

(document.getElementById('osszar')! as HTMLInputElement).value=arak.toString();
(document.getElementById('osszdarab')! as HTMLInputElement).value=szobrok.length.toString();




  
}
catch(e)
{
    if(e instanceof Error)
    {
        document.getElementById('erroruezenet')!.textContent=e.message;
        document.getElementById('erroruezenet')!.style.color='red';
        
    }
}

 
}

function init()
{
    document.getElementById('button')!.addEventListener('click', newS);
}

document.addEventListener('DOMContentLoaded', init);



