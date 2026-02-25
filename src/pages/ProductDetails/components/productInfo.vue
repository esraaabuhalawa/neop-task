<template>
    <!---Product details-->
    <section class="product-page">
        <div class="container mt-5">
            <div class="row">
                <!-- Images Section -->
                <section class="col-12 col-lg-7 d-flex">
                    <div class="row margin-space flex-fill">
                        <!-- Thumbnails -->
                        <div class="col-md-2 mt-3 mt-md-0 d-flex flex-md-column gap-2 order-2 order-lg-1">
                            <div class="thumbnail" v-for="(item, index) in product?.images" :key="index"
                                :class="{ selected: item === selectedImage }">
                                <img @error="onImageError" :alt="'subimage ' + index" class="img-fluid" :src="item"
                                    @click="selectedImage = item" />
                            </div>
                        </div>

                        <!-- Main Image -->
                        <div class="col-md-10 order-1 order-lg-2 position-relative">
                            <div class="main-image d-flex justify-content-center align-items-center text-center">
                                <img :src="selectedImage || product?.image" @error="onImageError" :alt="product?.name"
                                    class="img-fluid " />
                                <span v-if="product?.originalPrice !== product?.price"
                                    class="badge sale-badge">Sale!</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Product Info -->
                <section class="col-12 col-lg-5 product-info product-details mt-4 mt-lg-0">
                    <div class="d-flex gap-3 align-items-center">
                        <div class="overflow-hidden">
                            <rating-component :rating="product?.rating"></rating-component>
                        </div>
                        <div class="reviews">({{ product?.reviews?.length }} Reviews)</div>
                    </div>
                    <h1 class="product-title">{{ product?.name }}</h1>

                    <div class="price">
                        <span class="current-price"> ${{ product?.originalPrice?.toFixed(2) }}</span>
                        <span class="original-price">${{ product?.price?.toFixed(2) }}</span>
                    </div>

                    <p class="description mb-4">{{ product?.description }}</p>

                    <div class="d-flex align-items-center gap-3 flex-wrap">
                        <div class="d-flex gap-3 justify-content-between align-items-center amount">
                            <div class="btn-main" @click="increase">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="flex-fill">
                                <input @input="onInputChange" type="number" v-model.number="quantity" min="1"
                                    class="text-center" />
                            </div>
                            <div class="btn-main" @click="decrease">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </div>

                        <button class="btn btn-main flex-fill" @click="addToCart(product, quantity)">{{ $t('addToCart')
                        }}</button>
                    </div>
                </section>
            </div>
        </div>
    </section>
    <!--End Of Product Details-->
</template>
<script setup>
import ratingComponent from '../../../shared/components/RatingComponent.vue'
import gsap from 'gsap';
import { ref, computed, inject, onMounted, } from "vue";
import { useProductStore } from '../../../store/products';
import { toast } from "vue3-toastify";

const injectedProduct = inject('ProductData');

// optional safety wrapper
const product = computed(() => injectedProduct?.value);

const quantity = ref(1);
// Increase quantity
const increase = () => {
    quantity.value++;
};

// Decrease quantity (minimum 1)
const decrease = () => {
    if (quantity.value > 1) quantity.value--;
};

// Prevent input below 1
const onInputChange = () => {
    if (quantity.value < 1) quantity.value = 1;
};

const fallbackImage = '/images/placeholder-product.jpeg'

const onImageError = (event) => {
    event.target.onerror = null
    event.target.src = fallbackImage
}
const productStore = useProductStore();


const addToCart = (product, quantity) => {
    // Success: show toast
    toast.success(`Product added to your cart`, {
        theme: "colored",
    });
    productStore.addToCart(product, quantity)
}

const selectedImage = ref(null);

