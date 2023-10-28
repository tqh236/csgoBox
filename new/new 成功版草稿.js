const obb = require('./a_new.json');
let obj = obb.data 

 
// let res={
//   "data": {
//     game_arena_player:[
//       {
//         "seat": 0,
//         "game_award": [
//           {
//             "award_id": 12111,
//           },
//           {
//             "award_id": 5550,
//           },
//           {
//             "award_id": 22891,
//           },
//         ]
//       }
//     ],
//     game_arena_box:[
//       {
//         id: 12512596,
//         box:{
//           contains:[
//             {
//               "skin_id": 12111,
//               "skins": {
//                 "id": 12111,
//                 "bean": "1.55",
//               }
//             },
//             {
//               "skin_id": 5550,
//               "skins": {
//                 "id": 5550,
//                 "bean": "4.69",
//               }
//             },
//             {
//               "skin_id": 22891,
//               "skins": {
//                 "id": 22891,
//                 "bean": "0.23",
//               }
//             },
//             {//
//               "skin_id": 1008611,
//               "skins": {
//                 "id": 1008611,
//                 "bean": "1008611",
//               }
//             },
//           ]
//         }
//       },
//       {
//         id: 1312343,
//         box:{
//           contains:[
//             {
//               "skin_id": 12111,
//               "skins": {
//                 "id": 12111,
//                 "bean": "1.55",
//               }
//             },
//             {
//               "skin_id": 5550,
//               "skins": {
//                 "id": 5550,
//                 "bean": "4.69",
//               }
//             },
//             {
//               "skin_id": 22891,
//               "skins": {
//                 "id": 22891,
//                 "bean": "0.23",
//               }
//             },
//             {//
//               "skin_id": 1008611,
//               "skins": {
//                 "id": 1008611,
//                 "bean": "1008611",
//               }
//             },
//           ]
//         }
//       },
//       {
//         id: 12512596,
//         box:{
//           contains:[
//             {
//               "skin_id": 12111,
//               "skins": {
//                 "id": 12111,
//                 "bean": "1.55",
//               }
//             },
//             {
//               "skin_id": 5550,
//               "skins": {
//                 "id": 5550,
//                 "bean": "4.69",
//               }
//             },
//             {
//               "skin_id": 22891,
//               "skins": {
//                 "id": 22891,
//                 "bean": "0.23",
//               }
//             },
//             {//
//               "skin_id": 1008611,
//               "skins": {
//                 "id": 1008611,
//                 "bean": "1008611",
//               }
//             },
//           ]
//         }
//       },
//     ]
//   }
// }






// let arr =[]
// obj.game_arena_player.forEach((e1,i1)=>{
//   e1.game_award.forEach((e2, i2)=>{
//     obj.game_arena_box.forEach((q1,qi1)=>{
//       let find = q1.box.contains.find(f => f.skin_id === e2.award_id)
//       console.log(find);
//       if(!find) return
//       arr.push(`用户${i1+1},${find.skins.bean}`)
//     })
//   })
// })



obj.game_arena_player.forEach((e,i)=>{
  //席位 i
  // console.log(`席位${i+1}`);
  e.game_award.forEach((e2,i2)=>{
    // 回合 (箱子)
    // console.log(e);
    let find = obj.game_arena_box[0].box.contains.find(i => i.skin_id == e2.award_id)
    if(find){
      console.log(`席位${e.seat + 1}>>回合${i2 + 1}>>价值:${find.skins.bean}`);
    }
  })
})


// console.log(arr);