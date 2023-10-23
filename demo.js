const data = [
  {
    arr: [
      {
        num: 11
      },
      {
        num: 22
      }
    ]
  },
  {
    arr: [
      {
        num: 12
      },
      {
        num: 13
      }
    ]
  },
];

let sums = [];

data.forEach((item, index) => {
  let sum = 0;
  item.arr.forEach((innerItem) => {
    sum += innerItem.num;
  });
  sums.push(sum);
  console.log(`Sum ${index + 1}:`, sum);
});

const count = sums.reduce((total, num) => total + num, 0) ;
const average = sums.reduce((total, num) => total + num, 0) / sums.length;

console.log("count", count);
console.log("Average of Sums:", average);

 