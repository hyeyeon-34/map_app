let [name = 'guest', surname = 'anonymous'] = ['julius', 'abc'];
console.log(name); // julius
console.log(surname); // anonoymous ///////// abc

let options = {
  title: 'menu',
  width: 100,
  height: 200,
};
let { title, width, height } = options;
console.log(title); // menu
console.log(width); //100
console.log(height); //200

// const arr = [1, 2, 3, 4, 5];
// const [one, , three, , five] = arr;
// console.log(one, three, five);
// 1,3,5

// const arr = [1, 2, 3, 4, 5];
// const [one, two, ...other] = arr;
// console.log(one, two, other);
// 1, 2, {3,4,5}

// const arr = [1, 2, 3, 4, 5];

// let months = ['jan', 'march', 'april', 'june'];
// months.splice(1, 0, 'feb');
// months.splice(4, 1, 'may');
// months.unshift('0');
// console.log(months);

const sampleObj = {
  a: 1,
  b: 'a',
  c: 'marshall',
  d: () => {
    return 'hello';
  },
};

sampleObj.f = 'new';

console.log(sampleObj);

p;
