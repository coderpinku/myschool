
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

 // Set the date we're counting down to
      var countDownDate = new Date("Dec, 2023 15:37:25").getTime();
      
      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("day").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
      
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("time").innerHTML = "EXPIRED";
        }
      }, 1000);

      // Login PopUp page section

      var openmodel = document.getElementById('login-modal');
      var closeBtn = document.getElementsByClassName('close-btn')[0];
      
      closeBtn.addEventListener('click', closeLogin);
      window.addEventListener('click', clickoutside);

      function openLoginPage(){
        openmodel.style.display = 'block';
      }

      function closeLogin(){
        openmodel.style.display = 'none';

      }
      function clickoutside(e){
        if(e.target == openmodel){
          openmodel.style.display = 'none';
        }

      }


     