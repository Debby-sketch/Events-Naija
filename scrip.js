const menuToggle=document.querySelector('menu toggle')
const navlinks=document.querySelector('nav links')
const hamburger=document.querySelector(hamburger)

menuToggle.addEventListener('click',()=>{
  if(navlinks.classList.contains('active'))
  hamburger.className='fas fa- times'

})else if(!navlinks.classList.contains('active')){
  navlinks.classList.add('active')
  hamburger.className='fas fa -bars'

}
if(menuToggle.classList)
document.querySelectorAll('a{href^="#"').forEach(anchor= addEventListener('click',function(e){   
}))e.preventDefault()


const target=document.querySelector(this.getAttribute('href'))
if(target)
  target.scrollIntoView(
    behaviour:'smooth');
    block :'start';
  
navlinks.classList.remove('active')

const filterButtons=document.querySelectorAll('filter-btn')
const PortfolioItems=document.querySelector('.portfolio-item')

filterButtons.forEach (button =>{
  button.addEventListener('click',()=> {
  const filter=button.getAttribute('data-filter')

   filterButtons.forEach(btn => btn.classList.remove)('active'))
   button.classList.add('active')

  PortfolioItems.forEach(item =>{
   const category=item.getAttribute('data-category')
   if (filter === 'all'||category=== filter){}

   item.style.display= 'block'
   item.style.animation= 'FadeInUp 0.5s ease'
   
  }else item.style.display='none'}


  

const bookingform =document.querySelector('booking-form form')
bookingForm.addEventListener('Submit',(e) =>{

}e.preventDefault()

}const formData=Newform(booking form)
const data=Object.formdata.entries()
if(!data.name|| !data.email;