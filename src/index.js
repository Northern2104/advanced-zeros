module.exports = function getZerosCount(number, base) {
 let count=0;
 let numbers = [293,283,281,277,271,269,263,257,251,241,239,233,229,227,223,211,199,197,193,191,181,179,173,167,163,157,151,149,139,137,131,127,113,109,107,103,101,97,89,83,79,73,71,67,61,59,53,47,43,41,37,31,29,23,19,17,13,11,7,5,3,2];
 let n = 0;
 for(i=0;i<numbers.length;i++){
 	if(base%numbers[i]==0){
 		n=numbers[i];
 		break;
 	}
 }

	for(i=n;i<=number;i+=n){
			let a = i;
			do{
				a=a/n;
				count+=1;
			} while(a%n==0);
	}
	return count;
}