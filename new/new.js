const obb = require('./a_new.json');
let obj = obb.data 


obj.game_arena_player.sort((a, b) => a.seat - b.seat);
obj.game_arena_player.forEach((e,i)=>{
  //席位 i
  // console.log(`席位${i+1}`);
  e.game_award.forEach((e2,i2)=>{
    // 回合 (箱子)
    // console.log(e);
    let conut = 0
     obj.game_arena_box.forEach((b,bi)=>{
       let find = b.box.contains.find(i => i.skin_id == e2.award_id)
       if(find){
         conut += Number(find.skins.bean)
         console.log(`席位${e.seat + 1}>>回合${i2 + 1}>>价值:${find.skins.bean} ${i2 + 1 == e.game_award.length ? '\xa0\xa0>>>席位' + (e.seat + 1) + '总价值：' + conut +'\n' :'' }`);
       }
    })
  })
})

