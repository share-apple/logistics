//给我关键字给数组
//搜索
document.querySelector ('.input').oninput =function (e) {
    create (search (e.target.value));
};
 let search= function(k){
      return  database .filter (v=>{
          // let total=v.name+v.city+v.county+v.address+(v.phone && v.phone.join(' '));
          // return total .indexOf (k)!=-1;
          return (v.name && v.name.indexOf (k)!==-1)
                 ||(v.county && v.county.indexOf (k)!==-1)
               || (v.address && v.address.indexOf (k)!==-1)
          ||(v.phone && v.phone.join(' ').indexOf (k)!==-1);
        })
    };
//创建
let  create = database=>{
        document.querySelector ('.main ul').innerHTML =' ';
        database.forEach (v=>{
            let content=
            ` 
                <a href="tel:${v.phone?v.phone[0]:'114'}"> </a>
                <img src="img/phone.png " alt="">
                <p class="top">${v.county}</p>
                <p class="center">${v.address}</p>
                `
        magic ('.main ul' ,'li', null , content, )
})
};
create(database );