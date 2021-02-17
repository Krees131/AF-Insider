$(".south-africa").hide()
let select = document.querySelector(".select")
let oldSelected = select.value
$(document).ready(function(){    
    $(".select").change(function (){
         newSelected = select.value
        $("." + newSelected).show(1000)
        $("." + oldSelected).hide(1000)
        console.log(newSelected, oldSelected)
        oldSelected = select.value


    });

  });

