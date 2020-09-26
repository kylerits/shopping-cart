<template>
    <div id='Cart'>
        <div class="cart-row">

            <div class="cart">
                <button 
                    class="cart-button"
                    @click="showCartList = !showCartList"
                >
                    <cart-icon />
                </button>
                <p class="count" v-if="productsCount > 0"><span>{{ productsCount }}</span></p>

                <div v-if="productsCount > 0 && showCartList" class="cart-list">
                    <cart-list :products="productsList"/>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import CartIcon from './icons/cart.vue'
import CartList from './CartList'
export default {
    data() {
        return {
            showCartList: false,
        }
    },
    components: {
        CartIcon,
        CartList
    },
    computed: {
        productsList() {
            return this.$store.getters.products
        },
        productsCount() {
            let count = 0
            let products = this.productsList
            products.forEach(p=> {
                count += p.quantity
            })
            return count
        }
    },
}
</script>

<style>
.cart-row {
    display: flex;
    justify-content: flex-end;
}

.cart {
    position: relative;
    width: 3rem;
    height: 3rem;
}

.cart-button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
}

.count {
    position: absolute;
    top: 0;
    right: 0;
    background: #3eaf7c;
    border-radius: 99999px;
    color: white;
    font-weight: bold;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.825rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    transform: translate(50%, -50%);
}

.cart-list {
    position: absolute;
    z-index: 100;
    top: 0;
    right: 100%;
    background:#ebf1ee;
    padding: 1rem;
    border-radius: 1rem;
    width: 300px;
    height: auto;
    max-height: 400px;
    overflow-y: scroll;
}

</style>