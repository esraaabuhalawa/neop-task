<template>
    <div class="cart-item" ref="itemElement">
        <div class="item-card d-flex align-items-center gap-4 flex-wrap justify-content-lg-between">
            <div class="item-image">
                <img :src="item.product.image" :alt="item.product.name" />
                <span v-if="item.product.price < item.product.originalPrice" class="discount-badge">
                    -{{ Math.round(((item.product.originalPrice - item.product.price) / item.product.originalPrice) *
                        100) }}%
                </span>
            </div>

            <div class="item-details">
                <h3>{{ item.product.name }}</h3>
                <p class="brand">{{ item.product.brand }}</p>
                <rating-component :rtl="isRTL" :rating="item.product.rating" />
            </div>

            <div class="item-quantity">
                <button @click="decreaseQuantity" class="qty-btn">−</button>
                <input v-model.number="quantity" type="number" min="1" class="qty-input" @change="onQuantityChange" />
                <button @click="increaseQuantity" class="qty-btn">+</button>
            </div>

            <div class="item-price">
                <div class="price-info">
                    <span class="unit-price">${{ item.product.price.toFixed(2) }}</span>
                    <span class="total-price">${{ (item.product.price * quantity).toFixed(2) }}</span>
                </div>
            </div>

            <button @click="removeFromCart" class="remove-btn" title="Remove from cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import gsap from 'gsap';
import RatingComponent from '../../../shared/components/RatingComponent.vue';
import { useMainStore } from '../../../store/mainStore';

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['update-quantity', 'remove-item']);

const quantity = ref(1);
const itemElement = ref(null);
const langStore = useMainStore();
const currentLanguage = computed(() => langStore.currentLanguage);
const isRTL = ref(true);

const updateProduct = (newQty) => {
    emit('update-quantity', props.item.product.id, newQty);
};

const increaseQuantity = () => {
    quantity.value++;
    updateProduct(quantity.value);
};

const decreaseQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
        updateProduct(quantity.value);
    }
};

const onQuantityChange = () => {
    if (quantity.value < 1) quantity.value = 1;
    updateProduct(quantity.value);
};

const removeFromCart = () => {
    gsap.to(itemElement.value, {
        opacity: 0,
        x: -50,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            emit('remove-item', props.item.product.id);
        }
    });
};

watch(
    currentLanguage,
    (newLang) => {
        isRTL.value = newLang === 'ar';
    },
    { immediate: true }
);

onMounted(() => {
    quantity.value = props.item.quantity;

    // Hover animation
    if (itemElement.value) {
        itemElement.value.addEventListener('mouseenter', () => {
            gsap.to(itemElement.value.querySelector('.item-card'), {
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        itemElement.value.addEventListener('mouseleave', () => {
            gsap.to(itemElement.value.querySelector('.item-card'), {
                scale: 1,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }
});
</script>

<style lang="scss" scoped>
.cart-item {
    animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.item-card {
    // display: grid;
    // grid-template-columns: 100px 1fr 150px 120px 50px;
    // gap: 1.5rem;
    // align-items: center;
    padding: 1.5rem;
    background: var(--bg-color);
    border-radius: 12px;
    border: 1px solid rgba(0, 72, 118, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:lang(ar) {
        direction: rtl;
    }
}

.item-image {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background: #f5f5f5;

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        display: block;
    }

    .discount-badge {
        position: absolute;
        top: 8px;
        right: 8px;
        background: #F9EDBD;
        color: #333;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
    }
}

.item-details {
    h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-secondary);
        margin-bottom: 0.25rem;

        &:lang(en) {
            font-family: var(--font-ltr);
        }

        &:lang(ar) {
            font-family: var(--font-rtl);
        }
    }

    p {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin: 0;

        &.brand {
            margin-bottom: 0.5rem;
        }
    }
}

.item-quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(0, 72, 118, 0.2);
    border-radius: 6px;
    padding: 0.25rem;
    width: fit-content;

    .qty-btn {
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        color: var(--color-secondary);
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;

        &:hover {
            background: rgba(0, 72, 118, 0.1);
        }
    }

    .qty-input {
        width: 50px;
        border: none;
        text-align: center;
        font-weight: 600;
        color: var(--color-secondary);
        background: transparent;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
}

.item-price {
    .price-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .unit-price {
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-decoration: line-through;
        }

        .total-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--color-primary-1);
        }
    }
}

.remove-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background: #dc3545;
        color: white;
    }
}

@media (max-width: 992px) {
    // .item-card {
    //     grid-template-columns: 80px 1fr 40px;
    //     gap: 1rem;

    //     .item-quantity {
    //         grid-column: 1 / -1;
    //         justify-content: space-between;
    //         margin-top: 0.5rem;
    //     }

    //     .item-price {
    //         grid-column: 1 / -1;
    //     }

    //     .remove-btn {
    //         grid-column: 1 / -1;
    //     }
    // }
}

@media (max-width: 576px) {
    // .item-card {
    //     grid-template-columns: 70px 1fr;
    //     gap: 0.75rem;
    //     padding: 1rem;

    //     .item-details {
    //         h3 {
    //             font-size: 0.95rem;
    //         }
    //     }

    //     .item-quantity,
    //     .item-price,
    //     .remove-btn {
    //         grid-column: 1 / -1;
    //     }
    // }
}
</style>
