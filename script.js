//your JS code here. If required.
let main = document.querySelectorAll("li");
for(let i=0;i<main.length;i++){
	if(main[i].id == 'level'){
		alert(`The level of the element is: ${i}`)
	}
}