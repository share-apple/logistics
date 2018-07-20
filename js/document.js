//document
// document.createElement ();
// let x=document.querySelector ();
// x.appendChild ();
// x.innerHTML();
//创建元素  给一个字符返回一个区域 html
// let y=document.createElement ('dt');
// y.classList.add('item  ');
// y.innerHTML='';
// //给他一个字符返回一个区域   css 选择器
// let x=document.querySelector ('.box');
// //给x区域追加一个(y)子元素
// x.appendChild (y);


// function magic(tag,className,content,target){
//     let x=document.createElement (tag);
//     x.classList.add(className);
//     x.innerHTML=content;
//     let y=document.querySelector (target);
//     y.appendChild(x);
//     return null;
// }
// for(let city in o){
//     magic('li', 'title1', city , '.main ul');
//      o[city].forEach(county =>
//      {magic('li', 'title2', county, '.main ul')
//      })
// }

//最小代价试错法
// 写f   你给我数字我给你时间
// function format(num) {
//     //视觉范围内出现输入与输出
//     //135  =>  2:15
//     let m=String(num%60);
//     let h=String(parseInt (num/60));
//     // 先给结果
//     // return 2：15;
//     // 等价替换
//     return h+':'+m;
//     // 假的变成真的
// }
//总的写法
// let  format=num => parseInt(num/60)+':'+num%60;
// format (135);
/*
进行数据简化
  let data=[
     {'city':'A','county':'A-1'},
     {'city':'B','county':'B-1'},
     {'city':'B','county':'B-2'},
  ];
 o是对象
  let o={
      'A':['A-1'],
      'B':['B-1','B-2'],
  };
 o['A']等价于o.A
 let x='A'等价于o[x];
  for(let key in o ){
      console.log(key);
 v代表形参，实参数组输入就全部遍历一遍输出
      o[key].forEach (v=>console.log(v) )
  };
将o等价变成一个函数
 let o=f(database);
写函数 你给我数组，我还你对象
function  f(arr) {
  let o={ };
 o['A']=['A-1'];等价于
  o['arr[0].city']=['arr[0].county'];等价于
  o[arr[0].city]=[];
  o[arr[0].city].push(arr[0].county);
 o['B']=['B-1'];等价于
 o['arr[1].city']=['arr[1].county'];等价于
 但是B里面有2个数组需要能在追加进去元素
  o[arr[1].city]=[];
  o[arr[1].city].push(arr[1].county);
  o[arr[2].city].push(arr[2].county);
  return  o;
  let k,v,o={ };
 k=arr[0].city;v=arr[0].county;
  if(!o[k]){o[k]=[]}
  o[k].push(v);
  k=arr[1].city;v=arr[1].county;
  if(!o[k]){o[k]=[]}
  o[k].push(v);
  k=arr[2].city;v=arr[2].county;
  if(!o[k]){o[k]=[]}
  o[k].push(v);
  return  o;
}


 let o=f(database);
function f(arr) {
    let k,v,o={ };
    arr.forEach (item=>{
        k=item.city;
        v=item.county;
        if( !o[k]){o[k]=[]
        }
        o[k].push(v);
    });
    return o;
}

//A:{'A-1':true,},
//B:{'B-1':true,'B-2':true}
// database =
//     let o=f(database);
// function f(arr) {
//     let k,v,o={ };
//     arr.forEach (item=>{
//         k=item.city;
//         v=item.county;
//         if( !o[k]){
//             o[k]={}
//         }
//         if(!o[k][v])
//             o[k][v]=true;
//     });
//     return o;
// }
// for(let city in o){
//     let countyArray=o[city];
//      countyArray.forEach (county =>{
//
//      })
// }