
const myFamily = {
  jinx: 14,
  philip: 18,
  leona: 22,
};
function afterNYears(obj, n) {
  for (let key in obj) {
    console.log(key, obj[key] + n);
  }
}
afterNYears(myFamily, 1);

function freeShipping(obj) {
  let sum = 0;
  for (let key in obj) {
    sum = obj[key] + sum;
    if (sum > 50) {
      console.log(true);
    } else console.log(false);
  }
}
const order1 = { Shampoo: 5.99, "Rubber Ducks": 15.99 };
freeShipping(order1);

const order2 = { "Flatscreen TV": 399.99 };
freeShipping(order2);

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};
function nameScore(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    let charName = name[i].toUpperCase();
    let score = scores[charName];
    sum = score + sum;
  }
  if (sum <= 60) {
    console.log("NOT TOO GOOD");
  } else if (sum >= 61 && sum <= 300) {
    console.log("PRETTY GOOD");
  } else if (sum >= 301 && sum <= 599) {
    console.log("VERY GOOD");
  } else if (sum >= 600) {
    console.log("THE BEST");
  }
}
nameScore("MUBASHIR"); 
nameScore("YOU"); 
nameScore("MATT"); 
nameScore("PUBG"); 


const number = { a: 1, b: 2, c: 3 };
const newobj = {}
function invert(obj) {
  for (let key in obj) {
      newobj[obj[key]] = key    
    }
    return newobj;
}
console.log(invert(number));

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
        if (name in GUEST_LIST) {
            console.log("Hi! I'm" +[name]+ " and I'm from" +GUEST_LIST[name])
        } else console.log("Hi! I'm a guest.");    
}
greeting("Randy") 
greeting("Sam") 
greeting("Monti") 

 oldest=({
	Emma: 71,
	Jack: 45,
	Amy: 15,
	Ben: 29
 })
function oldestAge(obj) {
    let max = obj.Ben;
    for (let key in obj) {
        if (obj[key]>max) {
            max = obj[key]
        }

    }
    return max;
}
console.log(oldestAge(oldest));


