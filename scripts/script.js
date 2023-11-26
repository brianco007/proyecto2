const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const links = document.querySelectorAll('.nav-link');
const audios = document.querySelectorAll('.audio');
const left = document.querySelector('.left')
const right = document.querySelector('.right')



//Modal pop-up
setTimeout(function(){
  modal.classList.toggle('active');
}, 2000)

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

window.addEventListener('load', ()=>{
  audios[9].play();
})

