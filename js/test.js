

let title = document.getElementById("title");
let cost = document.querySelectorAll("#cost input");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let tCost = document.getElementById("tCost");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let department = document.getElementById("department");
let btncreat = document.getElementById("btncreat");


let alldata;
if(localStorage.product != null){
    alldata = JSON.parse(localStorage.product)
}else{
    alldata = [];
}




// get total start

let gettottal = ()=>{

    let price = cost[0].value,
        taxes = cost[1].value,
        tCost = cost[2].value,
        discount = cost[3].value;
        total = cost[4].value

    let gettotalvalue = (+price + +taxes + +tCost )-discount

    cost[4].value = Math.ceil(gettotalvalue)
}

for ( let i = 0 ; i < cost.length ;i++){
    cost[i].addEventListener('keyup' ,gettottal)
}

// get total end


// creat object start 

let creatobject = ()=>{
    let newdata = {
        title : title.value,
        price : cost[0].value,
        taxes : cost[1].value,
        tCost : cost[2].value,
        discount : cost[3].value,
        total : cost[4].value,
        department : department.value

    }

    alldata.push(newdata);
    localStorage.setItem("product" , JSON.stringify(alldata));

    showdata();
    cleardata();

}


// showdata
let showdata = ()=>{

    let table = '';

    for( let i = 0 ; i <alldata.length ;i++){

        table +=`
        <tr>
            <td>${i}</td>
            <td>${alldata[i].title}</td>
            <td>${alldata[i].price}</td>
            <td>${alldata[i].taxes}</td>
            <td>${alldata[i].tCost}</td>
            <td>${alldata[i].discount}</td>
            <td>${alldata[i].total}</td>
            <td>${alldata[i].department}</td>
        </tr>`
        
    }

    tbody.innerHTML = table;

}

showdata();
btncreat.addEventListener('click' , creatobject);



// clear data

let cleardata = ()=>{
    title.value = ''
    cost[0].value = ''
    cost[1].value = ''
    cost[2].value = ''
    cost[3].value = ''
    cost[4].value = ''
    count.value= ''
    department.value = ''
    
}


document.addEventListener("click" , function(e){
    console.log(e.target.remove())
})























