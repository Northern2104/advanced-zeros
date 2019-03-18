module.exports = function getZerosCount(number, base) {
 let count=0;
	let n = base;
	do{	
		if(n==2){break};
		n=n/2;
	}while(n%2==0);
	
	if(n%3==0)
		do{	
			if(n==3){break};
			n=n/3;
		}while(n%3==0);
	if(n%5==0)
		do{	
			if(n==5){break};
			n=n/5;
		}while(n%5==0);
	if(n%7==0)
		do{	
			if(n==7){break};
			n=n/7;
		}while(n%7==0);
	

	for(i=1;i<=number;i++){
		if(i%n==0){
			let a = i;
			do{
				a=a/n;
				count+=1;
			} while(a%n==0);
		}	
	}
	return count;
}