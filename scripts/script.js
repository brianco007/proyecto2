const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const links = document.querySelectorAll('.nav-link');
const audios = document.querySelectorAll('.audio');
const left = document.querySelector('.left')
const right = document.querySelector('.right')


// Button to close modal
modalBtn.addEventListener('click', ()=>{
  modal.style.display = 'none';
})


// Piano NavBar
links.forEach((link, index)=>{
  link.addEventListener('mouseover', function(){
   audios[index].play();
  })
})


// drumkit
left.addEventListener('mouseover', ()=>{
  audios[7].play();
})

right.addEventListener('mouseover', ()=>{
  audios[8].play();
})


//Modal pop-up
modal.style.display = 'none';

if(!localStorage.getItem('modal')){
  document.addEventListener('DOMContentLoaded', ()=>{
    audios[9].play();
    setTimeout(function(){
      modal.style.display = 'block';
      modal.classList.toggle('active');
    }, 2100)
  })
  localStorage.setItem('modal', 'mostrado');
}


