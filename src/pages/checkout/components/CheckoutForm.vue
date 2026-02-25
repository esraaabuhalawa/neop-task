<template>
    <div class="checkout-form" ref="checkoutForm">
        <div class="container">
            <div class="row g-4">
                <!-- Form Section -->
                <div class="col-lg-8">
                    <!-- Shipping Information -->
                    <div class="form-section" ref="shippingSection">
                        <div class="section-header">
                            <div class="step-badge">1</div>
                            <h3>{{ $t('checkout.shippingInfo') }}</h3>
                        </div>

                        <div class="form-group">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="firstName">{{ $t('checkout.firstName') }} <span class="text-danger">*</span></label>
                                    <input id="firstName" v-model="formData.firstName" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('firstName') }"
                                        :placeholder="$t('checkout.firstName')"
                                        @input="handleFieldInput('firstName')" />
                                    <span v-if="hasError('firstName')" class="error-message">{{
                                        getErrorMessage('firstName') }}</span>
                                </div>

                                <div class="col-md-6">
                                    <label for="lastName">{{ $t('checkout.lastName') }} <span class="text-danger">*</span></label>
                                    <input id="lastName" v-model="formData.lastName" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('lastName') }"
                                        :placeholder="$t('checkout.lastName')" @input="handleFieldInput('lastName')" />
                                    <span v-if="hasError('lastName')" class="error-message">{{
                                        getErrorMessage('lastName') }}</span>
                                </div>

                                <div class="col-md-6">
                                    <label for="email">{{ $t('checkout.email') }} <span class="text-danger">*</span></label>
                                    <input id="email" v-model="formData.email" type="email" class="form-input"
                                        :class="{ 'is-invalid': hasError('email') }" :placeholder="$t('checkout.email')"
                                        @input="handleFieldInput('email')" />
                                    <span v-if="hasError('email')" class="error-message">{{ getErrorMessage('email')
                                    }}</span>
                                </div>

                                <div class="col-md-6">
                                    <label for="phone">{{ $t('checkout.phone') }}</label>
                                    <input id="phone" v-model="formData.phone" type="tel" class="form-input"
                                        :placeholder="$t('checkout.phone')" />
                                </div>

                                <div class="col-12">
                                    <label for="address">{{ $t('checkout.address') }} <span class="text-danger">*</span></label>
                                    <input id="address" v-model="formData.address" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('address') }"
                                        :placeholder="$t('checkout.address')" @input="handleFieldInput('address')" />
                                    <span v-if="hasError('address')" class="error-message">{{ getErrorMessage('address')
                                    }}</span>
                                </div>

                                <div class="col-md-4">
                                    <label for="city">{{ $t('checkout.city') }} <span class="text-danger">*</span></label>
                                    <input id="city" v-model="formData.city" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('city') }" :placeholder="$t('checkout.city')"
                                        @input="handleFieldInput('city')" />
                                    <span v-if="hasError('city')" class="error-message">{{ getErrorMessage('city')
                                    }}</span>
                                </div>

                                <div class="col-md-4">
                                    <label for="zipCode">{{ $t('checkout.zipCode') }} <span class="text-danger">*</span></label>
                                    <input id="zipCode" v-model="formData.zipCode" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('zipCode') }"
                                        :placeholder="$t('checkout.zipCode')" @input="handleFieldInput('zipCode')" />
                                    <span v-if="hasError('zipCode')" class="error-message">{{ getErrorMessage('zipCode')
                                    }}</span>
                                </div>

                                <div class="col-md-4">
                                    <label for="country">{{ $t('checkout.country') }}</label>
                                    <input id="country" v-model="formData.country" type="text" class="form-input"
                                        :placeholder="$t('checkout.country')" />
                                </div>
                            </div>
                        </div>

                        <!-- Shipping Method -->
                        <div class="shipping-methods">
                            <h4>{{ $t('checkout.shippingMethod') }}</h4>
                            <div class="method-options">
                                <label class="method-option">
                                    <input v-model="formData.shippingMethod" type="radio" value="standard" />
                                    <span class="method-label">
                                        <span class="method-name">{{ $t('checkout.standardShipping') }}</span>
                                        <span class="method-price">{{ $t('checkout.standardShippingDesc') }}</span>
                                    </span>
                                </label>

                                <label class="method-option">
                                    <input v-model="formData.shippingMethod" type="radio" value="express" />
                                    <span class="method-label">
                                        <span class="method-name">{{ $t('checkout.expressShipping') }}</span>
                                        <span class="method-price">{{ $t('checkout.expressShippingDesc') }}</span>
                                    </span>
                                </label>

                                <label class="method-option">
                                    <input v-model="formData.shippingMethod" type="radio" value="overnight" />
                                    <span class="method-label">
                                        <span class="method-name">{{ $t('checkout.overnightShipping') }}</span>
                                        <span class="method-price">{{ $t('checkout.overnightShippingDesc') }}</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Information -->
                    <div class="form-section" ref="paymentSection">
                        <div class="section-header">
                            <div class="step-badge">2</div>
                            <h3>{{ $t('checkout.paymentInfo') }}</h3>
                        </div>

                        <div class="payment-methods">
                            <label class="payment-method">
                                <input v-model="paymentType" type="radio" value="card" />
                                <span class="method-icon">💳</span>
                                <span>{{ $t('checkout.creditDebitCard') }}</span>
                            </label>
                            <label class="payment-method">
                                <input v-model="paymentType" type="radio" value="paypal" />
                                <span class="method-icon">🅿️</span>
                                <span>{{ $t('checkout.paypal') }}</span>
                            </label>
                        </div>

                        <div v-if="paymentType === 'card'" class="card-form">
                            <div class="form-group">
                                <label for="cardName">{{ $t('checkout.cardholderName') }} <span class="text-danger">*</span></label>
                                <input id="cardName" v-model="formData.cardName" type="text" class="form-input"
                                    :class="{ 'is-invalid': hasError('cardName') }"
                                    :placeholder="$t('checkout.cardholderName')"
                                    @input="handleFieldInput('cardName')" />
                                <span v-if="hasError('cardName')" class="error-message">{{ getErrorMessage('cardName')
                                }}</span>
                            </div>

                            <div class="form-group">
                                <label for="cardNumber">{{ $t('checkout.cardNumber') }} <span class="text-danger">*</span></label>
                                <div class="card-input-wrapper">
                                    <input id="cardNumber" v-model="formData.cardNumber" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('cardNumber') }"
                                        :placeholder="$t('checkout.cardNumberPlaceholder')"
                                        @input="formatCardNumber; handleFieldInput('cardNumber')" />
                                    <span class="card-icon">
                                        <svg v-if="cardType === 'visa'" xmlns="http://www.w3.org/2000/svg" width="32"
                                            viewBox="0 0 32 32">
                                            <rect width="32" height="32" rx="6" fill="#1434CB" />
                                            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white"
                                                font-size="12" font-weight="bold">VISA</text>
                                        </svg>
                                        <svg v-else-if="cardType === 'mastercard'" xmlns="http://www.w3.org/2000/svg"
                                            width="32" viewBox="0 0 32 32">
                                            <rect width="32" height="32" rx="6" fill="#FF5F00" />
                                            <circle cx="12" cy="16" r="8" fill="#EB001B" />
                                            <circle cx="20" cy="16" r="8" fill="#F79E1B" />
                                        </svg>
                                    </span>
                                </div>
                                <span v-if="hasError('cardNumber')" class="error-message">{{
                                    getErrorMessage('cardNumber') }}</span>
                            </div>

                            <div class="row g-3">
                                <div class="col-6">
                                    <label for="expiryDate">{{ $t('checkout.expiryDate') }} <span class="text-danger">*</span></label>
                                    <input id="expiryDate" v-model="formData.expiryDate" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('expiryDate') }"
                                        :placeholder="$t('checkout.expiryDatePlaceholder')"
                                        @input="formatExpiryDate; handleFieldInput('expiryDate')" />
                                    <span v-if="hasError('expiryDate')" class="error-message">{{
                                        getErrorMessage('expiryDate') }}</span>
                                </div>

                                <div class="col-6">
                                    <label for="cvv">{{ $t('checkout.cvv') }} <span class="text-danger">*</span></label>
                                    <input id="cvv" v-model="formData.cvv" type="text" class="form-input"
                                        :class="{ 'is-invalid': hasError('cvv') }"
                                        :placeholder="$t('checkout.cvvPlaceholder')" maxlength="4"
                                        @input="onCVVInput; handleFieldInput('cvv')" />
                                    <span v-if="hasError('cvv')" class="error-message">{{ getErrorMessage('cvv')
                                    }}</span>
                                </div>
                            </div>
                        </div>

                        <div v-else class="paypal-info">
                            <div class="info-message">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ $t('checkout.paypalInfo') }}</span>
                            </div>
                        </div>

                        <!-- Billing Address Same as Shipping -->
                        <div class="billing-address">
                            <label class="checkbox-label">
                                <input v-model="sameAsShipping" type="checkbox" />
                                <span>{{ $t('checkout.billingAddressSame') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Order Notes -->
                    <div class="form-section">
                        <h3>{{ $t('checkout.orderNotes') }}</h3>
                        <textarea v-model="formData.notes" :placeholder="$t('checkout.orderNotesPlaceholder')"
                            class="form-textarea" rows="4"></textarea>
                    </div>
                </div>

                <!-- Order Review Sidebar -->
                <div class="col-lg-4">
                    <div class="order-review" ref="reviewElement">
                        <div class="review-card">
                            <h2>{{ $t('checkout.orderReview') }}</h2>

                            <!-- Order Items -->
                            <div class="review-items">
                                <div class="review-item" v-for="item in cartItems" :key="item.product.id">
                                    <img :src="item.product.image" :alt="item.product.name" />
                                    <div class="item-info">
                                        <h4>{{ item.product.name }}</h4>
                                        <p>Qty: {{ item.quantity }}</p>
                                    </div>
                                    <span class="item-price">${{ (item.product.price * item.quantity).toFixed(2)
                                    }}</span>
                                </div>
                            </div>

                            <!-- Divider -->
                            <div class="divider"></div>

                            <!-- Shipping Details -->
                            <div v-if="formData.firstName" class="shipping-details">
                                <h4>{{ $t('checkout.shippingTo') }}</h4>
                                <p>{{ formData.firstName }} {{ formData.lastName }}</p>
                                <p>{{ formData.address }}</p>
                                <p>{{ formData.city }}, {{ formData.zipCode }}</p>
                            </div>

                            <!-- Price Breakdown -->
                            <div class="price-breakdown">
                                <div class="breakdown-row">
                                    <span>{{ $t('checkout.subtotal') }}:</span>
                                    <span>${{ subtotal.toFixed(2) }}</span>
                                </div>
                                <div class="breakdown-row">
                                    <span>{{ $t('checkout.tax') }}:</span>
                                    <span>${{ tax.toFixed(2) }}</span>
                                </div>
                                <div class="breakdown-row">
                                    <span>{{ $t('checkout.shipping') }}:</span>
                                    <span>{{ shippingCost === 0 ? $t('checkout.free') : `$${shippingCost.toFixed(2)}`
                                        }}</span>
                                </div>

                                <div class="divider"></div>

                                <div class="breakdown-row total">
                                    <span>{{ $t('checkout.total') }}:</span>
                                    <span>${{ total.toFixed(2) }}</span>
                                </div>
                            </div>

                            <!-- Place Order Button -->
                            <button @click="submitCheckout" class="place-order-btn" :disabled="isProcessing">
                                <span v-if="!isProcessing">{{ $t('checkout.placeOrder') }}</span>
                                <span v-else>{{ $t('checkout.processing') }}</span>
                                <svg v-if="!isProcessing" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>

                            <!-- Security Info -->
                            <div class="security-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>{{ $t('checkout.secureCheckout') }}</span>
                            </div>

                            <!-- Trust Badges -->
                            <div class="trust-badges">
                                <span class="badge">✓ {{ $t('checkout.trustedCustomers') }}</span>
                                <span class="badge">✓ {{ $t('checkout.moneyBackGuarantee') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, numeric, helpers } from '@vuelidate/validators';

const { t } = useI18n();

const props = defineProps({
    cartItems: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['checkout-complete']);

const checkoutForm = ref(null);
const reviewElement = ref(null);
const paymentType = ref('card');
const sameAsShipping = ref(true);
const cardType = ref('');
const isProcessing = ref(false);

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

// Vuelidate rules with custom messages using helpers.withMessage
const rules = computed(() => {
    const shippingRules = {
        firstName: {
            required: helpers.withMessage(t('checkout.validation.firstNameRequired'), required)
        },
        lastName: {
            required: helpers.withMessage(t('checkout.validation.lastNameRequired'), required)
        },
        email: {
            required: helpers.withMessage(t('checkout.validation.emailRequired'), required),
            email: helpers.withMessage(t('checkout.validation.emailInvalid'), email)
        },
        address: {
            required: helpers.withMessage(t('checkout.validation.addressRequired'), required)
        },
        city: {
            required: helpers.withMessage(t('checkout.validation.cityRequired'), required)
        },
        zipCode: {
            required: helpers.withMessage(t('checkout.validation.zipCodeRequired'), required)
        }
    };

    const paymentRules = paymentType.value === 'card' ? {
        cardName: {
            required: helpers.withMessage(t('checkout.validation.cardNameRequired'), required)
        },
        cardNumber: {
            required: helpers.withMessage(t('checkout.validation.cardNumberRequired'), required),
            minLength: helpers.withMessage(t('checkout.validation.cardNumberMinLength'), minLength(16))
        },
        expiryDate: {
            required: helpers.withMessage(t('checkout.validation.expiryDateRequired'), required)
        },
        cvv: {
            required: helpers.withMessage(t('checkout.validation.cvvRequired'), required),
            numeric: helpers.withMessage(t('checkout.validation.cvvNumeric'), numeric),
            minLength: helpers.withMessage(t('checkout.validation.cvvMinLength'), minLength(3))
        }
    } : {};

    return { ...shippingRules, ...paymentRules };
});

const v$ = useVuelidate(rules, formData);

// Computing totals
const subtotal = computed(() => {
    return props.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
});

const tax = computed(() => subtotal.value * 0.1);

const shippingCost = computed(() => {
    if (formData.value.shippingMethod === 'standard') return 0;
    if (formData.value.shippingMethod === 'express') return 15;
    if (formData.value.shippingMethod === 'overnight') return 30;
    return 0;
});

const total = computed(() => subtotal.value + tax.value + shippingCost.value);

// Get error message from Vuelidate
const getErrorMessage = (field) => {
    const fieldErrors = v$.value[field];
    if (!fieldErrors?.$dirty) return '';

    // Return the first error message from helpers.withMessage
    for (const [key, value] of Object.entries(fieldErrors.$errors)) {
        if (value?.$invalid) {
            return value.$message;
        }
    }

    return '';
};

// Check if field has error
const hasError = (field) => {
    return v$.value[field]?.$dirty && v$.value[field]?.$invalid;
};

// Handle input - mark field as touched (dirty) and validate
const handleFieldInput = (field) => {
    v$.value[field]?.$touch();
};

// Payment formatting functions
const formatCardNumber = () => {
    let value = formData.value.cardNumber.replace(/\s/g, '');

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
    formData.value.cardNumber = formatted;
};

const formatExpiryDate = () => {
    let value = formData.value.expiryDate.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    formData.value.expiryDate = value;
};

const onCVVInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
};

// Submit checkout
const submitCheckout = async () => {
    if (isProcessing.value) return;

    // Touch all fields to trigger validation messages
    v$.value.$touch();

    // If form invalid, stop
    if (v$.value.$invalid) {
        // Scroll to first error
        const firstError = document.querySelector('.is-invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    isProcessing.value = true;

    // Animate button
    if (reviewElement.value) {
        const btn = reviewElement.value.querySelector('.place-order-btn');
        if (btn) {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.2
            });
        }

        // Simulate processing
        setTimeout(async () => {
            const btn = reviewElement.value?.querySelector('.place-order-btn');
            if (btn) {
                gsap.to(btn, { scale: 1, duration: 0.2 });
            }

            // Emit complete event with all form data
            emit('checkout-complete', {
                ...formData.value,
                paymentMethod: paymentType.value,
                total: total.value,
                items: props.cartItems
            });

            isProcessing.value = false;

            // Reset form
            v$.value.$reset();
        }, 1500);
    }
};


// Animations on mount
onMounted(() => {
    if (!checkoutForm.value) return;

    // Animate form sections with stagger
    const sections = checkoutForm.value.querySelectorAll('.form-section');
    gsap.fromTo(
        sections,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        }
    );

    // Animate review card entrance
    if (reviewElement.value) {
        gsap.fromTo(
            reviewElement.value,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
    }
});
</script>

<style lang="scss" scoped>
.checkout-form {
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

        h4 {
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-secondary);
            margin-bottom: 1rem;
        }
    }

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
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid rgba(0, 72, 118, 0.2);
        border-radius: 8px;
        font-family: inherit;
        font-size: 0.95rem;
        color: var(--text-color);
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(0, 72, 118, 0.1);
        }

        &.is-invalid {
            border-color: #dc3545;
            background-color: rgba(220, 53, 69, 0.05);

            &:focus {
                box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
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

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .shipping-methods {
        margin-top: 2rem;

        .method-options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .method-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border: 2px solid rgba(0, 72, 118, 0.1);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;

            input {
                cursor: pointer;
            }

            &:hover {
                border-color: var(--color-primary);
                background: rgba(0, 72, 118, 0.02);
            }

            .method-label {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .method-name {
                font-weight: 600;
                color: var(--text-color);
            }

            .method-price {
                font-size: 0.875rem;
                color: var(--text-secondary);
            }
        }
    }

    .payment-methods {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 2rem;

        .payment-method {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border: 2px solid rgba(0, 72, 118, 0.1);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;

            input {
                cursor: pointer;
            }

            &:hover {
                border-color: var(--color-primary);
                background: rgba(0, 72, 118, 0.02);
            }

            .method-icon {
                font-size: 1.5rem;
            }
        }
    }

    .card-form {
        background: rgba(0, 72, 118, 0.02);
        padding: 1.5rem;
        border-radius: 8px;
    }

    .card-input-wrapper {
        position: relative;

        .card-icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
        }

        .form-input {
            padding-right: 3rem;
        }
    }

    .paypal-info {
        background: rgba(0, 72, 118, 0.02);
        padding: 1.5rem;
        border-radius: 8px;

        .info-message {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: var(--color-secondary);

            svg {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
            }
        }
    }

    .billing-address {
        margin-top: 1.5rem;

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            cursor: pointer;
            font-weight: 600;

            input {
                cursor: pointer;
                width: auto;
            }
        }
    }

    .order-review {
        position: sticky;
        top: 2rem;

        .review-card {
            background: var(--bg-color);
            border: 1px solid rgba(0, 72, 118, 0.1);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

            h2 {
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

        .review-items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .review-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;

            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 8px;
                flex-shrink: 0;
            }

            .item-info {
                flex: 1;

                h4 {
                    margin: 0;
                    font-size: 0.95rem;
                    color: var(--text-color);
                    font-weight: 600;
                }

                p {
                    margin: 0.25rem 0 0;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                }
            }

            .item-price {
                font-weight: 700;
                color: var(--color-primary-1);
                font-size: 1.2rem;
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
                margin: 0 0 0.5rem;
                font-size: 0.95rem;
            }

            p {
                margin: 0.25rem 0;
                font-size: 0.9rem;
                color: var(--text-secondary);
            }
        }

        .price-breakdown {
            margin-bottom: 1.5rem;

            .breakdown-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.75rem;
                font-size: 0.95rem;
                color: var(--text-secondary);

                &.total {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-top: 0.75rem;
                }
            }
        }

        .place-order-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--color-primary) 0%, #0a5a8a 100%);
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: #fff;

            span {
                color: white !important;
            }

            svg {
                width: 20px;
                height: 20px;
            }

            &:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(0, 72, 118, 0.3);
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
        }

        .security-badge {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;

            svg {
                width: 20px;
                height: 20px;
                color: var(--color-primary);
                flex-shrink: 0;
            }
        }

        .trust-badges {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .badge {
                font-size: 0.875rem;
                color: var(--text-secondary);
                padding: 0.5rem;
                background: rgba(0, 72, 118, 0.05);
                border-radius: 6px;
                text-align: center;
            }
        }
    }
}

@media (max-width: 768px) {
    .checkout-form {
        .form-section {
            padding: 1.5rem;
        }

        .order-review {
            position: static;

            .review-card {
                margin-top: 2rem;
            }
        }
    }
}
</style>
