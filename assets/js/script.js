// const vitrina = document.getElementById('vitrina');

document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const vitrina = document.getElementById('vitrina');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;

        if (productName && productPrice && productImage) {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <div class="card__content">
                    <img src="${productImage}" alt="">
                    <h3>${productName}</h3>
                    <p>$${productPrice}</p>
                </div>
            `;

            vitrina.appendChild(card);

            productForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    document.getElementById('cancelButton').addEventListener('click', function() {
        productForm.reset();
    });
});
