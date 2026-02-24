<template>
    <div class="order-summary" ref="summaryElement">
        <div class="summary-card">
            <h2>Order Summary</h2>

            <div class="summary-section">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span class="price">${{ subtotal.toFixed(2) }}</span>
                </div>
                <div class="summary-row">
                    <span>Tax (10%):</span>
                    <span class="price">${{ tax.toFixed(2) }}</span>
                </div>
                <div class="summary-row">
                    <span>Shipping:</span>
                    <span class="price" :class="{ 'free': shipping === 0 }">
                        {{ shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}` }}
                    </span>
                </div>

                <div class="divider"></div>

                <div class="summary-row total">
                    <span>Total:</span>
                    <span class="price total-price">${{ total.toFixed(2) }}</span>
                </div>
            </div>

            <div class="promo-code">
                <input v-model="promoCode" type="text" placeholder="Enter promo code" class="promo-input" />
                <button @click="applyPromo" class="btn-main">Apply</button>
            </div>

            <div v-if="discount > 0" class="discount-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Discount applied: -${{ discount.toFixed(2) }}</span>
            </div>

            <button @click="proceedCheckout" class="btn-main checkout-btn">
                Proceed to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>

            <button @click="continueShopping" class="continue-btn">
                Continue Shopping
            </button>

            <div class="security-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your payment is secure</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const props = defineProps({
    cartItems: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['checkout']);

const router = useRouter();
const promoCode = ref('');
const discount = ref(0);
const summaryElement = ref(null);

const subtotal = computed(() => {
    return props.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
});

const tax = computed(() => subtotal.value * 0.1);
const shipping = computed(() => subtotal.value > 100 ? 0 : 10);

const total = computed(() => {
    return subtotal.value + tax.value + shipping.value - discount.value;
});

const applyPromo = () => {
    if (promoCode.value.toUpperCase() === 'SAVE10') {
        const discountAmount = subtotal.value * 0.1;
        discount.value = discountAmount;
        gsap.to(summaryElement.value, {
            scale: 1.02,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });
    }
};

const proceedCheckout = () => {
    emit('checkout');
};

const continueShopping = () => {
    router.push('/');
};

onMounted(() => {
    if (!summaryElement.value) return;

    // Animate summary card entrance
    gsap.fromTo(
        summaryElement.value,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    );

    // Add hover effect
    summaryElement.value.addEventListener('mouseenter', () => {
        gsap.to(summaryElement.value.querySelector('.summary-card'), {
            boxShadow: '0 15px 40px rgba(0, 72, 118, 0.15)',
            duration: 0.3
        });
    });

    summaryElement.value.addEventListener('mouseleave', () => {
        gsap.to(summaryElement.value.querySelector('.summary-card'), {
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
            duration: 0.3
        });
    });

    // Button animations
    const buttons = summaryElement.value.querySelectorAll('.checkout-btn, .continue-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.2 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });
    });
});
</script>

<style lang="scss" scoped>
.order-summary {
    position: sticky;
    top: 100px;
}

.summary-card {
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

.summary-section {
    margin-bottom: 1.5rem;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: var(--text-color);

    .price {
        font-weight: 600;
        color: var(--color-secondary);

        &.free {
            color: #28a745;
        }
    }

    &.total {
        font-size: 1.2rem;
        font-weight: 700;
        padding-top: 1rem;
        color: var(--color-secondary);

        .total-price {
            font-size: 1.4rem;
            color: var(--color-primary-1);
        }
    }
}

.divider {
    height: 1px;
    background: rgba(0, 72, 118, 0.1);
    margin: 1rem 0;
}

.promo-code {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    .promo-input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 1px solid rgba(0, 72, 118, 0.2);
        border-radius: 6px;
        font-size: 0.9rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(0, 72, 118, 0.1);
        }
    }

    // .apply-btn {
    //     padding: 0.75rem 1.5rem;
    //     background: var(--color-secondary);
    //     color: white;
    //     border: none;
    //     border-radius: 6px;
    //     font-weight: 600;
    //     cursor: pointer;
    //     transition: all 0.2s ease;

    //     &:hover {
    //         //  background: darken(#004876, 10%);
    //     }
    // }
}

.discount-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(40, 167, 69, 0.1);
    border-left: 3px solid #28a745;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    color: #155724;
    font-weight: 500;

    svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }
}

.checkout-btn {
    width: 100%;
    padding: 1rem;
    color: white;
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

.continue-btn {
    width: 100%;
    padding: 0.75rem 1rem;
    background: transparent;
    color: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 1.5rem;

    &:hover {
        background: var(--color-secondary);
        color: white;
    }
}

.security-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.85rem;

    svg {
        width: 16px;
        height: 16px;
        color: #28a745;
    }
}

@media (max-width: 768px) {
    .order-summary {
        position: relative;
        top: auto;
    }

    .summary-card {
        padding: 1.5rem;
    }
}
</style>
