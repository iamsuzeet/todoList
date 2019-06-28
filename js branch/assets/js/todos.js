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
});

// Show an element
var show = function (elem) {

	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 100);

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 100);

};

// Toggle element visibility
var toggle = function (elem) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);
	
};

// Listen for click events
plus.addEventListener('click', function (e) {
  if(e.target.classList.contains('toggle')){
   e.preventDefault();
   toggle(input);
  }

});

