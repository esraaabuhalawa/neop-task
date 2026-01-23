<template>
    <!---Product details-->
    <section class="product-page">
        <div class="container mt-5">
            <div class="row">
                <!-- Images Section -->
                <section class="col-12 col-lg-7 ">
                    <div class="row me-md-5">
                        <!-- Thumbnails -->
                        <div class="col-md-2 mt-3 mt-md-0 d-flex flex-md-column gap-2 order-2 order-lg-1">
                            <div class="thumbnail" v-for="(item, index) in product.subImages" :key="index"
                                :class="{ selected: item === selectedImage }">
                                <img :alt="'subimage ' + index" class="img-fluid" :src="item"
                                    @click="selectedImage = item" />
                            </div>
                        </div>

                        <!-- Main Image -->
                        <div class="col-md-10 order-1 order-lg-2 position-relative">
                            <div class="main-image">
                                <img :src="selectedImage || product.mainImage" :alt="product.title"
                                    class="img-fluid " />
                                <span v-if="discountedPrice" class="badge sale-badge">Sale!</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Product Info -->
                <section class="col-12 col-lg-5 product-info product-details mt-4 mt-lg-0">
                    <div class="d-flex gap-3 align-items-center">
                        <div class="overflow-hidden">
                            <rating-component :rating="4.3"></rating-component>
                        </div>
                        <div class="reviews">(128 {{ $t('reviews.count') }})</div>
                    </div>
                    <h1 class="product-title">{{ $t('breadcrumb.product') }}</h1>

                    <div class="price">
                        <span class="current-price"> ${{ product.price.toFixed(2) }}</span>
                        <span class="original-price">${{ discountedPrice.toFixed(2) }}</span>
                    </div>

                    <p class="description mb-4">{{ product.description }}</p>

                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="d-flex gap-3 justify-content-between align-items-center amount">
                            <div class="plus" @click="increase">
                                +
                            </div>
                            <div class="flex-fill">
                                <input type="number" v-model.number="quantity" min="1" class="text-center" />
                            </div>
                            <div class="plus" @click="decrease">
                                -
                            </div>
                        </div>

                        <button class="btn cart" @click="addToCart">{{ $t('addToCart') }}</button>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <!--End Of Product Details-->
</template>
<script setup>
import ratingComponent from '../../../shared/components/RatingComponent.vue'
import { ref, computed, } from "vue";
// Reactive state
const selectedImage = ref(null);
const quantity = ref(1);

