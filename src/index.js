module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let arrStr;
  
  arrStr = str.split('');
  
  for (let i = 0; i < arrStr.length; i++ ) {
    
    for (let j = 0; j < bracketsConfig.length; j++ ) {

      if ( arrStr[i] === bracketsConfig[j][0] ) { 
	    arr.push([arrStr[i],j]);                  	    
      }
    }     
	
    for (let j = 0; j < bracketsConfig.length; j++ ) {     
      if ( ( arrStr[i] === bracketsConfig[j][1] ) 
        && ( arrStr[i] !== bracketsConfig[j][0] ) ) { 
	     
	if ( arr.length > 0 ) {
		 
          if ( arr[arr.length - 1][1] === j ) { 
	    arr.pop(); 
	  } else {
	    return false;
	  }
		         	    
	} else {
	  return false;
	}	
      } 
	  
      if ( ( arrStr[i] === bracketsConfig[j][1] ) 
        && ( arrStr[i] === bracketsConfig[j][0] ) ) {

	let count = arr.reduce( (s,a,i,m) => 
          a[0] === bracketsConfig[j][1] ? s+1 : 0, 0 );    
	    
        if ( count % 2 === 0 ) {
	  arr.pop();
	  arr.pop();
	}    
      }	  		  	     	 
    }  
  }  
  
  return arr.length === 0 ? true : false ;
}