//creating array and using length method
const a1 = ['blue' , 'green' , 'violet'];
console.log(a1.length);
//output is 3

const a2 = ['red' , 'brown' , 'black'];

//using the concat method
const a3 = a1.concat(a2);
console.log(a3);
//output is  - (6) ['blue', 'green', 'violet', 'red', 'brown', 'black']


//using the join method
const a4 = a3.join(',');
console.log(a4);
//output is blue,green,violet,red,brown,black


//using the pop method
const a5 = a3.pop(',');
console.log(a3);
console.log(a5);
//output is (5) ['blue', 'green', 'violet', 'red', 'brown']
//				black


//using the push method
a3.push('gold','silver');
console.log(a3);
//output is (7) ['blue', 'green', 'violet', 'red', 'brown', 'gold', 'silver']


//using the unshift method
a3.unshift(3);
console.log(a3);
//output is (8) [3, 'blue', 'green', 'violet', 'red', 'brown', 'gold', 'silver']


//using the shift method
a3.shift();
console.log(a3);
//output is (7) ['blue', 'green', 'violet', 'red', 'brown', 'gold', 'silver']


//using the slice method
const a6 = a3.slice(3,5);
console.log(a6);
console.log(a3)
//output is (2) ['red', 'brown']
//			(7) ['blue', 'green', 'violet', 'red', 'brown', 'gold', 'silver']

//using the splice method
const a7 = a3.splice(3,5);
console.log(a7);
console.log(a3);
//output is (4) ['red', 'brown', 'gold', 'silver']
//			(3) ['blue', 'green', 'violet']

//using the reverse method
a3.reverse();
console.log(a3);
//output is (3) ['violet', 'green', 'blue']


//using the sort method
a3.sort();
console.log(a3);
//output is (3) ['blue', 'green', 'violet']



//using the tostring method
console.log(a3.toString());
//output is blue,green,violet


//using the tolocaleString method
console.log(a3.toLocaleString());
//output is blue,green,violet
