//CRUD Operation
//C=>create  =>add new product
//R=>read    =>display product
//U=>update
//D=>delete
// with sreach


const prodectName=document.getElementById('prodectName');
const prodectprice=document.getElementById('prodectprice');
const prodectCategory=document.getElementById('prodectCategory');
const productDescriptive=document.getElementById('productDescriptive');
const prodectSearch=document.getElementById('prodectSearch');
const add=document.getElementById('add');
const edit=document.getElementById('edit')
// array lma b3rfha bra b3rfh mra w7da bs lkn lma b3rfha gwa el function btr ane a3rfha mra tanea
let allproducts=[];
let myIndex;
//any property set get
// prodectName.value='ahmed'


//localstorage 5MB- sessionstorage 5MB-cookies 5KB
// localStorage=> built in object
// kol broswer leh localStorage 5as beh

if(localStorage.getItem("allproducts") !=null){
allproducts=JSON.parse(localStorage.getItem("allproducts"));
displayAllProduct();
}



//function is single responsebility
function addNewProdect(){
    // object
    //array =>list 3shan a5zn feh product
    //lenght =>3dd el element

            // tafasel
    let product={
        name:prodectName.value,  //property
        price:Number(prodectprice.value),
        category:prodectCategory.value,
        descriptive:productDescriptive.value,  
    }
    allproducts.push(product);

    localStorage.setItem("allproducts",JSON.stringify(allproducts));
     //hana aro7 adef el allproducts

    clearProduct();
    displayAllProduct();
     }




function clearProduct(){
    prodectName.value='';
    prodectprice.value='';
    prodectCategory.value='';
    productDescriptive.value='';  
}
let cartonaa;
function displayAllProduct(){
    let cartonaa="";
    
    for(let i=0 ; i<allproducts.length; i++){
        // ES6=> template literal
          cartonaa +=`<tr>
             <td>${i+1}</td>
             <td>${allproducts[i].name}</td>
             <td>${allproducts[i].price}$</td>
             <td>${allproducts[i].category}</td>
            <td>${allproducts[i].descriptive}</td>
            <td>
                <button id="Update" onclick="updateProducts(${i})">update</button>
            </td>
             <td>
                 <button id="Delete" onclick="deleteProduct(${i})">delete</button>
             </td>
           </tr>`
    }
    document.getElementById("tbody").innerHTML=cartonaa;
    }


//function deh m7taga parameter
function deleteProduct(index){
    // array methoud => functiom bst5dmha 3la aeh array
    // allproducts.pop()//pop():function btms7 a5r element
    // allproducts.shift()//function bems7 awl element
    allproducts.splice(index,1);
    localStorage.setItem("allproducts",JSON.stringify(allproducts));
    displayAllProduct();
}



function updateProducts(index){

    myIndex=index;
    //1-retrive el data to input
    prodectName.value=allproducts[index].name;
    prodectprice.value=allproducts[index].price;
    prodectCategory.value=allproducts[index].category;
    productDescriptive.value=allproducts[index].descriptive
    //2-display:none to add button;
    add.classList.replace("d-block","d-none");
    edit.classList.replace("d-none","d-block");
}

//on click updateProduct()
function updateProduct(){

     //hana b over read 3le nfs el object
     //hana b 3ml update 3la property9
     allproducts[myIndex].name=prodectName.value;
     allproducts[myIndex].price=Number(prodectprice.value);
     allproducts[myIndex].category=prodectCategory.value;
     allproducts[myIndex].descriptive=productDescriptive.value;
     displayAllProduct();
     clearProduct();
     localStorage.setItem("allproducts",JSON.stringify(allproducts));
    add.classList.replace("d-none","d-block");
    edit.classList.replace("d-block","d-none");    
} 



// real time search
function sreach(term){

    // let term=prodectSearch.value;
    // console.log(term);

    let cartonaa=""; 
    for(let i=0;i<allproducts.length;i++){
        if(allproducts[i].name.toLocaleLowerCase().includes(term.toLocaleLowerCase())){
            //en deh el object rlle kan be include el data
         cartonaa +=`<tr>
         <td>${i+1}</td>
         <td>${allproducts[i].name}</td>
         <td>${allproducts[i].price}$</td>
         <td>${allproducts[i].category}</td>
        <td>${allproducts[i].descriptive}</td>
        <td>
            <button id="Update" onclick="updateProducts(${i})">update</button>
        </td>
         <td>
             <button id="Delete" onclick="deleteProduct(${i})">delete</button>
         </td>
       </tr>`
        }
        
    document.getElementById("tbody").innerHTML=cartonaa;
    }
}


