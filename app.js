// ---------------------------- Q#01 ------------------------------
// var mulArray=[];

// ---------------------------- Q#02------------------------------
// var mulArray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// console.log(mulArray);
// document.write(mulArray[0].join(" ")+"</br>");
// document.write(mulArray[1].join(" ")+"</br>");
// document.write(mulArray[2].join(" ")+"</br>");

// ---------------------------- Q#03------------------------------
// var counting;
// for(counting=1;counting<=10;counting++){
//     document.write(counting+"<br>");
// }

// ---------------------------- Q#04------------------------------

// var tableNo=+prompt("Enter Table No.");
// var tableLength=+prompt("Enter Tablel length ");

// for(var i=1;i<=tableLength;i++){
//         document.write(tableNo+" x "+i+" = "+tableNo*i+"</br>");
// }

// ---------------------------- Q#05------------------------------

// var fruitArray= ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i=0;i<=4;i++){
//     document.write(fruitArray[i]+"</br>")
// }

// ---------------------------- Q#06------------------------------

// var counting=[];
// for(i=1;i<=15;i++){
// counting.push(i);
// }
// document.write(counting);

// document.write("</br></br>")

// var counting1=[];
// for(i=10;i>=1;i--){
//     counting1.push(i);
// }
// document.write(counting1);

// document.write("</br></br>")

// var counting2=[];
// for(i=0;i<21;i++){
//     if(i%2===0)
//     counting2.push(i);
// }
// document.write(counting2);

// document.write("</br></br>")

// var counting3=[];
// for(i=1;i<21;i++){
//     if(i%2===1)
//     counting3.push(i);
// }
// document.write(counting3);
// document.write("</br></br>")

// var counting4=[];
// for(i=1;i<21;i++){
//     if(i%2===0)
//     counting4.push(i+"k");
// }
// document.write(counting4);


// ---------------------------- Q#07------------------------------

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItem=prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am ?");

// var match="no";
// for(i=0;i<=A.length;i++){
//     if(searchItem===A[i]){
//         alert(A[i]+" is Available in our Bakery.");
//         var match="yes";
//     }
// }
// if(match==="no"){
//     alert("we are sorry. "+searchItem+" is not available in our Bakery.")
// }


// ---------------------------- Q#08------------------------------

// var num = [24, 53, 78, 91, 12];

// document.write(num);

// var smallest=num[4]
// for(i=0;i<=num.length;i++){
//     if( num[i]<=smallest){
//             document.write("<br />"+" Smallest Element is: "+smallest);
//     }
// }

// ---------------------------- Q#09------------------------------

// var num = [24, 53, 78, 91, 12];

// document.write(num);

// var largest=num[3]
// for(i=0;i<=num.length;i++){
//     if( num[i]>=largest){
//             document.write("<br />"+" Largest Element is: "+largest);
//     }
// }

// ---------------------------- Q#10------------------------------

// var multiplesof_5;

// for(i=5;i<=100;i++){
//     if(i%5===0){
//         document.write(i+",");
//     }
// }

// ---------------------------- Q#11------------------------------

// var name=prompt("Enter any name to check if it a palindrome or not ?")
// // var array=[];
// // array.push(name);
// // console.log(name.split(""))
// var newer=name.split("")
// // console.log(newer)
// var j=newer.reverse()
// // console.log(j);
// var lasti=j.join("");
// // console.log(lasti)

// if(name===lasti){
//     alert(name+" is a palindrome");
// }
// else{
//     alert(name+" is not Palindrome")
// }