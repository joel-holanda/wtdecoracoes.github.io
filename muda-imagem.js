let time = 3000,
indeximage = 0,
image = document.querySelectorAll(".apresentação img");
maximum = image.length;

window.addEventListener("load",start);

function start(){
	setInterval(()=>{
		next();
	},time);
}
function next(){
image[indeximage].classList.remove("select");
indeximage++;
if (indeximage>=maximum) {
	indeximage = 0;
}
image[indeximage].classList.add("select");
}