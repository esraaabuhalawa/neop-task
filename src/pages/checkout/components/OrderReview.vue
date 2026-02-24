<template>
    <div class="order-review" ref="reviewElement">
        <div class="review-card">
            <h2>Order Review</h2>

            <!-- Order Items -->
            <div class="review-items">
                <div class="review-item" v-for="item in cartItems" :key="item.product.id">
                    <img :src="item.product.image" :alt="item.product.name" />
                    <div class="item-info">
                        <h4>{{ item.product.name }}</h4>
                        <p>Qty: {{ item.quantity }}</p>
                    </div>
                    <span class="item-price">${{ (item.product.price * item.quantity).toFixed(2) }}</span>
                </div>
            </div>

            <!-- Divider -->
            <div class="divider"></div>

            <!-- Shipping Details -->
            <div v-if="formData.firstName" class="shipping-details">
                <h4>Shipping To</h4>
                <p>{{ formData.firstName }} {{ formData.lastName }}</p>
                <p>{{ formData.address }}</p>
                <p>{{ formData.city }}, {{ formData.zipCode }}</p>
            </div>

            <!-- Price Breakdown -->
            <div class="price-breakdown">
                <div class="breakdown-row">
                    <span>Subtotal:</span>
                    <span>${{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="breakdown-row">
                    <span>Tax (10%):</span>
                    <span>${{ tax.toFixed(2) }}</span>
                </div>
                <div class="breakdown-row">
                    <span>Shipping:</span>
                    <span>{{ shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}` }}</span>
                </div>

                <div class="divider"></div>

                <div class="breakdown-row total">
                    <span>Total:</span>
                    <span>${{ total.toFixed(2) }}</span>
                </div>
            </div>

            <!-- Place Order Button -->
            <button @click="placeOrder" class="place-order-btn">
                <span>Place Order</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <!-- Security Info -->
            <div class="security-badge">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure checkout with encryption</span>
            </div>

            <!-- Trust Badges -->
            <div class="trust-badges">
                <span class="badge">✓ Trusted by 100k+ customers</span>
                <span class="badge">✓ 30-day money-back guarantee</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    cartItems: {
        type: Array,
        required: true
    },
    formData: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['place-order']);

const reviewElement = ref(null);
const isProcessing = ref(false);

const subtotal = computed(() => {
    return props.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
});

const tax = computed(() => subtotal.value * 0.1);

const shippingCost = computed(() => {
    if (props.formData.shippingMethod === 'standard') return 0;
    if (props.formData.shippingMethod === 'express') return 15;
    if (props.formData.shippingMethod === 'overnight') return 30;
    return 0;
});

const total = computed(() => subtotal.value + tax.value + shippingCost.value);

const placeOrder = async () => {
    if (isProcessing.value) return;

    isProcessing.value = true;

    // Animate button
    const btn = reviewElement.value.querySelector('.place-order-btn');
    gsap.to(btn, {
        scale: 0.95,
        duration: 0.2
    });

    // Simulate processing
    setTimeout(() => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
        emit('place-order');
        isProcessing.value = false;
    }, 1500);
};

onMounted(() => {
    if (!reviewElement.value) return;

    // Animate review card entrance
    gsap.fromTo(
        reviewElement.value,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate items
    const items = reviewElement.value.querySelectorAll('.review-item');
    gsap.fromTo(
        items,
        { opacity: 0, y: 10 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }
    );

    // Hover effect
    reviewElement.value.addEventListener('mouseenter', () => {
        gsap.to(reviewElement.value.querySelector('.review-card'), {
            boxShadow: '0 15px 40px rgba(0, 72, 118, 0.15)',
            duration: 0.3
        });
    });

    reviewElement.value.addEventListener('mouseleave', () => {
        gsap.to(reviewElement.value.querySelector('.review-card'), {
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
            duration: 0.3
        });
    });
});
</script>

<style lang="scss" scoped>
.order-review {
    position: sticky;
    top: 100px;
}

.review-card {
    background: var(--bg-color);
    border: 1px solid rgba(0, 72, 118, 0.1);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

    h2 {
        font-size: 1.5rem;
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

.review-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
    max-height: 400px;
    overflow-y: auto;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 72, 118, 0.05);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 72, 118, 0.2);
        border-radius: 10px;

        &:hover {
            background: rgba(0, 72, 118, 0.3);
        }
    }
}

.review-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: rgba(0, 72, 118, 0.02);
    border-radius: 8px;
    align-items: center;

    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 6px;
    }

    .item-info {
        flex: 1;

        h4 {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--color-secondary);
            margin: 0 0 0.25rem 0;
        }

        p {
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin: 0;
        }
    }

    .item-price {
        font-weight: 700;
        color: var(--color-primary-1);
        white-space: nowrap;
    }
}

.divider {
    height: 1px;
    background: rgba(0, 72, 118, 0.1);
    margin: 1rem 0;
}

.shipping-details {
    margin-bottom: 1.5rem;

    h4 {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--color-secondary);
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin: 0.25rem 0;
    }
}

.price-breakdown {
    margin-bottom: 1.5rem;
}

.breakdown-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    color: var(--text-color);
    font-size: 0.95rem;

    &.total {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-secondary);
        padding-top: 0.75rem;

        span:last-child {
            color: var(--color-primary-1);
        }
    }
}

.place-order-btn {
    width: 100%;
    padding: 1rem;
    color: white;
    background: var(--color-primary);
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 72, 118, 0.3);

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 72, 118, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
}

.security-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #28a745;
    font-size: 0.85rem;
    margin-bottom: 1rem;

    svg {
        width: 16px;
        height: 16px;
    }
}

.trust-badges {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .badge {
        font-size: 0.8rem;
        color: var(--text-secondary);
        text-align: center;
    }
}

@media (max-width: 768px) {
    .order-review {
        position: relative;
        top: auto;
    }

    .review-card {
        padding: 1.5rem;
    }
}
</style>
