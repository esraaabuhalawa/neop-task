<template>
    <AppLayout :loading="false" :SpecialStyle="true">
        <div class="checkout-container">
            <div class="container" ref="checkoutPage">
                <!-- Header -->
                <header class="checkout-header text-center mb-5" ref="checkoutHeader">
                    <h1>Checkout</h1>
                    <p>Complete your purchase</p>
                </header>

                <div class="row g-4">
                    <!-- Checkout Form -->
                    <div class="col-lg-8">
                        <!-- Shipping Info -->
                        <ShippingInfo v-model:formData="formData" :errors="errors" />

                        <!-- Payment Info -->
                        <PaymentInfo v-model:formData="formData" :errors="errors" />

                        <!-- Order Notes -->
                        <div class="form-section">
                            <h3>Order Notes</h3>
                            <textarea v-model="formData.notes"
                                placeholder="Add special instructions for your order (optional)" class="form-textarea"
                                rows="4"></textarea>
                        </div>
                    </div>

                    <!-- Order Review -->
                    <div class="col-lg-4">
                        <OrderReview :cartItems="cartItems" :formData="formData" @place-order="placeOrder" />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppLayout from '../../Layouts/AppLayout.vue';
import ShippingInfo from './components/ShippingInfo.vue';
import PaymentInfo from './components/PaymentInfo.vue';
import OrderReview from './components/OrderReview.vue';
import { useProductStore } from '../../store/products';
import { useRouter } from 'vue-router';

gsap.registerPlugin(ScrollTrigger);

const router = useRouter();
const productStore = useProductStore();
const cartItems = computed(() => productStore.cartItems);
const checkoutPage = ref(null);
const checkoutHeader = ref(null);

const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    shippingMethod: 'standard',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    notes: ''
});

const errors = ref({});

const validateForm = () => {
    errors.value = {};

    if (!formData.value.firstName.trim()) errors.value.firstName = 'First name is required';
    if (!formData.value.lastName.trim()) errors.value.lastName = 'Last name is required';
    if (!formData.value.email.trim()) errors.value.email = 'Email is required';
    if (!formData.value.address.trim()) errors.value.address = 'Address is required';
    if (!formData.value.city.trim()) errors.value.city = 'City is required';
    if (!formData.value.zipCode.trim()) errors.value.zipCode = 'Zip code is required';
    if (!formData.value.cardName.trim()) errors.value.cardName = 'Card name is required';
    if (!formData.value.cardNumber.trim()) errors.value.cardNumber = 'Card number is required';
    if (!formData.value.expiryDate.trim()) errors.value.expiryDate = 'Expiry date is required';
    if (!formData.value.cvv.trim()) errors.value.cvv = 'CVV is required';

    return Object.keys(errors.value).length === 0;
};

const placeOrder = async () => {
    if (validateForm()) {
        // Animate success
        gsap.to(checkoutPage.value, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                // Clear cart and redirect
                productStore.clearCart();
                router.push('/');
                // You can add a toast/notification here for order success
            }
        });
    }
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

    // Animate form sections with stagger
    const sections = document.querySelectorAll('.form-section');
    gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.2
        }
    );
});
</script>

<style lang="scss" scoped>
.checkout-container {
    padding-top: 6.75rem;
    padding-bottom: 5.5rem;
}

.checkout-header {
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

.form-section {
    background: var(--bg-color);
    border: 1px solid rgba(0, 72, 118, 0.1);
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--color-secondary);
        margin-bottom: 1.5rem;

        &:lang(en) {
            font-family: var(--font-ltr);
        }

        &:lang(ar) {
            font-family: var(--font-rtl);
        }
    }
}

.form-textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(0, 72, 118, 0.2);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-color);
    resize: vertical;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(0, 72, 118, 0.1);
    }
}

@media (max-width: 768px) {
    .checkout-header h1 {
        font-size: 1.8rem;
    }

    .form-section {
        padding: 1.5rem;
    }
}
</style>
