/*
把原始数据做变型
[   { 'city':'A','county':'A-1'},
     { 'city':'B','county':'B-1' },
     {  'city':'B','county':'B-2'},
]
A:{'A-1':true,},
B:{'B-1':true,'B-2':true}

 */
//提供一个函数 将原始数据变型 为了给页面提供数据

let f = arr=> {
    let o={ };
    arr.forEach (v=>{
       let city=v.city;
       let county=v.county;
        if( !o[city]){
            o[city]={ }
        }
        console.log(o[city]);
        if(!o[city][county]){
            o[city][county]=true;
        }
        console.log(o[city][county]);
    });
    return o;
};
// //调用一个函数 对数组做变型
let t=f(database );
//遍历得到的合适的数据 创建元素放页面上
for(let city in t){
    let countyArray = t[city];
    magic( '.main ul','li', 'title1', city ,);
    for(let county in countyArray){
        if(county !=="undefined"){
        magic( '.main ul','li', 'title2',county ,);
        }
    }
}