
const old = require('./a1_noe.json');
const myArray = require('./a2.json');


//   房间原始的数据没按照用户顺序来谭哥  只有 控制台 的数组是按照顺序排好的 

let countList1=[]
old.data.game_arena_player.forEach((e,i)=>{
  let conut1 = 0
  e.game_award.forEach((e2,i2)=>{
    conut1 += Number(e2.award_bean)
    // countList1.push(conut1);
    if (e2.award_bean, i2 + 1 == e.game_award.length) {
      countList1.push(conut1);
    }
    console.log(`房间原始${e.seat + 1}`, `回合${i2 + 1}`, e2.award_bean, i2 + 1 == e.game_award.length ? `\xa0\xa0>>>席位${e.seat + 1}总价值${conut1}\n` : '');
  })
})
console.log(`房间总席位`); 
console.log(`房间门票${old.data.total_bean}币`);
const avg1 = countList1.reduce((total, num) => total + num, 0) / countList1.length;
console.log('平均值', avg1);
// 以下为猜测 没时间测试太多
// console.log(avg1 * 2 < old.data.total_bean, '金额超过20 如果true 大几率率买 欧皇 别买非酋');
console.log(avg1 * 2 < (old.data.total_bean*0.66), '金额超过20 如果true 大几率率买 欧皇 别买非酋');
// console.log(avg1 * 2 < old.data.total_bean,   );
// console.log(   `平均值<门票   ?非酋 ?欧皇`);
// console.log(`平均值>门票   ?非酋 ?欧皇`);

console.log("-------------------------分割线-----------------------");

let countList2 = []
myArray.forEach((e,i)=>{
  let conut2=0
  e?.game_award.forEach((e2, i2)=>{
    conut2 += Number(e2.award_bean)
    console.log(`席位${i + 1}`, `回合${i2 + 1}`, e2.award_bean, i2 + 1 == e.game_award.length ? `\xa0\xa0>>>席位${i + 1}总价值${conut2}\n`:'' );
    if (e2.award_bean, i2 + 1 == e.game_award.length){
      // console.log("")
      countList2.push(conut2);
    }
  })
})
// console.log(`房间门票${old.data.total_bean}币`);
const avg2 = countList2.reduce((total, num) => total + num, 0) / countList2.length;
console.log('平均值', avg2   ,
// `非酋   ,欧皇`
);
console.log(avg2 * 2 < old.data.total_bean, '金额较大 如果true 大几率率买 欧皇 别买非酋');
