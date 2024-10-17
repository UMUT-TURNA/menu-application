document.addEventListener('DOMContentLoaded', function () {
    const cartItemsDropdown = document.getElementById('cart-items-dropdown');
    const totalPriceElement = document.getElementById('dropdown-total-price');
    const cartTotal = document.getElementById('cart-total');
    let totalPrice = 0;
    let totalItems = 0;

    // Tüm "Add to Cart" butonlarını seç
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Her buton için click event listener ekle
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function () {
            // Ürün adını ve fiyatını al
            const item = this.parentElement.querySelector('.card-title').textContent;
            const price = parseFloat(this.parentElement.querySelector('.price').textContent.replace('$', ''));

            // Ürünü sepete ekle
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${item} - $${price.toFixed(2)}`;
            cartItemsDropdown.appendChild(li);

            // Toplam fiyatı ve ürün sayısını güncelle
            totalPrice += price;
            totalItems += 1;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            cartTotal.textContent = totalItems;
        });
    });
});
