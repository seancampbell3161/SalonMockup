let list = document.querySelectorAll("a");
    let header = document.getElementById('nav-bar');
    let sandwich = document.querySelector('#menu-sandwich i');

    window.onscroll = function() {scrollFunction()};



    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('nav-animation');
            console.log('change');
            
            sandwich.classList.add('black-sandwich');

            list.forEach((li)=>{
              li.style.color = 'black'
            })

  

        } else {


            header.classList.remove('nav-animation');
            
            sandwich.classList.remove('black-sandwich');

            list.forEach((li)=>{
             li.style.color = 'white'
            })
        }
      }
