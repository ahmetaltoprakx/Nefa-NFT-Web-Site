//Değişkenler
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
//Sepetin Açma&Kapama Kodları
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})
//Fotorafların Girildiği Bölüm 
let products =[
    {
        id: 1,
        name:'KEDİ NYAN',
        image:'nft1.jpg',
        price:1500000
    },
    {
        id: 2,
        name:'Bitcoin Man',
        image:'nft9.jpg',
        price:5000000
    },
    {
        id: 3,
        name:'Squint Woman',
        image:'nft3.jpg',
        price:8000000
    },
    {
        id: 4,
        name:'Happy Cat',
        image:'nft4.jpg',
        price:1000000
    },
    {
        id: 5,
        name:'Unhappy Monkey',
        image:'nft5.jpg',
        price:18000000
    },
    {
        id: 6,
        name:'King Monkey',
        image:'nft6.jpg',
        price:2780340000
    },
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Sepete Ekle</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
//Sepete Ekleme Bölümü
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//Fiyatların Toplama Yapıldıgı Bölüm
function reloadCard(){
    listCard.innerHTML='';
    let count =0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        //Sepette Arttırıp Azaltma  tasarımı Bölüü
        if(value !=null){
            let newDiv =document.createElement('li');
            newDiv.innerHTML = `
            <div> <img src="img/${value.image}"/></div>
            <div> ${value.name} </div>
            <div> ${value.price.toLocaleString()}</div>

            <div>
              <button onclick="changeQuantity(${key} , ${value.quantity -1})">-</button>
              <div class="count">${value.quantity}</div>
              <button onclick="changeQuantity(${key} , ${value.quantity +1})">+</button>
            </div>

            `;
            listCard.appendChild(newDiv); 
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
// Ürün Arttırıp Azalma
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price =quantity * products[key].price;
    }
    reloadCard();
}
//total
function toplam() {
    alert("Satın Alma Başarılı");
  }
//Contact Form E-mail Gönderme Kodu
