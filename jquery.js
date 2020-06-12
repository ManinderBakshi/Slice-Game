var playing=false;
var score;
var lifes=0;
var step;
var action;
var fruits=["apple","apricot","blueberry","Cantaloupe","Cherries","coconut","greenapple","kiwi","lemon","mango","orange","pomegranate","watermelon","peach","pear","grapes"];
$(function(){
    
    $("#start").click(function(){
        
       if(playing==true){
           location.reload();
       }
        
        else{
         playing=true;
         lifes=3;
            
         $("#start").html("Reset Game");
            $("#gOver").hide();
            
         score=0;
    $("#scoreValue").html(score);
            
        $("#life").show();
        addLifes();
            
         startGame();   
            
        }
    });


function addLifes(){
    $("#life").empty();
    for(i=0;i<lifes;i++){
        $("#life").append('<img src="images/life1.png" class= "life"> ');
        
    }
}

function startGame(){
    $("#fruits").show();
    chooseFruits();
    
    $("#fruits").css({'top':-50,'left':Math.round(Math.random()*460)});
    
    step= 1 + Math.round(Math.random()*5);
    
    action=setInterval(function(){
        $("#fruits").css('top',$("#fruits").position().top +step);
        
         if($("#fruits").position().top>$("#container").height()){
          
             if(lifes>1){
                 lifes--;
                 addLifes();
                  $("#fruits").show();
    chooseFruits();
    
    $("#fruits").css({'top':-50,'left':Math.round(Math.random()*460)});
    
    step= 1 + Math.round(Math.random()*5);
    
             }
             else{
                 playing=false;
                 
                 $("#start").html("Start Game");
                 $("#life").hide();
                 $("#fruits").hide();
                 $("#gOver").show();
                 
                 if(score<10){
                      $("#gOver").html("<p>Well You really need to improve at slicing, Otherwise your partner will going to slice you </p><p>Your Score is: "+score +"</p>" );
                 }
                 else if(score>10 && score<20){
                      $("#gOver").html("<p>Uhmm..Its pretty Good, But you can improve and you will be for a peaceful future.</p><p>Your Score is: "+score +"</p>" );
                 }
                 else{
                      $("#gOver").html("<p>Whoaa!! You're really gooood at this, Well done.You will make your partner happy.</p><p>Your Score is: "+score +"</p>" );
                 }
                 
                 clearInterval(action);
                 
             }
        
    }
    },50)
}
    $("#fruits").mouseover(function(){
        score++;
        $("#scoreValue").html(score);
        $("#sound")[0].play();
         clearInterval(action);
        
         $("#fruits").hide("explode" , 500);
        
        setTimeout(startGame,1000);
        
    });

function chooseFruits(){
    $("#fruits").attr('src','images/'+fruits[Math.round(Math.random()*15)]+'.png');
   
      
}
});