const product = ref({
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kn1mB7ONmjrW28Zbcbre8rVmHhFLFHZToXjjekUVuGIO4ch5Qrjxr1rXIiroX-xU0mm38OFMGlunB6iAXpN8nVwbH5cwM4goMGx8PZC40XiHCRXlhyo6Fge5U-_SF6H9Xwqht8dXkPXM6pqKLvm7UjQ46I5iwL1_x2W1CWu2rWqz8c-x0XYpTFQkk2FtfKyeOf7OCEsZImYMCO30xdSqoVyTUQyMH6EgZ1TjgqzQdHEE44C8cVBXN8zKZ_HxXkVFddEQTZjB90Y",
    subImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBfW_YDuR3p0EzOcaMfA6Mtj5aDqdV9Sa9RpMnHv8qmK-eRD7PgM6LTiHddpaKacsBdEI-TBnsaiKQTGO-5obo14nsGKZovrd6gJJh2efFPmxtuVeAykNy5S3r4gBp1Ji2UEGhBjKOUVgVRBn-Fwd05HATli5BQrY8EAr_dac3I5NC2jknRXV3hlwG7N7Hym7w2H750LyscyIh7yFivJ-TMqVfoA3igfwTqe6IbVZtxA1xSPshE8iBmG1rUlrkgw9ecpGj9MZzHVcc",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9288Mit8YAX72TipwrlRnq2n9ca_Ux7XXVVfcqUH8IbL2jSCTfZIona59sSBKCeVXcwole7pLwuo4u_WJ0WHHDyqCGWGXCyblqeSTM0o64xSehlcAdtFU7WkRdcM78nFyb36Tf3jgJzipX1ntI0bstbr5GzF0-u5eDngrxsNglWsRK_RiF0piX57lTTfeDc6coShz8R6ZkNAawdKguiPl4LpkZzmzRJL9yZcV_uKbKzjeLXTzr0FOs5LmiPEk4pSHaXzDedEqa8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-m2u7pH99u1ZfX296g6FOdxVxtgRwqnUHYxTemm1v8Xw2sdnUj24L2MEbhbbNouSuQo1SQtxgTWgv1xlVBUwmBWZ8Py57hz5btKZLXBhl1VXqv5LL-8u6vkLFOlPd2ZWpeZ8LqL7XFM7asPRTXyDYJcY1Bc1dpopdzHP_0GD7FKdkGgwzOVYblwushVAMkihB2IrBcrjrkD_1WKVDwR8Kzs5zp4w0ihyo_KCvQ33rhTzT7wFmWzvKemdqZMLIj1hFYkzAf0_gx9Q",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kn1mB7ONmjrW28Zbcbre8rVmHhFLFHZToXjjekUVuGIO4ch5Qrjxr1rXIiroX-xU0mm38OFMGlunB6iAXpN8nVwbH5cwM4goMGx8PZC40XiHCRXlhyo6Fge5U-_SF6H9Xwqht8dXkPXM6pqKLvm7UjQ46I5iwL1_x2W1CWu2rWqz8c-x0XYpTFQkk2FtfKyeOf7OCEsZImYMCO30xdSqoVyTUQyMH6EgZ1TjgqzQdHEE44C8cVBXN8zKZ_HxXkVFddEQTZjB90Y"
    ],
    title: "Brazilian Roasted Coffee",
    price: 35.00,
    discountPercent: 28.00,
    subDescription: "",
    description: "Experience the rich heritage of Brazilian highlands. A medium-dark roast featuring notes of dark chocolate, toasted hazelnut, and a hint of caramel sweetness. Perfectly balanced for both espresso and pour-over enthusiasts.",
});

// Discounted price
const discountedPrice = computed(() => {
    if (product.value.discountPercent && product.value.discountPercent > 0) {
        return product.value.price * (1 - product.value.discountPercent / 100);
    }
    return null;
});
const increase = () => quantity.value++;
const decrease = () => {
  if (quantity.value > 1) quantity.value--;
};
</script>
<style lang="scss" scoped>
.thumbnail {
    margin-bottom: 10px;
    border-radius: 15px;
    background: #b8babb3d;
    padding: 6px;

    img {
        border-radius: 15px;
    }

    &.selected {
        border: 1px solid #004876
    }
}
.flex-fill{
    flex:1
}
.main-image {
    border-radius: 20px;
    padding: 22px 18px;
    background: #b8babb3d;

    span {
        position: absolute;
        left: 40px;
        top: 30px;
        background: #004876;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
    }
}

.product-details .reviews {
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 500;
    margin-left: 0.5rem;
}

.product-details .product-title {
    font-size: 2.25rem;
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: 1rem;
    margin-top: 1.2rem;
    color: #041621
}

@media (min-width: 1024px) {
    .product-details .product-title {
        font-size: 3rem;
    }
}

.product-details .price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
        -ms-flex-align: baseline;
            align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.product-details .current-price {
    font-size: 2.2rem;
    font-weight: 700;
    color: #004876;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.product-details .original-price {
    font-size: 1.25rem;
    color: #94a3b8;
    text-decoration: line-through;
}

.product-details .description {
    color: #44667c;
    font-size: 1.15rem;
    line-height: 1.75rem;
    font-weight: 500;
    letter-spacing: .5px;

    &:lang(ar) {
        font-family: "Tajawal", sans-serif;
    }

    &:lang(en) {
        font-family: "Quicksand", sans-serif;
    }

    border-radius: 5px;
}

.cart,
.plus {
    color: #fff;
    background: #004876;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #6F4336;
    }
}

.cart {
    padding: 8px 20px;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    &:hover{
        -webkit-transform: translateY(2px);
            -ms-transform: translateY(2px);
                transform: translateY(2px);
    }
}

.amount {
    height: 42px;

    input {
        border: none;

        &:focus {
            border: none;
        }
    }

    border: 1px solid #c6ddeb;
    border-radius: 5px;
    color: #333;
    overflow: hidden;

    .plus {
        font-size: 1rem;
        padding: 0 20px;
        height: inherit;
    }
}
</style>