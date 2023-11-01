const obb = require('./a_new.json');
let obj = obb.data 


obj.game_arena_player.sort((a, b) => a.seat - b.seat);
obj.game_arena_player.forEach((e,i)=>{
     // 席位(用户)
  let count =0
  e.game_award.forEach((e2,i2)=>{
       // 回合(箱子)
    let findBoxObj = obj.game_arena_box.find(b => b.box_id == e2.box_id)
    let findPrice = findBoxObj.box.contains.find(p => p.skin_id == e2.award_id)
    if (findPrice){
      count += Number(findPrice.skins.bean)
      console.log(`席位${e.seat + 1}>>回合${i2 + 1}>>价值:${findPrice.skins.bean} ${i2 + 1 == e.game_award.length ? '\xa0\xa0>>>席位' + (e.seat + 1) + '总价值：' + count + '\n' : '' }`);
    }
  })
})

