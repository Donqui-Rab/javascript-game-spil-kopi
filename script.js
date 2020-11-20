window.addEventListener("load", sidenVises);

let points;
let rand;
let liv = 3;
let erSpilletStoppet = false;

let poff = document.querySelector("#poff_sprite");

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#titlescreen").classList.remove("hide");
    document.querySelector("#play_board").addEventListener("click", howtoplay);
    
}

function howtoplay() {
    c = document.getElementById("click_sound");
    c.play();
    document.querySelector("#play_board").classList.add("hide");
    document.querySelector("#howtoplay_board").classList.remove("hide");
    document.querySelector("#howtoplay_board").classList.add("show");
    document.querySelector("#play_board2").classList.remove("hide");
    document.querySelector("#play_board2").addEventListener("click", startSpillet);
}

function startSpillet() {
    console.log("startSpillet");

    a=document.getElementById("creepybackground_sound");
    a.pause();
    a.currentTime=0;
    a.play();

    g=document.getElementById("lose_sound");
    g.pause();
    g.currentTime=0;
    v=document.getElementById("victory_sound");
    v.pause();
    v.currentTime=0;

    c = document.getElementById("click_sound");
    c.pause()
    c.currentTime=0;
    c.play();
    // reset liv til 3
    liv = 3;

    //fjern eventlisteners
    this.removeEventListener("click", startSpillet);

    // vis startskærmen og play button
    document.querySelector("#howtoplay_board").classList.add("hide");
    document.querySelector("#howtoplay_board").classList.remove("show");
    document.querySelector("#play_board2").classList.add("hide");
    document.querySelector("#titlescreen").classList.add("hide");
    document.querySelector("#blurry").classList.add("hide");
    document.querySelector("#play_board").classList.add("hide");
    document.querySelector("#refresh_board").classList.add("hide");
    document.querySelector("#game_over").classList.remove("show");
    document.querySelector("#game_over").classList.add("hide");
    document.querySelector("#level_complete").classList.remove("show");
    document.querySelector("#level_complete").classList.add("hide");
    document.querySelector("#refresh_board2").classList.add("hide");

    // vis spilleslærmen
    document.querySelector("#game").classList.remove("hide");

    // Nulstil point og skriv point ud på siden

    //    document.querySelector("#creepybackground_sound").play();
    //    document.querySelector("#lyd").volume = 0.5;

    // start en timer
    //    setTimeout(stopSpillet, 1000 * 60);
    document.querySelector("#time_sprite").classList.add("time");
    document.querySelector("#time_sprite").addEventListener("animationend", stopSpillet);

    points = 0;
    document.querySelector("#points").textContent = points;

    // Start løbe animationer på alle cookies

    document.querySelector("#cookieman_container0").classList.remove("frys");
    document.querySelector("#cookieman_container1").classList.remove("frys");
    document.querySelector("#cookieman_container2").classList.remove("frys");
    document.querySelector("#cookieman_container3").classList.remove("frys");
    document.querySelector("#cookieman_container4").classList.remove("frys");
    document.querySelector("#cookieman_container5").classList.remove("frys");
    document.querySelector("#cookieman_container6").classList.remove("frys");
    document.querySelector("#cookieman_container7").classList.remove("frys");
    document.querySelector("#cookieman_container8").classList.remove("frys");
    document.querySelector("#cupcake_container9").classList.remove("frys");
    document.querySelector("#cupcake_container10").classList.remove("frys");

    // reset positions and animations
    for(i=0;i<=8;i++){
        document.querySelector("#cookieman_container"+i).classList.remove("delay"+i);

        document.querySelector("#cookieman_container"+i).classList.remove("pos0");
        document.querySelector("#cookieman_container"+i).classList.remove("pos1");
        document.querySelector("#cookieman_container"+i).classList.remove("pos2");
        document.querySelector("#cookieman_container"+i).classList.remove("pos3");
        document.querySelector("#cookieman_container"+i).classList.remove("pos4");
        document.querySelector("#cookieman_container"+i).classList.remove("pos5");
        document.querySelector("#cookieman_container"+i).classList.remove("pos6");
        document.querySelector("#cookieman_container"+i).classList.remove("pos7");
        document.querySelector("#cookieman_container"+i).classList.remove("pos8");
        rand = Math.floor(Math.random()*8);
        document.querySelector("#cookieman_container"+i).classList.add("pos"+rand);
        
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation0");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation1");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation2");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation3");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation4");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation5");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation6");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation7");
        document.querySelector("#cookieman_container"+i).classList.remove("cookieman_animation8");

        void document.querySelector("#cookieman_container"+i).offsetWidth;
        document.querySelector("#cookieman_container"+i).classList.add("cookieman_animation"+rand);

        document.querySelector("#cookieman_container"+i).classList.add("delay"+i);
    }

    for(i=9;i<=10;i++){
        document.querySelector("#cupcake_container"+i).classList.remove("delay"+i);

        document.querySelector("#cupcake_container"+i).classList.remove("pos9");
        document.querySelector("#cupcake_container"+i).classList.remove("pos10");
        rand = 9+Math.floor(Math.random()*2);
        document.querySelector("#cupcake_container"+i).classList.add("pos"+rand);

        document.querySelector("#cupcake_container"+i).classList.remove("cupcake_animation9");
        document.querySelector("#cupcake_container"+i).classList.remove("cupcake_animation10");
        
        void document.querySelector("#cupcake_container"+i).offsetWidth;
        document.querySelector("#cupcake_container"+i).classList.add("cupcake_animation"+rand);

        document.querySelector("#cupcake_container"+i).classList.add("delay"+i);
    }

    // Ved klik cookieman --> clickCookie
    document.querySelector("#cookieman_container0").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container1").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container2").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container3").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container4").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container5").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container6").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container7").addEventListener("click", clickCookie);
    document.querySelector("#cookieman_container8").addEventListener("click", clickCookie);

    // Ved klik på muffinman --> clickMuffin
    document.querySelector("#cupcake_container9").addEventListener("click", clickMuffin);
    document.querySelector("#cupcake_container10").addEventListener("click", clickMuffin);

    // Hvis der ikke klikkes på cookieman
    document.querySelector("#cookieman_container0").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container1").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container2").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container3").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container4").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container5").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container6").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container7").addEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container8").addEventListener("animationiteration", cookieAttack);


    // Hvis der ikke klikkes på muffinmad
    document.querySelector("#cupcake_container9").addEventListener("animationiteration", muffinAttack);
    document.querySelector("#cupcake_container10").addEventListener("animationiteration", muffinAttack);

}

