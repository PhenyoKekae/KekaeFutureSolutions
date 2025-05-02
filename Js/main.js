/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let isClicked = true;

let toggleNav = function()
{
    let getSidebar = document.querySelector(".nav-sidebar");
    // Create a MediaQueryList object
    var x = window.matchMedia("(max-width: 980px)")
    
    function checkWindowSize(x) {
        if (x.matches) { // If media query matches
          getSidebar.style.visibility = "visible";
        } 
        else 
        {
         getSidebar.style.visibility = "hidden";
        }
      }
      
      checkWindowSize(x);
    if(isClicked === true)
    {
        // Call listener function at run time
        checkWindowSize(x);
        isClicked = false;
    }
    else if(isClicked === false)
    {
        getSidebar.style.visibility = "hidden";
        isClicked = true;
    }
    
    
    // Attach listener function on state changes
        x.addEventListener("change", function() {
          myFunction(x);
        });
}





