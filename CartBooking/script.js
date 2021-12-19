function onLoad(){
    const carts = JSON.parse(localStorage.getItem("carts")|| `[]`);
    let total = 0;
    const htmlContent = carts.map(item => {
        total += item.price * item.quality;
        return ` <div class="row-food">
        <div class="name">${item.name} x${item.quality}</div>
        <div class="price">${Number((item.price * item.quality)*1000).toLocaleString()} vnd</div>
      </div>`
    });
    document.getElementById("body-food").innerHTML = htmlContent;
    document.getElementById("total").innerHTML = Number(total).toLocaleString()+",000 vnd";
}