function clickCookie(event) {
    console.log("clickCookie");

    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("click", clickCookie);

    var c = document.getElementById("cookie_kill");
    c.pause();
    c.currentTime = 0;
    c.play();

    w = this.firstElementChild.offsetWidth;
    h = this.firstElementChild.offsetHeight;
    cx=event.pageX - event.offsetX
    cy=event.pageY - event.offsetY
    pos_x = cx + w/2;
    pos_y = cy + h/2;

    this.firstElementChild.parentElement.classList.remove("cookieman_animation0");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation1");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation2");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation3");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation4");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation5");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation6");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation7");
    this.firstElementChild.parentElement.classList.remove("cookieman_animation8");

    poffAnimation(pos_x, pos_y);

    //Cookimonster forsvinder 
    this.firstElementChild.classList.add("forsvind");
    
    // Få et point
    points++;

    // Vis samlet antal point
    document.querySelector("#points").textContent = points;
    document.querySelector("#points1").textContent = points;

    //puff animation
    //Lyd: et skrig

    //Når cookieman forvinder --> restarCookie
    this.addEventListener("animationend", restartCookie);
}

function resetpoff(){
    poff.classList.add("hide");
    poff.classList.remove("poff_animation");
    poff.style.width="12vw";
    poff.style.height="11.16279vw";
    poff.removeEventListener("animationend", resetpoff);
}
function poffAnimation(pos_x, pos_y){

    var a = document.getElementById("poof_sound");
    a.pause();
    a.currentTime = 0;
    a.play();
    
    // poff_sprite animation
    w = poff.offsetWidth;
    h = poff.offsetHeight;

    let poff_top = pos_y - h/2;
    let poff_left = pos_x - w/2;

    poff.parentElement.style.top = poff_top+"px";
    poff.parentElement.style.left = poff_left+"px";
    poff.parentElement.style.zIndex = 9;

    poff.classList.remove("hide");
    poff.classList.remove("poff_animation");
    void poff.offsetWidth;
    poff.classList.add("poff_animation");
    poff.addEventListener("animationend", resetpoff);
}
function restartCookie() {
    console.log("restartCookie");
    
    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("animationend", restartCookie);

    //Fjern pause klassen fra container
    //Fjern forsvind classen fra sprite 
    //this.classList.remove("paused");
    this.firstElementChild.classList.remove("forsvind");

    // Fjern eksisterende position
    this.classList.remove("pos0");
    this.classList.remove("pos1");
    this.classList.remove("pos2");
    this.classList.remove("pos3");
    this.classList.remove("pos4");
    this.classList.remove("pos5");
    this.classList.remove("pos6");
    this.classList.remove("pos7");
    this.classList.remove("pos8");

    // Giv Cookie en ny (random) position --> find et tilfædigt tal mellem 0-8
    rand = Math.floor(Math.random() * 8);

    // definer en ny position et tilfældigt sted
    this.classList.add("pos" + rand);

    // // Fjern eksisterende cookie animation
    // this.classList.remove("cookieman_animation0");
    // this.classList.remove("cookieman_animation1");
    // this.classList.remove("cookieman_animation2");
    // this.classList.remove("cookieman_animation3");
    // this.classList.remove("cookieman_animation4");
    // this.classList.remove("cookieman_animation5");
    // this.classList.remove("cookieman_animation6");
    // this.classList.remove("cookieman_animation7");
    // this.classList.remove("cookieman_animation8");

    this.offsetHeight;

    // animationen skal starte et tilfældigt sted
    this.classList.add("cookieman_animation" + rand);


    //Når cookieman restarter --> clickcookie
    this.addEventListener("click", clickCookie);
}

