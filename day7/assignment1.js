//creating string
const s ="A string to implement string methods";
console.log(s);
// output : A string

//using charAt 
var a = s.charAt(3); 
console.log(a);
// output : t
a = s.charAt(s.length - 2);
console.log(a);
// output : d


//using substring
console.log(s.substring(2,));
// output : string to implement string methods


//using slice
console.log(s.slice(-8));
// output : methods



//using indexof
console.log(s.indexOf("r"));
// output : 4
console.log(s.indexOf("t", 15))
// output : 20

//using lastindexof
console.log(s.lastIndexOf("t"))
// output : 31