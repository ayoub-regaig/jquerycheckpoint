function bold(){
$("#my-text").css("fontWeight","bold")
}

function italic(){
 $("#my-text").css("fontStyle","italic")
}

function underlined(){
    $("#my-text").css("textDecoration","underline")
   }

function changeSize(){
    let size = $("#size").val()
    $("#my-text").css("fontSize", size + "px")
}

function changeFont(){
    let font = $("#font").val()
    $("#my-text").css("fontFamily", font)
}

$("#changeFont").change(changeFont)
$("#changeSize").change(changeSize)
$("#bold").click(bold)
$("#italic").click(italic)
$("#underlined").click(underlined) 