function clickMuffin(event) {
    console.log("clickMuffin");

    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("click", clickMuffin);

    var b = document.getElementById("muffin_dead");
    b.pause();
    b.currentTime = 0;
    b.play()

    // Miste et liv hvis du angriber mr. muffin

    document.querySelector("#heart" + liv).classList.add("gray");
    liv--;
    console.log(liv);

    if (liv <= 0) {
        stopSpillet();
    }

    // Vis samlet antal point
    document.querySelector("#points").textContent = points;

    // 

    w = this.firstElementChild.offsetWidth;
    h = this.firstElementChild.offsetHeight;
    cx=event.pageX - event.offsetX
    cy=event.pageY - event.offsetY
    pos_x = cx + w/2;
    pos_y = cy + h/2;

    this.firstElementChild.parentElement.classList.remove("cupcake_animation9");
    this.firstElementChild.parentElement.classList.remove("cupcake_animation10");

    poffAnimation(pos_x, pos_y);

    // Muffinmanden forsvinder 
    this.firstElementChild.classList.add("forsvind");

    // puff animation
    //Lyd: Et skrig

    //Når Muffinmanden forvinder --> restarMuffin
    this.addEventListener("animationend", restartMuffin);
}



function restartMuffin() {


    console.log("restartMuffin");

    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("animationend", restartMuffin);

    // Muffinmanden forsvinder 
    this.firstElementChild.classList.remove("forsvind");

    // Fjern eksisterende position
    this.classList.remove("pos9");
    this.classList.remove("pos10");

    // Giv muffin en ny random position
    rand = Math.floor(Math.random() * 2 + 8);
    this.classList.add("pos" + rand);

    // Fjern eksisterende muffin animation
    this.classList.remove("cupcake_animation9");
    this.classList.remove("cupcake_animation10");

    this.offsetHeight;

    // animationen skal starte et tilfældigt sted
    this.classList.add("cupcake_animation" + rand);

    this.addEventListener("click", clickMuffin);

}

