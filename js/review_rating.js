function startRating(item){
	rate=item.id[0];
	sessionStorage.star = rate;
	for(var i=0;i<5;i++){
		if(i<rate){
			document.getElementById((i+1)).style.color="rgba(125, 127, 243, 0.885)";
		}
		else{
			document.getElementById((i+1)).style.color="rgba(83, 79, 79, 0.085)";
		}
	}
}