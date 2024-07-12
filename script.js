// Function to change header background on scroll
function changeHeaderAndBodyBackground() {
    const header = document.querySelector('header');
    const body = document.body;
    const sections = document.querySelectorAll('section'); // Select all sections
    
    // Add scroll event listener to window
    window.addEventListener('scroll', () => {
      // Change header background color
      if (window.scrollY > 0) {
        header.style.backgroundColor = '#e2db54'; // Change to desired color when scrolled
      } else {
        header.style.backgroundColor = 'black'; // Original color when at the top
      }
      
      // Change body background color based on scroll position
      const scrolled = window.scrollY;
      
      if (scrolled>1000) {
        body.style.backgroundColor = '#000000'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>950) {
        body.style.backgroundColor = '#0d0d0d'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>900) {
        body.style.backgroundColor = '#1a1a1a	'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>850) {
        body.style.backgroundColor = '#262626	'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>800) {
        body.style.backgroundColor = '#333333'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>750) {
        body.style.backgroundColor = '#404040'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>700) {
        body.style.backgroundColor = '#4d4d4d'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>650) {
        body.style.backgroundColor = '#595959'; // Change body color when scrolled more than 100px
      }
       else if (scrolled>600) {
        body.style.backgroundColor = '#666666'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>550) {
        body.style.backgroundColor = '#737373'; // Change body color when scrolled more than 100px
      }
      
      else if (scrolled>500) {
        body.style.backgroundColor = '#808080'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>450) {
        body.style.backgroundColor = '#8c8c8c	'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>400) {
        body.style.backgroundColor = '#999999'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>350) {
        body.style.backgroundColor = '#a6a6a6'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>300) {
        body.style.backgroundColor = '#b3b3b3'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>250) {
        body.style.backgroundColor = '#bfbfbf	'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>200) {
        body.style.backgroundColor = '#cccccc'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>150) {
        body.style.backgroundColor = '#d9d9d9'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>100) {
        body.style.backgroundColor = '#e6e6e6'; // Change body color when scrolled more than 100px
      }
      else if (scrolled>50) {
        body.style.backgroundColor = '#f2f2f2'; // Change body color when scrolled more than 100px
      }
      else {
        body.style.backgroundColor = ''; // Change body color when scrolled more than 100px
      } 
      
    });
  }
  
  // Call function on window load
  window.addEventListener('load', changeHeaderAndBodyBackground);
  
  // Function to handle menu item hover effect
  function handleMenuItemHover() {
    const menuItems = document.querySelectorAll('#navbar ul li a');
    
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#44b781'; // Hover background color
        this.style.color = '#e3b98c'; // Hover text color
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // Revert to default background
        this.style.color = '#f42020'; // Revert to default text color
      });
    });
  }
  
  // Call function on window load
  window.addEventListener('load', handleMenuItemHover);


  
  