function cookieAttack() {
    console.log("cookieAttack");

    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("animationiteration", cookieAttack);

    // Lyd: Angriber

    // Miste et liv hvis cookieman angriber

    document.querySelector("#heart" + liv).classList.add("gray");
    liv--;
    console.log(liv);

    if (liv <= 0) {
        stopSpillet();
    } else {}


    // Vis samlet antal point
    document.querySelector("#points").textContent = points;

    // genstart cookie animation
    this.addEventListener("animationend", restartCookie);
}

function muffinAttack() {
    console.log("muffinAttack");

    //Oprydning: fjern den eventlistener som har ført dig herhen...
    this.removeEventListener("animationiteration", muffinAttack);

    // Lyd: Angriber

    // genstart cookie animation
    this.addEventListener("animationend", restartMuffin);
}

function gameOver() {
    console.log("gameOver");
    a=document.getElementById("creepybackground_sound");
    a.pause();
    g=document.getElementById("lose_sound");
    g.play();

    // Skriv "game over" du fik xx point" ud i konsollen

    console.log("game over du fik " + points + " point")
    pauseGame();

    // Vis taberskærm og refresh
    document.querySelector("#game_over").classList.remove("hide");
    document.querySelector("#game_over").classList.add("show");
    document.querySelector("#refresh_board").classList.remove("hide");
    document.querySelector("#blurry").classList.remove("hide");


    // stop timer / stop spillet - boolian spillet er stoppet
    //    erSpilletStoppet = true;


    // genstart spillet
    document.querySelector("#refresh_board").addEventListener("click", startSpillet);

}

function stopSpillet() {
    console.log("stopSpillet");

    //stop alle animationer på container
    document.querySelector("#cookieman_container0").classList.remove("cookieman_animation0");
    document.querySelector("#cookieman_container1").classList.remove("cookieman_animation1");
    document.querySelector("#cookieman_container2").classList.remove("cookieman_animation2");
    document.querySelector("#cookieman_container3").classList.remove("cookieman_animation3");
    document.querySelector("#cookieman_container4").classList.remove("cookieman_animation4");
    document.querySelector("#cookieman_container5").classList.remove("cookieman_animation5");
    document.querySelector("#cookieman_container6").classList.remove("cookieman_animation6");
    document.querySelector("#cookieman_container7").classList.remove("cookieman_animation7");
    document.querySelector("#cookieman_container8").classList.remove("cookieman_animation8");
    document.querySelector("#cupcake_container9").classList.remove("cupcake_animation9");
    document.querySelector("#cupcake_container10").classList.remove("cupcake_animation10");

    // stop forsvind animationer på sprites

    // fjern alle eventlisterner
    document.querySelector("#cookieman_container0").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container1").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container2").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container3").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container4").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container5").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container6").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container7").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cookieman_container8").removeEventListener("animationiteration", cookieAttack);
    document.querySelector("#cupcake_container9").removeEventListener("animationiteration", muffinAttack);
    document.querySelector("#cupcake_container10").removeEventListener("animationiteration", muffinAttack);

    // "this" erstattes med "document" på nogle eventlistener da det er containernen vi vil have fat i.
    document.querySelector("#cookieman_container0").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container1").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container2").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container3").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container4").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container5").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container6").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container7").removeEventListener("click", clickCookie);
    document.querySelector("#cookieman_container8").removeEventListener("click", clickCookie);
    document.querySelector("#cupcake_container9").removeEventListener("click", clickMuffin);
    document.querySelector("#cupcake_container10").removeEventListener("click", clickMuffin);

    document.querySelector("#cookieman_container0").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container1").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container2").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container3").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container4").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container5").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container6").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container7").removeEventListener("animationend", restartCookie);
    document.querySelector("#cookieman_container8").removeEventListener("animationend", restartCookie);
    document.querySelector("#cupcake_container9").removeEventListener("animationend", restartMuffin);
    document.querySelector("#cupcake_container10").removeEventListener("animationend", restartMuffin);

    // stop alle animationer på liv/hjerter:
    document.querySelector("#heart1").classList.remove("gray");
    document.querySelector("#heart2").classList.remove("gray");
    document.querySelector("#heart3").classList.remove("gray");

    // stop alle animationer på tidsbaren:
    document.querySelector("#time_sprite").classList.remove("time");

    // gå til startspillet
    //    document.querySelector("#refesh_board").addEventListener("click", startSpillet);

    // stop alle animationer
    // fjern allle eventlisteners

    // boolian spillet er stoppet
    //    if (erSpilletStoppet == true) {
    //        //gør ikke noget fordi spillet er allerede gået til game over
    //    } else 

    if (liv > 0) {
        levelComplete();
    } else {
        gameOver();
    }
}

