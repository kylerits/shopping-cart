<template>
    <div>
        <div 
            v-for="(product, index) in productsList"
            :key="`product-${index}`"
            class="product-item"
        >
            <div class="flex">

                <div class="product-info">
                    <p class="product-title">{{ product.productName }} <span class="quantity">x {{ product.quantity }}</span></p>
                    <p class="product-price">${{ product.price }}</p>
                </div>
                <div class="product-actions">
                    <button 
                        name="remove product" 
                        class="remove-item"
                        @click="removeProduct(product)"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
        <div class="product-item total-wrap">
            <div class="flex">
                <div class="total-title">
                    <p>Total:</p>
                </div>
                <div class="total-number">
                    <p>${{ totalPrice }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        productsList() {
            return this.$store.getters.products
        },
        totalPrice() {
            let total = 0
            let products = this.productsList
            products.forEach((p) => {
                let productPrice = p.price
                let productQuantity = p.quantity
                let price = productPrice * productQuantity
                total += price
            })
            return total
        }
    },
    methods: {
        removeProduct(p) {
            this.$store.dispatch('removeProduct', p)
        }
    },
}
</script>

<style>
.product-item {
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
}

.product-item .flex {
    align-items: center;
}

.product-item:nth-child(odd) {
    background: rgba(255, 255, 255, 0.7);
}

.product-item.total-wrap {
    margin-top: 1rem;
    background:#e4fdf2;
}

.product-item.total-wrap .flex {
    justify-content: space-between;

}

.total-title {
    font-weight: bold;
}

.total-number {
    font-weight: bold;
    color: #3eaf7c;
}

.product-title {
    margin: 0;
}

.product-price {
    margin: 0;
    font-size: 0.6rem;
    color: #3eaf7c;
}

</style>