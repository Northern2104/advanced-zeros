module.exports = function getZerosCount(number, base) {
 let count=0;
	let n = base;
	do{	
		if(n==2){break};
		n=n/2;
	}while(n%2==0);
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