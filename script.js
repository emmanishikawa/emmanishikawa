
//-----------------------------CURSOR AND MOUSE MOVEMENT--------------------------
$(function() {

    let cursor = $('#cursor');

     var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;

    var circle = { 
        el:cursor,
        x:window.innerWidth/2, 
        y:window.innerHeight/2, 
        w:cursor.width(), 
        h:cursor.height(), 
        update:function(){
        l = this.x-this.w/2; 
        t = this.y-this.h/2; 
        this.el.css({ 
            'transform':
            'translate3d('+l+'px,'+t+'px, 0)' }); 
        }
    }

    $(window).mousemove (function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
    })

    setInterval (move,500/60)
    function move(){
        circle.x = lerp (circle.x, mouseX, 0.1);
        circle.y = lerp (circle.y, mouseY, 0.1);
        circle.update() 
    }

    function lerp (start, end, amt){
        return (1-amt)*start+amt*end
    }
    
    //mouse on button hover
    button
    .hover(function(){
        cursor.css({
            "height" : "120px",
            "width" : "120px",
            "border-radius" : "60px",
            "transition" : "height ease-out 0.4s, width ease-out 0.4s, border-radius ease-out 0.4s, margin-top ease-out 0.4s, margin-left ease-out 0.4s, opacity ease-out 0.2s",
            "margin-top" : "-40px", 
            "margin-left" : "-40px",
            "opacity" : ".5"
        });

    }, 
    function(){
        cursor.css({
            "height" : "40px",
            "width" : "40px",
            "border-radius" : "20px",
            "transition" : "height ease-out 0.4s, width ease-out 0.4s, border-radius ease-out 0.4s, margin-top ease-out 0.4s, margin-left ease-out 0.4s, opacity ease-out 0.2s",
            "margin-top" : "0",
            "margin-left" : "0",
            "opacity" : ".5"
        });
    });

    //mouse on button click 
    button
    .click(function(){
        cursor.css({
            "height" : "180px",
            "width" : "180px",
            "border-radius" : "90px",
            "transition" : "height ease-in 0.2s, width ease-in 0.2s, border-radius ease-in 0.2s, margin-top ease-in 0.2s, margin-left ease-in 0.2s, opacity ease-in 0.3s",
            "margin-top" : "-70px", 
            "margin-left" : "-70px",
            "opacity" : "0"
        });
    });

//-----------------------------LANGUAGE CHANGE------------------------------------------

let lang_button = $('#button-lang');

var currentLang = "";

let en = $('[lang="en"]');
let zh = $('[lang="zh"]');
let jp = $('[lang="jp"]');
let kr = $('[lang="kr"]');

changeLanguage("en");

lang_button.click(function(){

    switch(currentLang){
        case "en":
            changeLanguage("zh");
            break;
        case "zh":
            changeLanguage("jp");
            break;
        case "jp":
            changeLanguage("kr");
            break;
        case "kr":
            changeLanguage("en");
            break;
        default:
            changeLanguage("en");
    }

});

function changeLanguage(lang){
    if(currentLang !== lang){

        loadContent();

        en.hide();
        zh.hide();
        jp.hide();
        kr.hide();

     //   $('.lang-button').css("background-color", "#1A1A1D");

        switch(lang){
            case "en":
                lang_button.text('A');
                title.css("font-family", "Kodomo");
                en.show();
                break;
            case "zh":
                lang_button.text('中');
                title.css("font-family", "Watermelon");
                zh.show();
                break;
            case "jp":
                lang_button.text('あ');
                title.css("font-family", "Zen Kurenaido");
                jp.show();
                break;
            case "kr":
                lang_button.text('한');
                title.css("font-family", "Gaegu");
                kr.show();
                break;
            default:
                break;
        }

    currentLang = lang;

    }
}

})(jQuery);

