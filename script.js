$(function() {

    feather.replace();

    let button = $('.button');
    let title = $('.text-title');

    let song_1 = $('#song-1-button');
    let song_2 = $('#song-2-button');
    
    var audio_1 = new Audio('https://raw.githubusercontent.com/emmanishikawa/emmanishikawa/main/assets/audio/audio-gathermytears.mp3');
    var audio_2 = new Audio('https://raw.githubusercontent.com/emmanishikawa/emmanishikawa/main/assets/audio/audio-odoriko.mp3');

    let play_audio = $('[class="toggle-play"]');
    let pause_audio = $('[class="toggle-pause"]');

    var audioStatus_1 = false;
    var audioStatus_2 = false;


//-----------------------------CURSOR AND MOUSE MOVEMENT--------------------------

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



//----------------------RELOAD CONTENT--------------------------

    $(document).ready(function() {
        $('html, body').animate({scrollTop: '0px'}, 100);
    });

    $('#title').on('click', function() {
        window.location.href = "https://emmanishikawa.github.io/emmanishikawa/index.html"
        
        loadContent();
      });

    function loadContent(){

        $('html, body').animate({scrollTop: '0px'}, 500);
        $('#content').hide().fadeIn(800);

    }

//-----------------------------PAGE CHANGE------------------------------------------

$("#main-proj-1").click(function(){
    window.location.href = "https://emmanishikawa.github.io/emmanishikawa/projects/ccc.html";
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


//--------------------------MUSIC--------------------------------


    play_audio.show();
    pause_audio.hide();

    song_1.on('click', function() {
        songClick(1, "#audio-play-1", "#audio-pause-1", audioStatus_1, audio_1);
    });

    song_2.on('click', function() {
        songClick(2, "#audio-play-2", "#audio-pause-2", audioStatus_2, audio_2);
    });

    function songClick(songIndex, togglePlay, togglePause, audioStatus, audio){
        audio_1.pause();
        audio_2.pause();
        
        if(audioStatus){
            audioStatus = false;
            $(togglePlay).show();
            $(togglePause).hide();
        }else{
            audio.play();
            audioStatus = true;
            $(togglePlay).hide();
            $(togglePause).show();
        }

        switch(songIndex){
            case 1:
                audioStatus_1 = audioStatus;
                break;
            case 2:
                audioStatus_2 = audioStatus;
                break;
            default:
                break;
        }
    }

    audio_1.addEventListener("ended", function(){
        audio_1.currentTime = 0;
        play_audio.show();
        pause_audio.hide();
    });
    audio_2.addEventListener("ended", function(){
        audio_2.currentTime = 0;
        play_audio.show();
        pause_audio.hide();
    });

})(jQuery);
