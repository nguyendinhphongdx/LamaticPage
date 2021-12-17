

const menu = [
  {
    id: 1,
    category: 'Starter',
    name: 'Onion Beef',
    price: '249.000đ',
    image: 'taster/Onion soup.png',
    quantity: 1
  },
  {
    id: 2,
    category: 'Starter',
    name: 'Food-Truck',
    price: '99.000đ',
    image: 'taster/Food-Truck.jpg',
    quantity: 1
  },
  {
    id: 3,
    category: 'Starter',
    name: 'Galette',
    price: '299.000đ',
    image: 'taster/Galette (Bánh vua Pháp) .png',
    quantity: 1
  },
  {
    id: 4,
    category: 'Starter',
    name: 'Onion soup 2',
    price: '99.000đ',
    image: 'taster/onion soup.jpeg',
    quantity: 1
  },
  {
    id: 5,
    category: 'Starter',
    name: 'Pain au chocolate ',
    price: '149.000đ',
    image: 'taster/Pain au chocolate.jpg ',
    quantity: 1
  },
  {
    id: 6,
    category: 'Starter',
    name: 'Bouillabaisse',
    price: '99.000đ',
    image: 'taster/Súp hải sản kiểu Pháp (Bouillabaisse).jpg ',
    quantity: 1
  },
   {
    id: 7,
    category: 'Starter',
    name: 'Truffle soup',
    price: '129.000đ',
    image: 'taster/súp nấm truffle.jpg',
    quantity: 1
  }, 
   {
    id: 8,
    category: 'Starter',
    name: 'Pea soup',
    price: '99.000đ',
    image: 'taster/Pea soup.png',
    quantity: 1
  },
   {
    id: 9,
    category: 'Starter',
    name: 'Pumpkin soup',
    price: '99.000đ',
    image: 'taster/Pain au chocolate.jpg',
    quantity: 1
  }

]
var myModal = null;
function onSubmit() {
  const element = document.getElementsByName('contact-form')[0];
  Swal.fire(
       'Câu hỏi đã được gửi!',
       'Chúng tôi sẽ hồi đáp sớm nhất có thể.',
       'success'
     )
  element.reset();
  return false;
}
function loadMenu() {
 
    const idMenu = document.getElementById('menu')
   let textContext = menu.map((item,index)=> `
    <div class="col-md-4 col-sm-6 col-12" style="margin-top:50px;">
       <div class="card">
         <img src="${item.image}" class="card-img-top" alt="...">
         <div class="card-body">
           <div class="row row-cols-md-2">
             <div class="col"><h6 class="card-title1">Starter<h6></div>
             <div class="col"><h6 class="card2" >Recommend</h6></div>
           </div>

           <div class="row row-cols-md-2">
             <div class="col"><h5>${item.name} </h5></div>
             <div class="col">
               <form class="wrapper">
                 <input type="radio" id="star${item.id}1" name="star${item.id}" />
                 <label for="star${item.id}1"></label>
                 <input type="radio" id="star${item.id}2" name="star${item.id}" />
                 <label for="star${item.id}2"></label>
                 <input type="radio" id="star${item.id}3" name="star${item.id}" checked/>
                 <label for="star${item.id}3"></label>
                 <input type="radio" id="star${item.id}4" name="star${item.id}" />
                 <label for="star${item.id}4"></label>
                 <input type="radio" id="star${item.id}5" name="star${item.id}" />
                 <label for="star${item.id}5"></label>
               </form>
             </div>
           </div>
           
           <div class="row">
             <div class="col"><div class="price"><h5>${item.price}</h5></div></div>
             <div class="col">
               <div class="svg">
                 <div style="cursor:pointer" onclick="showModal()">
                 <svg class="svg-icon" style="width: 1.75rem; height: 1.75rem;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                 <path d ="M336.016 800a80 80 0 1 0-0.048 160 80 80 0 0 0 0.048-160zM832 800c-44.224 0-80 35.808-80 80a80 80 0 1 0 160 0 80 80 0 0 0-80-80zM576 304v96h-96v80h96v96h80v-96h96v-80h-96v-96h-80zM360.128 144l10.736 79.84h542.048c-7.84 48-24.128 154.544-57.936 371.36-5.168 33.104-37.568 60.8-70.72 60.8H425.152c-33.296 0-66.288-27.92-70.592-60.016-51.84-385.712-56.032-417.76-56.16-418.656C287.552 104.992 221.744 48 148.576 48H16
                 v80h132.576c32.8 0 65.84 28.896 70.592 60.624 0 0 4.064 30.752 56.096 417.792 9.6 71.472 76.832 129.584 149.888 129.584h359.104c72.704 0 138.48-56.272 149.76-128.48C1004.8 153.6 997.776 192 1006.416 144H360.128z" fill="#ffffff" /></svg>
                 </div>
               </div>
             </div>
             <div class="col">
               <div class="form1" style="margin-right:5px;">
                 <form action="#">
                   <div class="number-input">
                     <button type="button" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ><i class="fa fa-caret-left fa-lg" style="color: #B3803F;" aria-hidden="true"></i></button>
                     <input class="quantity" min="0" name="quantity" value="1" type="number">
                     <button  type="button"  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"><i class="fa fa-caret-right fa-lg" style="color: #B3803F;" aria-hidden="true"></i></button>
                   </div>
                 </form>
               </div>
             </div>
             
           </div>

         </div>
       </div>
     </div>
  `).join('')
  idMenu.innerHTML = textContext 
}
function showModal(){
  myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })
  console.log("toggle modal");
  // myModal.toggle();
}
