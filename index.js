let game1 = document.querySelector(".game1")
let game2 = document.querySelector(".game2")
let game3 = document.querySelector(".game3")
let game4 = document.querySelector(".game4")

let pubgTourney = document.querySelector(".pubg-tourney")
let codTourney = document.querySelector(".cod-tourney")
let fifaTourney = document.querySelector(".fifa-tourney")
let vb = document.querySelector(".view-button")
let Tourneys = [".game1",".game2", ".game3", ".game4"]

let count = 0
let screenWidth = window.screen.width


if (screenWidth > 500) {
    $(".game3").hide()
    $(".game4").hide()
    $(document).ready(function(){

        $(".scroll-right").click(function scroll(){

            $(Tourneys[count]).hide(1000)
            $(Tourneys[count+2]).show(1000)
            //  tourneys[count].style.display = "none"
            //  tourneys[count+1].style.display = "block"
            count++
            //  if count == 
            console.log(count)  
            console.log(Tourneys) 
            alert("size is " + window.screen.width)
        });
        $(".scroll-left").click(function scroll(){
            $(Tourneys[count-1]).show(1000)
            $(Tourneys[count+1]).hide(1000)
            console.log(count)
            count--

    });

  });
  
    
} else {
    $(".game2").hide()
    $(".game3").hide()
    $(".game4").hide()
}
