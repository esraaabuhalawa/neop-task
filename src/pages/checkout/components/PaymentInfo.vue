<template>
    <div class="form-section" ref="paymentSection">
        <div class="section-header">
            <div class="step-badge">2</div>
            <h3>Payment Information</h3>
        </div>

        <div class="payment-methods">
            <label class="payment-method">
                <input v-model="paymentType" type="radio" value="card" />
                <span class="method-icon">💳</span>
                <span>Credit/Debit Card</span>
            </label>
            <label class="payment-method">
                <input v-model="paymentType" type="radio" value="paypal" />
                <span class="method-icon">🅿️</span>
                <span>PayPal</span>
            </label>
        </div>

        <div v-if="paymentType === 'card'" class="card-form">
            <div class="form-group">
                <label for="cardName">Cardholder Name *</label>
                <input id="cardName" v-model="localFormData.cardName" type="text" class="form-input"
                    :class="{ 'is-invalid': errors.cardName }" placeholder="John Doe" />
                <span v-if="errors.cardName" class="error-message">{{ errors.cardName }}</span>
            </div>

            <div class="form-group">
                <label for="cardNumber">Card Number *</label>
                <div class="card-input-wrapper">
                    <input id="cardNumber" v-model="localFormData.cardNumber" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.cardNumber }" placeholder="1234 5678 9012 3456"
                        @input="formatCardNumber" />
                    <span class="card-icon">
                        <svg v-if="cardType === 'visa'" xmlns="http://www.w3.org/2000/svg" width="32"
                            viewBox="0 0 32 32">
                            <rect width="32" height="32" rx="6" fill="#1434CB" />
                            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="12"
                                font-weight="bold">VISA</text>
                        </svg>
                        <svg v-else-if="cardType === 'mastercard'" xmlns="http://www.w3.org/2000/svg" width="32"
                            viewBox="0 0 32 32">
                            <rect width="32" height="32" rx="6" fill="#FF5F00" />
                            <circle cx="12" cy="16" r="8" fill="#EB001B" />
                            <circle cx="20" cy="16" r="8" fill="#F79E1B" />
                        </svg>
                    </span>
                </div>
                <span v-if="errors.cardNumber" class="error-message">{{ errors.cardNumber }}</span>
            </div>

            <div class="row g-3">
                <div class="col-6">
                    <label for="expiryDate">Expiry Date (MM/YY) *</label>
                    <input id="expiryDate" v-model="localFormData.expiryDate" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.expiryDate }" placeholder="12/25" @input="formatExpiryDate" />
                    <span v-if="errors.expiryDate" class="error-message">{{ errors.expiryDate }}</span>
                </div>

                <div class="col-6">
                    <label for="cvv">CVV *</label>
                    <input id="cvv" v-model="localFormData.cvv" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.cvv }" placeholder="123" maxlength="4" @input="onCVVInput" />
                    <span v-if="errors.cvv" class="error-message">{{ errors.cvv }}</span>
                </div>
            </div>
        </div>

        <div v-else class="paypal-info">
            <div class="info-message">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>You will be redirected to PayPal to complete your payment securely.</span>
            </div>
        </div>

        <!-- Billing Address Same as Shipping -->
        <div class="billing-address">
            <label class="checkbox-label">
                <input v-model="sameAsShipping" type="checkbox" />
                <span>Billing address same as shipping</span>
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    formData: Object,
    errors: Object
});

const emit = defineEmits(['update:formData']);

const localFormData = computed({
    get: () => props.formData,
    set: (val) => emit('update:formData', val)
});

const paymentType = ref('card');
const sameAsShipping = ref(true);
const cardType = ref('');
const paymentSection = ref(null);

const formatCardNumber = () => {
    let value = localFormData.value.cardNumber.replace(/\s/g, '');

    // Detect card type
    if (value.startsWith('4')) {
        cardType.value = 'visa';
    } else if (value.startsWith('5')) {
        cardType.value = 'mastercard';
    } else {
        cardType.value = '';
    }

    // Format with spaces
    let formatted = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    localFormData.value.cardNumber = formatted;
};

const formatExpiryDate = () => {
    let value = localFormData.value.expiryDate.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    localFormData.value.expiryDate = value;
};

const onCVVInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
};

onMounted(() => {
    if (paymentSection.value) {
        gsap.fromTo(
            paymentSection.value.querySelectorAll('.form-input'),
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
            }
        );
    }
});
</script>

<style lang="scss" scoped>
.section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;

    .step-badge {
        width: 40px;
        height: 40px;
        background: var(--color-primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.1rem;
    }

    h3 {
        margin: 0;
    }
}

.payment-methods {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 576px) {
        flex-direction: column;
    }
}

.payment-method {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 2px solid rgba(0, 72, 118, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    input[type="radio"] {
        margin-right: 0.75rem;
        cursor: pointer;
    }

    &:hover {
        border-color: var(--color-primary);
        background: rgba(0, 72, 118, 0.02);
    }

    input[type="radio"]:checked~span {
        color: var(--color-primary);
    }

    span {
        font-weight: 600;
        transition: color 0.2s ease;
    }
}

.method-icon {
    font-size: 1.3rem;
    margin-right: 0.5rem;
}

.card-form {
    animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    font-weight: 600;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;

    &:lang(en) {
        font-family: var(--font-ltr);
    }

    &:lang(ar) {
        font-family: var(--font-rtl);
    }
}

.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(0, 72, 118, 0.2);
    border-radius: 8px;
    font-size: 0.95rem;
    color: var(--text-color);
    transition: all 0.2s ease;
    background: var(--bg-color);

    &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(0, 72, 118, 0.1);
    }

    &.is-invalid {
        border-color: #dc3545;

        &:focus {
            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
        }
    }
}

.card-input-wrapper {
    position: relative;
}

.card-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    opacity: 0.6;
}

.error-message {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    display: block;
}

.paypal-info {
    background: rgba(0, 100, 200, 0.1);
    border-left: 4px solid #0064c8;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
}

.info-message {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #0064c8;

    svg {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }
}

.billing-address {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 72, 118, 0.1);
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    color: var(--text-color);

    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: 0.75rem;
        accent-color: var(--color-primary);
    }

    &:hover {
        color: var(--color-primary);
    }
}

.row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
}
</style>
