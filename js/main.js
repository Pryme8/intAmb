$( document ).ready(function() {
    $('.stripeBase').each(function(i) {
        $(this).delay(320*i).animate({
            opacity: 1,
            height: "25%",
            queue: false 
            }, 1200, function() {
        // Animation complete.
        });
    });
    
    
    setTimeout(function(){
    $('.stripeCap').each(function(i) {
        $(this).delay(320*i).animate({
            opacity: 1,
            borderBottomWidth: $( document ).height()*0.25,
            queue: false 
            }, 1200, function() {
        // Animation complete.
       


            });
    });},1000);


    setTimeout(function(){
    $('.logoBase').animate({
            backgroundColor: 'red',
            queue: false 
            }, 320, function() {
        // Animation complete.
       
    });},2100);



    setTimeout(function(){
    
        $('.logoBase').animate({
            backgroundColor: 'magenta',
            queue: false 
            }, 320, function() {
        // Animation complete.
       
    });},2320);

    setTimeout(function(){
    
        $('.logoBase').animate({
            backgroundColor: '#827f2b',
            queue: false 
            }, 320, function() {
        // Animation complete.
       
    });},2640);

setTimeout(function(){
    
        $('.logoBase').animate({
            backgroundColor: 'black',
            queue: false 
            }, 320, function() {
        // Animation complete.
        
        //NEST PHASE OF STRIPES!
        $('.stripefirstLeg').css( 'bottom',($( document ).height()*0.5)+95 );
                 $('.stripefirstLeg').each( function(i) {
                    var tempHeight, tempDelay;
                    if(i===0 || i ===3){
                    tempHeight='20%';
                    tempDelay=600;
                    }else{
                    tempHeight='10%';
                    tempDelay=1200;
                    }
                        
                         $(this).delay(320*i).animate({
                        opacity: 1,
                        height: tempHeight,
            queue: false 
            }, tempDelay, function() {
        // Animation complete.
        });

        
    });
    
    setTimeout(function(){
            $('#yellow1_1').css( 'bottom',($( document ).height()*0.7)+91 );
            $('#green1_1').css( 'bottom',($( document ).height()*0.6)+91 );
            $('#blue1_1').css( 'bottom',($( document ).height()*0.6)+91 );
            $('#red1_1').css( 'bottom',($( document ).height()*0.7)+91 );
                 $('.stripeSlant').each( function(i) {
                    var tempHeight, tempDelay;
                    if(i===0 || i ===3){
                    tempHeight='15%';
                    tempDelay=1200;
                    }else{
                    tempHeight='50%';
                    tempDelay=600;
                    }
                        
                         $(this).delay(320*i).animate({
                        opacity: 1,
                        height: tempHeight,
            queue: false 
            }, tempDelay, function() {
        // Animation complete.
        });

        
    });},1000);

setTimeout(function(){
$(window).trigger('resize');
             
                 $('.stripeLast').each( function(i) {
       
                       var tempHeight, tempDelay;
                    if(i===0 || i ===3){
                    tempHeight='6%';
                    tempDelay=1200;
                    }else{
                    tempHeight='8%';
                    tempDelay=800;
                    }
                        
                         $(this).delay(320*i).animate({
                        opacity: 1,
                        height: tempHeight,
            queue: false 
            }, tempDelay, function() {
        $(window).trigger('resize');
        });

        
    });},2000);

setTimeout(function(){
           
            $('#yellow1_3').css( 'marginLeft',((($(document).width()/2)-$('#yellow1_2').offset().left)*-1)-41);
           $('#green1_3').css( 'marginLeft',((($(document).width()/2)-$('#green1_2').offset().left)*-1)-39);
            $('#red1_3').css( 'marginRight',((($(document).width()/2)-$('#red1_2').offset().left))-54);
             $('#blue1_3').css( 'marginRight',((($(document).width()/2)-$('#blue1_2').offset().left))-46);
                
$('.topLink').each( function(i) {

                    
                        
                         $(this).delay(320*i).animate({
                        opacity: 1,
                        height: '300px',
            queue: false 
            }, 1200, function() {
        $(window).trigger('resize');
        });

        
    });},3000);

       
    });},2960);
    
    
    $( window ).resize(function() {
        
    $('.stripeCap').css( 'borderBottomWidth',$( document ).height()*0.25 );    
    $('.stripefirstLeg').css( 'bottom',($( document ).height()*0.5)+95 );
    $('#yellow1_1').css( 'bottom',($( document ).height()*0.7)+91 );
    $('#green1_1').css( 'bottom',($( document ).height()*0.6)+91 );
    $('#blue1_1').css( 'bottom',($( document ).height()*0.6)+91 );
    $('#red1_1').css( 'bottom',($( document ).height()*0.7)+91 );
                $('#yellow1_2').css( 'bottom',$( document ).height()-$( '#yellow1_1' ).offset().top-12);
            $('#yellow1_2').css( 'marginLeft',$( '#yellow1_1' ).offset().left-8-$( document ).width()/2);
           $('#green1_2').css( 'bottom',$( document ).height()-$( '#green1_1' ).offset().top-12);
            $('#green1_2').css( 'marginLeft',$( '#green1_1' ).offset().left-$( document ).width()/2);
             $('#blue1_2').css( 'bottom',$( document ).height()-$( '#green1_1' ).offset().top-12);
             $('#blue1_2').css( 'marginRight',$( '#green1_1' ).offset().left+30-$( document ).width()/2);
            $('#red1_2').css( 'bottom',$( document ).height()-$( '#yellow1_1' ).offset().top-12);
            $('#red1_2').css( 'marginRight',$( '#yellow1_1' ).offset().left+22-$( document ).width()/2);
            $('#yellow1_3').css( 'marginLeft',((($(document).width()/2)-$('#yellow1_2').offset().left)*-1)-41);
           $('#green1_3').css( 'marginLeft',((($(document).width()/2)-$('#green1_2').offset().left)*-1)-39);
            $('#red1_3').css( 'marginRight',((($(document).width()/2)-$('#red1_2').offset().left))-54);
             $('#blue1_3').css( 'marginRight',((($(document).width()/2)-$('#blue1_2').offset().left))-46);
    
    });
    
    
    
});


