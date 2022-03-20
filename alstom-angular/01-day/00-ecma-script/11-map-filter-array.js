var arrayA = [3,4,5,6,7,8 ];
//filter
var arrayB = arrayA.filter((item)=>(item !=8));

// JSON.stringify
console.log("arrayB"+JSON.stringify(arrayB));

// map
arrayA.map(function(item){
    console.log("item is "+item);
})

var arraySort = arrayA.sort((a,b)=>{
    if(a>b){
        return -1;
    }else{
       return 1; 
    }
});
