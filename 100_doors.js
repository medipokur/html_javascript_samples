function getFinalOpenedDoors (numDoors) {
  //window.alert("getFinalOpenedDoors cagrildi");
  let kapilar = [];  

  for (let i = 0; i <= numDoors; ++i)
  {
	  kapilar.push(false);
  }  
  
  for (let pass = 1; pass <= numDoors; ++pass)
  {
	for (let j = pass; j <= numDoors; j+=pass)
	{
	   kapilar[j] = !kapilar[j];				  
	}
  }
  
  let acikKapilar = [];
  
  for (let z = 1; z<= numDoors; ++z)
  {
    if (kapilar[z]){
      acikKapilar.push(z);      
    }
  }

  return acikKapilar;
}