const obb = require('./a_new.json');
let obj = obb.data 

// let obj={
//   game_arena_player:[
//     {
//       game_award: [
//         {
//           award_id: 21248,
//         },
//         {
//           award_id: 21249,
//         }
//       ],
//     }
//   ],
//   game_arena_box :[
//     {
//       "id": 12506491,
//       "box": {
//         "id": 349,
//         contains:[
//           {
//             "skin_id": 21248,
//             "skins": {
//               "id": 21248,
//               "bean": "1.76",
//             }
//           },
//           {
//             "skin_id": 312312,
//             "skins": {
//               "id": 21218,
//               "bean": "1.3",
//             }
//           },

//         ]
//       }
//     },
//     {
//       "id": 12506497,
//       "box": {
//         "id": 350,
//         contains: [
//           {
//             "skin_id": 61249,
//             "skins": {
//               "id": 61249,
//               "bean": "1.999",
//             }
//           },
//           {
//             "skin_id": 21249,
//             "skins": {
//               "id": 21249,
//               "bean": "1.999",
//             }
//           }
//         ]
//       }
//     },
//   ] 
// }

    // obj.game_award.forEach((e, i)=>{
//   // console.log("e",e);
//   obj.game_arena_box.forEach((e2,i2)=>{
//     console.log(e2);
//   })
// })



// const matchingObjects = [];
// for (const player of obj.game_arena_player) {
//   for (const award of player.game_award) {
//     const awardId = award.award_id;

//     for (const box of obj.game_arena_box) {
//       for (const item of box.box.contains) {
//         if (item.skin_id === awardId) {
//           matchingObjects.push(item);
//         }
//       }
//     }
//   }
// }
// console.log(matchingObjects);


let arr =[]
obj.game_arena_player.forEach((e1,i1)=>{
  e1.game_award.forEach((e2, i2)=>{
    obj.game_arena_box.forEach((q1,qi1)=>{
      let find = q1.box.contains.find(f => f.skin_id === e2.award_id)
      console.log(find);
      if(!find) return
      arr.push(`用户${i1+1},${find.skins.bean}`)
    })
  })
})


console.log(arr);