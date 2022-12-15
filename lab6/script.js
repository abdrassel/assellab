function addContact(){
    let name = prompt('Please enter the name');
    let div = document.createElement('div')
    div.innerHTML=name
    div.classList.add('contact')
    document.getElementById('contacts1').appendChild(div)

  }

  window.addEventListener('scroll',(event)=>{
    if($(window).scrollTop()>300){
      document.getElementsByClassName('mama')[0].classList.add('mama2')
    }
    if(document.documentElement.scrollTop < 300){
      document.getElementsByClassName('mama')[0].classList.remove('mama2')
    }
  })