function pauseGame() {
   console.log("pauseGame");

   //stop alle animationer på container
   document.querySelector("#cookieman_container0").classList.add("frys");
   document.querySelector("#cookieman_container1").classList.add("frys");
   document.querySelector("#cookieman_container2").classList.add("frys");
   document.querySelector("#cookieman_container3").classList.add("frys");
   document.querySelector("#cookieman_container4").classList.add("frys");
   document.querySelector("#cookieman_container5").classList.add("frys");
   document.querySelector("#cookieman_container6").classList.add("frys");
   document.querySelector("#cookieman_container7").classList.add("frys");
   document.querySelector("#cookieman_container8").classList.add("frys");
   document.querySelector("#cupcake_container9").classList.add("frys");
   document.querySelector("#cupcake_container10").classList.add("frys");

   // stop forsvind animationer på sprites

   // fjern alle eventlisterner
   document.querySelector("#cookieman_container0").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container1").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container2").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container3").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container4").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container5").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container6").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container7").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cookieman_container8").removeEventListener("animationiteration", cookieAttack);
   document.querySelector("#cupcake_container9").removeEventListener("animationiteration", muffinAttack);
   document.querySelector("#cupcake_container10").removeEventListener("animationiteration", muffinAttack);

   // "this" erstattes med "document" på nogle eventlistener da det er containernen vi vil have fat i.
   document.querySelector("#cookieman_container0").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container1").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container2").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container3").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container4").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container5").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container6").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container7").removeEventListener("click", clickCookie);
   document.querySelector("#cookieman_container8").removeEventListener("click", clickCookie);
   document.querySelector("#cupcake_container9").removeEventListener("click", clickMuffin);
   document.querySelector("#cupcake_container10").removeEventListener("click", clickMuffin);

   document.querySelector("#cookieman_container0").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container1").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container2").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container3").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container4").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container5").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container6").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container7").removeEventListener("animationend", restartCookie);
   document.querySelector("#cookieman_container8").removeEventListener("animationend", restartCookie);
   document.querySelector("#cupcake_container9").removeEventListener("animationend", restartMuffin);
   document.querySelector("#cupcake_container10").removeEventListener("animationend", restartMuffin);

}

function levelComplete() {
    console.log("levelComplete");
    a=document.getElementById("creepybackground_sound");
    a.pause();
    v=document.getElementById("victory_sound");
    v.play();
    // skriv "level Complete - du fik xx point" ud i konsollen.
    console.log("Tillykke du har vundet!! Du fik " + points + " point");
    pauseGame();

    // Vis vinderskærm og refresh knap
    document.querySelector("#level_complete").classList.remove("hide");
    document.querySelector("#level_complete").classList.add("show");
    document.querySelector("#refresh_board2").classList.remove("hide");
    document.querySelector("#blurry").classList.remove("hide");

    // stop timer / stop spillet - boolian spillet er stoppet
    //    erSpilletStoppet = true;

    document.querySelector("#refresh_board2").addEventListener("click", startSpillet);

}
