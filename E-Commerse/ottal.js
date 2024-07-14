const increse=document.getElementById("inc")
   const decrese=document.getElementById("dec")
   const total=document.getElementById("amount")
   const add=document.getElementById("tot")
   let a=1
    increse.addEventListener("click",()=>{
      a=parseInt(a)+1
      total.innerHTML=a;
      add.innerHTML="total amount is: $"+a*30
     
    });
    decrese.addEventListener("click",()=>{
      if(a>1){
        a=a-1
     
      total.innerHTML=a;
      add.innerHTML="total amount is: $"+a*30
      
      }
      
     
    });

//one

const i4=document.getElementById("inc1")
const d4=document.getElementById("dec1")
const t4=document.getElementById("amount1")
const ad4=document.getElementById("tot1")

let c=1

 i4.addEventListener("click",()=>{
   c=parseInt(c)+1
   t4.innerHTML=c;
   ad4.innerHTML="total amount is: $"+c*75
  
 });
 d4.addEventListener("click",()=>{
   if(c>1){
     c=c-1
  
   t4.innerHTML=c;
   ad4.innerHTML="total amount is: $"+c*75
   
   }
   
  
 })


//     //two
    const i3=document.getElementById("inc2")
    const d3=document.getElementById("dec2")
    const t3=document.getElementById("amount2")
    const ad3=document.getElementById("tot2")
   
    let b=1

     i3.addEventListener("click",()=>{
       b=parseInt(b)+1
       t3.innerHTML=b;
       ad3.innerHTML="total amount is: $"+b*100
      
     });
     d3.addEventListener("click",()=>{
       if(b>1){
         b=b-1
      
       t3.innerHTML=b;
       ad3.innerHTML="total amount is: $"+b*100
       
       }
       
      
     })

    ///thrree

    const i2=document.getElementById("inc3")
    const d2=document.getElementById("dec3")
    const t2=document.getElementById("amount3")
    const ad2=document.getElementById("tot3")
    


     i2.addEventListener("click",()=>{
       a=parseInt(a)+1
       t2.innerHTML=a;
       ad2.innerHTML="total amount is: $"+a*125
      
     });
     d2.addEventListener("click",()=>{
       if(a>1){
         a=a-1
      
       t2.innerHTML=a;
       ad2.innerHTML="total amount is: $"+a*125
       
       }
       
      
     })


//     //four


   const i1=document.getElementById("inc4")
   const d1=document.getElementById("dec4")
   const t1=document.getElementById("amount4")
   const ad1=document.getElementById("tot4")
  


    i1.addEventListener("click",()=>{
      a=parseInt(a)+1
      t1.innerHTML=a;
      ad1.innerHTML="total amount is: $"+a*175
     
    });
    d1.addEventListener("click",()=>{
      if(a>1){
        a=a-1
     
      t1.innerHTML=a;
      ad1.innerHTML="total amount is: $"+a*175
      
      }
      
     
    })


//     ///five


const i=document.getElementById("inc5")
const d=document.getElementById("dec5")
const t=document.getElementById("amount5")
const ad=document.getElementById("tot5")



    i.addEventListener("click",()=>{
      a=parseInt(a)+1
      t.innerHTML=a;
      ad.innerHTML="total amount is: $"+a*90
     
    });
    d.addEventListener("click",()=>{
      if(a>1){
        a=a-1
     
      t.innerHTML=a;
      ad.innerHTML="total amount is: $"+a*90
      
      }
      
     
    })