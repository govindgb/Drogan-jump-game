
var cross = true;
var score = 0;
var play =true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setInterval(()=>
{
    audio.play();
},1000);
audio.play();

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');  
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
        di = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        console.log(di);
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(()=>{
    var dino = document.getElementById("t2");
    var gameover= document.getElementById("t1");
    var obstacle = document.getElementById("t3");
   
 
   

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
   
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
   
    if (offsetX < 135 && offsetY < 52) {
       
     
       gameover.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        if(play)
        {
            setTimeout(()=>
        {
             audio.pause();
             audiogo.pause();           

        },1000);
        }
       
    }
    else if( offsetX <100 && cross  )
    {

    
         score = score+1;
         scorecount.innerHTML= "your score: "+score;
         cross = false;
         setTimeout(()=>{
         
            cross=true;
            setTimeout(()=>{
                anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                newdur =anidur-0.1;
                obstacle.style.animationDuration = newdur + 's';
            
            },500);

         },1000);
        
    
    }
},100);