onMounted(() => {
    if (product.value?.images?.length) {
        selectedImage.value = product.value.images[0];
    } else {
        selectedImage.value = product.value?.image || null;
    }

    // GSAP animations for product details
    const mainImage = document.querySelector('.main-image');
    const productInfo = document.querySelector('.product-details');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const ratingSection = document.querySelector('.d-flex.gap-3.align-items-center');

    const tl = gsap.timeline();

    if (mainImage) {
        tl.fromTo(
            mainImage,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
            0
        );
    }

    if (ratingSection) {
        tl.fromTo(
            ratingSection,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.1
        );
    }

    const productTitle = document.querySelector('.product-title');
    if (productTitle) {
        tl.fromTo(
            productTitle,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.25
        );
    }

    const priceSection = document.querySelector('.price');
    if (priceSection) {
        tl.fromTo(
            priceSection,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.35
        );
    }

    const descriptionText = document.querySelector('.product-details .description');
    if (descriptionText) {
        tl.fromTo(
            descriptionText,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.45
        );
    }

    const amountSection = document.querySelector('.amount');
    const cartButton = document.querySelector('.btn-main.flex-fill');
    if (amountSection || cartButton) {
        tl.fromTo(
            [amountSection, cartButton],
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.55
        );
    }

    // Thumbnail hover animations
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('mouseenter', () => {
            gsap.to(thumbnail, {
                scale: 1.08,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        thumbnail.addEventListener('mouseleave', () => {
            gsap.to(thumbnail, {
                scale: 1,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Main image hover zoom effect
    if (mainImage) {
        mainImage.addEventListener('mouseenter', () => {
            gsap.to(mainImage.querySelector('img'), {
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        mainImage.addEventListener('mouseleave', () => {
            gsap.to(mainImage.querySelector('img'), {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    }
});

</script>
<style lang="scss" scoped>
.thumbnail {
    margin-bottom: 10px;
    border-radius: 15px;
    background: var(--bg-tertiary);
    padding: 6px;
    height: 90px;
    transition: all 0.3s ease;
    cursor: pointer;

    img {
        border-radius: 15px;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &.selected {
        border: 2px solid var(--color-primary);
        box-shadow: 0 0 8px var(--color-primary);
    }

    &:hover {
        transform: scale(1.05);
    }
}

.flex-fill {
    flex: 1
}

.main-image {
    border-radius: 20px;
    padding: 22px 18px;
    background: var(--bg-tertiary);
    height: 70vh;
    width: 100%;
    overflow: hidden;
    transition: background-color 0.3s ease;

    span {
        position: absolute;
        left: 50px;
        top: 30px;
        background: var(--color-primary);
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        padding: 6px 12px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

.product-details .reviews {
    color: var(--text-secondary);
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
    color: var(--text-color);
    transition: color 0.3s ease;
}

@media (min-width: 1024px) {
    .product-details .product-title {
        font-size: 3rem;
    }
}

@media (min-width: 992px) {
    .margin-space {
        &:lang(en) {
            margin-right: 2.5rem;
        }

        &:lang(ar) {
            margin-left: 2.5rem;
        }
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
    color: var(--color-primary-1);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.product-details .original-price {
    font-size: 1.25rem;
    color: var(--text-secondary);
    text-decoration: line-through;
}

.product-details .description {
    color: var(--text-color);
    font-size: 1.15rem;
    line-height: 1.75rem;
    font-weight: 500;
    letter-spacing: .5px;
    transition: color 0.3s ease;

    &:lang(ar) {
        font-family: var(--font-rtl);
    }

    &:lang(en) {
        font-family: var(--font-ltr);
    }

    border-radius: 5px;
}

.amount {
    height: 42px;

    i {
        font-size: .9rem;
        color: #fff;
    }

    input {
        border: none;
        background-color: var(--input-bg);
        color: var(--text-color);
        font-weight: 500;
        transition: all 0.3s ease;

        &:focus {
            border: none;
            background-color: var(--input-bg);
            color: var(--text-color);
        }
    }

    border: 1px solid var(--border-color);
    border-radius: 5px;
    color: var(--text-color);
    overflow: hidden;

    .plus {
        font-size: 1rem;
        padding: 0 20px;
        height: inherit;
    }
}
</style>