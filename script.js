//your JS code here. If required.


const form1 = document.getElementById("form1");

function setCookiePreference(){
	let cookieString = document.cookie;
	let cookie2Darray = cookieString.split(";").map((cokie)=>cokie.split("="));

	// building object using reduce function
	let cookieObj = cookie2Darray.reduce((accumulator,[key,value])=>
		({...accumulator,[key.trim()]: decodeURIComponent(value)  }),{});
	console.log(cookieObj);

	let font_size = cookieObj.fontsize;
	let font_color= cookieObj.fontcolor;

	document.getElementById("fontcolor").value = font_color;
	document.getElementById("fontsize").value = font_size;

	document.body.style= `font-size:${font_size}px; color:${font_color}`;

}

form1.addEventListener('submit',(e)=>{
	e.preventDefault();
	const colorValue = document.getElementById("fontcolor").value;
	const sizeValue = document.getElementById("fontsize").value;
	
	document.cookie = `fontcolor=${colorValue}; expires= mon, 14 oct 2023 12:00:00 UTC; path=/`;
	document.cookie = `fontsize=${sizeValue}; expires= mon, 14 oct 2023 12:00:00 UTC; path=/`;
	
});
setCookiePreference();
