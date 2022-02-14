
function sumAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];  

    }

    let average = sum / arr.length;
    console.log(average);
}




function findMax(arr) {
    let max = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
            max = arr[i];
            
        }  
    }
    console.log(max);
    
}



function fibonacci(n) {
      if (n < 0) {
            return -1;
        } else if (n == 0 || n == 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
    for (let i = 0; i < 8; i++) {
        console.log(fibonacci(i));
        
}



    
function removeFalsy(arr) {
    let arr1 = arr;
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
        
    }
    
    
}


function capitalize(str) {
//   let newstr = str.toUpperCase();
//   console.log(newstr);
    let newStr = str.toLowerCase().split(' ');
   for (let i = 0; i < newStr.length; i++) {
     newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
   }
   return newStr.join(" "); 
}


console.log(capitalize("pham huy hung"));
removeFalsy([8, 6, 8, 6]);
sumAvg([1, 2, 3]);
findMax([2, 4, 6, 8, 3]);
