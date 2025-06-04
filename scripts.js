const from = document.querySelector(".contact-us-form")
const mask = document.querySelector(".mask-form")
const header = document.querySelector(".header")
const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.background ='#000000'
    
  } else {
    header.style.position = 'static';
    header.style.top = '0'; // Limpa a propriedade top
    header.style.background = 'none'
  }
});

  function clickOnTheButton(){
    from.style.left = "50%"
    from.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function clickOnTheMask(){
    from.style.left = "-300px"
    from.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}