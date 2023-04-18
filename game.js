var cercleR1 = document.querySelector('.cercleR1');
var cercleR2 = document.querySelector('.cercleR2');
var cercleR3 = document.querySelector('.cercleR3');
var cercleV1 = document.querySelector('.cercleV1');
var cercleV2 = document.querySelector('.cercleV2');
var cercleV3 = document.querySelector('.cercleV3');
var rouge=document.querySelector('.tROUGE');
var vert= document.querySelector('.tVERT');
var vainc = document.querySelector('.vainc');
var result = document.querySelector('.result');
var bt= document.getElementById('but');
var number=document.querySelector('.number');
var cote=document.querySelectorAll('#cote');
//pour faire le compte 
var cptCOTE=0;
var trcercle;
var trclick=0;
var selectedDiv=null;
var valeurDR=[];
var valeurDV=[];
var cpt1=0;
var cpt2=0;
var cpt3=0;
var cpt4=0;
var cpt5=0;
var cpt6=0;
//cercle 
var cercleB= [
   [0,1,2,3,5,6,7,8],
   [2,4,8],
   [3,4,7],
   [1,3,4],
   [0,2,4],
   [1,4,5],
   [0,4,6],
   [4,6,8],
   [4,5,7]
];
//mandresy
var vaincP=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

//possibilite d' egelité
var PMI=[
   [0,1,2],
   [1,2,5],
   [2,4,6],
   [5,7,8],
   [3,4,5],
   [6,7,8],
   [0,1,3],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [3,6,7]
];
rouge.addEventListener("click",function(){
    if(trclick==0){
       trcercle=2;
       rouge.innerHTML="R";
       trclick++;
    }
 });
vert.addEventListener("click",function(){
    if(trclick==0){
       trcercle=1;
       vert.innerHTML="V";
       trclick++;
 
    }
 });

//rouge

cercleR1.addEventListener("click",function(){
   if(trcercle==2){
      selectedDiv=this;
      if(cpt1==0){
         selectedDiv.nb=0;
      }
      cpt1++;
      cptCOTE=0;
   }
})
cercleR2.addEventListener("click",function(){
   if(trcercle==2){
      selectedDiv=this;
      if(cpt2==0){
         selectedDiv.nb=1;
      }
      cpt2++;
      cptCOTE=0;
   }
})
cercleR3.addEventListener("click",function(){
   if(trcercle==2){
      selectedDiv=this;
      if(cpt3==0){
         selectedDiv.nb=2;
      }
      cpt3++;
      cptCOTE=0;
   }
})
//vert
cercleV1.addEventListener("click",function(){
    if(trcercle==1){
       selectedDiv=this;
       if(cpt4==0){
          selectedDiv.nb=7;
       }
       cpt4++;
       cptCOTE=0;
    }
 })
cercleV2.addEventListener("click",function(){
   if(trcercle==1){
      selectedDiv=this;
      if(cpt5==0){
         selectedDiv.nb=7;
      }
      cpt5++;
      cptCOTE=0;
   }
})
cercleV3.addEventListener("click",function(){
   if(trcercle==1){
      selectedDiv=this;
      if(cpt6==0){
         selectedDiv.nb=8;
      }
      cpt6++;
      cptCOTE=0;
    
   }
})
function deplacerlescercle(event){
   if (selectedDiv!= null){
        var rect= event.target.getBoundingClientRect();
      // COTE CLIQUE
        var COTE=event.target.textContent;
        var COTEI=parseInt(COTE);
        if(cercleB[selectedDiv.nb].includes(COTEI)){
            var top= rect.top-30+ scrollY;
            var left= rect.left-270+ scrollX ;
            selectedDiv.style.top=top+"px";
            selectedDiv.style.left=left+"px";
        //changement de valeur de mouvement
            selectedDiv.nb=COTEI;
            selectedDiv.textContent=COTEI;
            selectedDiv.style.fontsize=0;
      //changement de tour apres mouvement
            if(trcercle==1){
                trcercle=2;
            }else{
                trcercle=1;
            }
        };
        //faire un test
        function testtour(t1,t2){
            if(t1.length!==t2.length){
                return false;
            }
            for(var i=0 ;i<t1.length;i++){
                if(t1[i]!== t2[i]){
                    return false;
                }
            }
            return true;
        }


        //collecte des positions de chaque piece par chaque camp
        var valeurDR=[parseInt(cercleR1.textContent),parseInt(cercleR2.textContent),parseInt(cercleR3.textContent)];
        var valeurDV=[parseInt(cerclev1.textContent),parseInt(cerclev2.textContent),parseInt(cercleV3.textContent)];
        valeurDR.sort();
        valeurDV.sort();
        //ROUGE GAGNE  
        if(cpt1!=0 && cpt2!=0 && cpt3!=0){
            var vainceur = vaincP.some(function(t){
                return testtour(t,valeurDR);
            });
            if(vainceur){
                setTimeout(function(){
                    result.textContent="rouge a gagné";
                    result.style.color="red";
                    vainc.style.visibility="visible";
                    vainc.style.backgroundcolor="red";
                },1000);
                console.log("ROUGE  A GAGNE");
            }
        }else{
        //comparaison
            compareMI(PMI[6],PMI[7]);
            compareMI(PMI[6],PMI[8]);
            compareMI(PMI[9],PMI[10]);
            compareMI(PMI[9],PMI[11]);
        }
        //VERT GAGNE
        if(cpt4!=0 && cpt5!=0 && cpt6!=0){
            var vainceur= vaincP.some(function(t){
                return testtour(t,valeurDV);
            });
            if(vainceur){
                setTimeout(function(){
                    result.textContent="VERT a gagné";
                    result.style.color="VERT";
                    vainc.style.visibility="visible";
                },1000);
                console.log("VERT  A GAGNE");
            }
        }else{
        //comparaison COMPARE
            compareMI(PMI[6],PMI[7]);
            compareMI(PMI[6],PMI[8]);
            compareMI(PMI[9],PMI[10]);
            compareMI(PMI[9],PMI[11]);

        }
        //Comparaison de deux tableaux
        function comparet(t1,t2){
            for(let i=0 ;i<t1.length;i++){
                if(t1[i]!== t2[i]){
                    return false;
                }
            }
            return true;
        }
        //comparaison d'égalite
        function compareMI(t1, t2){
            if(comparet(valeurDV,t1)&&comparet(valeurDR,t2)||(comparet(valeurDV,t2)&&comparetQ(valeurDR,t1)))
                setInterval(function(){
                    result.textContent="=";
                    result.style.color="yellow";
                    vainc.style.visibility="visible";
                },1000);
            }
        }

    }
for (var i=0; i < cote.length;i++){
      cote[i].addEventListener("click",function(event){
         if(cptCOTE==0){
            deplacerlescercle(event);
         }
         cptCOTE++;
   });
}

