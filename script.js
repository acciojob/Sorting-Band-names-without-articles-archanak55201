//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function splits(name){
	let regex= new RegExp('^(a |an |the )','i');
	return name.replace(regex,'').trim();
	
}

touristSpots.sort(function(a,b){
	return (splits(a)>splits(b)?1:-1);
})
console.log(touristSpots);
let ul =document.getElementsByTagName("ul")[0];
// console.log(ul);

ul.innerHTML=touristSpots.map(item=>
    `<li>${
    (item)
}</li>`).join();
