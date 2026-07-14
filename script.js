const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dot')];
let index=0;
let timer;

function showSlide(i){
  slides[index].classList.remove('active');
  dots[index].classList.remove('active');
  index=(i+slides.length)%slides.length;
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function start(){
  clearInterval(timer);
  timer=setInterval(()=>showSlide(index+1),5500);
}

dots.forEach((dot,i)=>{
  dot.addEventListener('click',()=>{
    showSlide(i);
    start();
  });
});

start();
