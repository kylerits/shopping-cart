<template>
    <div id="Products-List">
        <div 
            :id="product.itemid"
            class="product flex" 
            v-for="(product, index) in products" 
            :key="`product-${index}`"
        >
            <div class="product-thumbnail-wrap" v-if="product.image">
                <img :src="product.image" :alt="product.productName" class="product-thumbnail">
            </div>

            <div class="product-info">
                <h2 class="product-title"> <span class="price">${{product.price}}</span> {{ product.productName }}</h2>
                <p class="details">{{ product.manufacturer }}</p>
                <p class="description">{{ product.description }}</p>
                <div class="callouts">
                    <button 
                        name="Add to cart" 
                        class="callout-item add-to-cart"
                        @click="addProduct(product)"
                    >Add to Cart</button>
                    <a :href="product.url" class="callout-item product-link" target="_blank">View in Store</a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
// Import JSON
import products from './data/items.json'
export default {
    data() {
        return {
            products: products
        }
    },
    methods: {
        addProduct(p) {
            this.$store.dispatch('getProduct', p)
            this.$store.dispatch('addProduct')
        }
    },
}
</script>

<style>
.product {
    margin-bottom: 4rem;
}

.product-title {
    margin: 0;
}

.price {
    font-weight: bold;
    color:#368f67;
}

.details {
    font-size: 0.75rem;
    color:#838d88;
    font-weight: 100;
    letter-spacing: 0.5px;
    margin: 0 0 1.5rem 0;
}

.product-thumbnail-wrap {
    flex-shrink: 0;
    margin-right: 1rem;
    width: 100px;
    height: 100px;
    padding: 0.8rem;
    border: solid 1px #3eaf7c;
    border-radius: 1rem;
}

.product-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
}

.flex {
    display: flex;
}

.product-info {
    position: relative;
    width: 100%;
}

.callouts {
    display: flex;
    flex-wrap: wrap;
}

.callout-item {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0.5rem; 
}

.add-to-cart {
    padding: 0.3rem 1rem;
    border-radius: 0.15rem;
    background: #3eaf7c;
    border: solid 1px #3eaf7c;
    outline: none;
    color: white;
    cursor: pointer;
    transition: all 200ms;
}
.add-to-cart:hover {
    background: #368f67;
}

.product-link {
    padding: 0.3rem 1rem;
    border-radius: 0.15rem;
    background: white;
    border: solid 1px #3eaf7c;
    outline: none;
    cursor: pointer;
    transition: all 200ms;
    text-decoration: none;
    color:#3eaf7c;
}

.product-link:hover {
    background: #cdd8d3;
}

</style>