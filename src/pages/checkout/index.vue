<template>
    <AppLayout :loading="false" :SpecialStyle="true">
        <div class="checkout-container">
            <div ref="checkoutPage">
                <!-- Header -->
                <header class="checkout-header text-center mb-5" ref="checkoutHeader">
                    <h1>Checkout</h1>
                    <p>Complete your purchase</p>
                </header>

                <!-- Unified Checkout Form -->
                <CheckoutForm :cartItems="cartItems" @checkout-complete="handleCheckoutComplete" />
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import AppLayout from '../../Layouts/AppLayout.vue';
import CheckoutForm from './components/CheckoutForm.vue';
import { useProductStore } from '../../store/products';
import { useRouter } from 'vue-router';

const router = useRouter();
const productStore = useProductStore();
const cartItems = computed(() => productStore.cartItems);
const checkoutPage = ref(null);
const checkoutHeader = ref(null);

const handleCheckoutComplete = async (checkoutData) => {
    // Animate success
    gsap.to(checkoutPage.value, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            // Clear cart and redirect
            productStore.clearCart();

            // Log checkout data (in real app, send to backend)
            console.log('Order placed:', checkoutData);

            router.push('/');
            // You can add a toast/notification here for order success
        }
    });
};

onMounted(() => {
    if (!cartItems.value || cartItems.value.length === 0) {
        router.push('/cart');
    }

    if (!checkoutPage.value) return;

    // Animate header
    gsap.fromTo(
        checkoutHeader.value,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
});
</script>

<style lang="scss" scoped>
.checkout-container {
    padding-top: 6.75rem;
    padding-bottom: 5.5rem;
}

.checkout-header {
    margin-bottom: 3rem;

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

@media (max-width: 768px) {
    .checkout-header h1 {
        font-size: 1.8rem;
    }
}
</style>
