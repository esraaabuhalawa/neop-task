<template>
    <AppLayout :loading="false" :SpecialStyle="true">
        <div class="cart-container">
            <div class="container" ref="cartPage">
                <!-- Header -->
                <header class="cart-header text-center mb-5" ref="cartHeader">
                    <h1>{{ $t('cart.title') || 'Shopping Cart' }}</h1>
                    <p>{{ cartItems.length }} {{ cartItems.length === 1 ? $t('cart.itemSingular') : $t('cart.itemPlural') }} {{ $t('cart.itemsInCart') }}</p>
                </header>

                <div v-if="cartItems.length === 0" class="empty-cart text-center py-5" ref="emptyCart">
                    <svg class="empty-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2>{{ $t('cart.emptyTitle') }}</h2>
                    <p>{{ $t('cart.emptyDescription') }}</p>
                    <router-link to="/" class="btn btn-main mt-3">{{ $t('cart.continueShopping') }}</router-link>
                </div>

                <div v-else class="row g-4">
                    <!-- Cart Items -->
                    <div class="col-lg-8">
                        <div class="cart-items-wrapper" ref="cartItemsWrapper">
                            <CartItem v-for="(item, index) in cartItems" :key="item.product.id" :item="item"
                                @update-quantity="updateQuantity" @remove-item="removeItem" :index="index" />
                        </div>
                    </div>

                    <!-- Order Summary -->
                    <div class="col-lg-4">
                        <OrderSummary :cartItems="cartItems" @checkout="goToCheckout" />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppLayout from '../../Layouts/AppLayout.vue';
import CartItem from './components/CartItem.vue';
import OrderSummary from './components/OrderSummary.vue';
import { useProductStore } from '../../store/products';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();
const { t } = useI18n();
const productStore = useProductStore();
const cartItems = computed(() => productStore.cartItems);
const cartPage = ref(null);
const cartHeader = ref(null);

const updateQuantity = (productId, quantity) => {
    productStore.updateCartQuantity(productId, quantity);
};

const removeItem = (productId) => {
    productStore.removeFromCart(productId);
};

const goToCheckout = () => {
    router.push('/checkout');
};

onMounted(() => {
    if (!cartPage.value) return;

    // Animate header
    gsap.fromTo(
        cartHeader.value,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate cart items with stagger
    const itemElements = document.querySelectorAll('.cart-item');
    gsap.fromTo(
        itemElements,
        { opacity: 0, x: -30 },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        }
    );
});
</script>

<style lang="scss" scoped>
.cart-container {
    padding-top: 6.75rem;
    padding-bottom: 5.5rem;
}

.cart-header {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-secondary);
        margin-bottom: 0.5rem;

        &:lang(en) {
            font-family: var(--font-ltr);
        }

        &:lang(ar) {
            font-family: var(--font-rtl);
        }
    }

    p {
        color: var(--text-secondary);
        font-size: 1.1rem;
    }
}

.empty-cart {
    padding: 60px 20px;

    .empty-svg {
        width: 120px;
        height: 120px;
        color: var(--color-secondary);
        opacity: 0.3;
        margin-bottom: 2rem;
    }

    h2 {
        color: var(--color-secondary);
        margin-bottom: 1rem;
    }

    p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
}

.cart-items-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .cart-header h1 {
        font-size: 1.8rem;
    }
}
</style>