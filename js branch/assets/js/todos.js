const ul = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');
const plus = document.querySelector('.fa-plus');

const liArr = Array.from(document.querySelectorAll('li'));




ul.addEventListener('click',function(e){

  if(e.target.matches('li')){
    e.target.classList.toggle('completed');
  }
 
  else if(e.target.matches('i')){
    e.target.parentElement.parentElement.remove();
  }
});

input.addEventListener('keyup',function(e){
  if(e.which === 13){
   const todoText = this.value;
   this.value = '';

   const markup = `
   <li><span><i class="fa fa-trash"></i></span>  ${todoText} </li>
   `;

   ul.innerHTML += markup;
  }
})

