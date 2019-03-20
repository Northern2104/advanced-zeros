module.exports = function getZerosCount(number, base) {
 let count=0;
 let numbers = [67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2];
 let n = 0;
 for(i=0;i<numbers.length;i++){
 	if(base%numbers[i]==0){
 		n=numbers[i];
 		break;
 	}
 }

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