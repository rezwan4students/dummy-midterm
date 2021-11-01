
function process () {

    var student = document.getElementById('nameBox').value ;
    var mid = document.getElementById('midBox').value ;
    var final = document.getElementById('finalBox').value ;
    // var total = (mid*.40) + parseInt(final); 
    var total = (mid * .40) + (final * .60);

    if (total >= 60) {
        p2.innerText = "Great, you have passed the course"
    }
    else {
       p2.innerText = "Sorry, you failed this time."
    }


    if (total >= 80) {
        p3.innerText = "You got A grade" ;
    }
    else if (total >= 70){
        p3.innerText = "You got B grade";
    }

    else if (total >= 60){
        p3.innerText ="You got C grade"; 
    }

    else {
        p3.innerText = "You got F grade"; 
    }






    p1.innerText = student + " your total marks: " + total; 

    document.getElementById('nameBox').value = '' ; 
    document.getElementById('midBox').value = '' ; 
     document.getElementById('finalBox').value = '' ; 

}

