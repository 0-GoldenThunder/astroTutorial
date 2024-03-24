const myslide = document.querySelectorAll('.myslide');
let counter = 1;

slidefun(counter);

function plusSlides(n) {
	counter += n;
	slidefun(counter);
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
}


document.querySelector('.prev').addEventListener('click', () => {
	plusSlides(1)
})
document.querySelector('.next').addEventListener('click', () => {
	plusSlides(-1)
})