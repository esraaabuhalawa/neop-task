<template>
    <div class="form-section" ref="shippingSection">
        <div class="section-header">
            <div class="step-badge">1</div>
            <h3>Shipping Information</h3>
        </div>

        <div class="form-group">
            <div class="row g-3">
                <div class="col-md-6">
                    <label for="firstName">First Name *</label>
                    <input id="firstName" v-model="localFormData.firstName" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.firstName }" placeholder="John" />
                    <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>

                <div class="col-md-6">
                    <label for="lastName">Last Name *</label>
                    <input id="lastName" v-model="localFormData.lastName" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.lastName }" placeholder="Doe" />
                    <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>

                <div class="col-md-6">
                    <label for="email">Email Address *</label>
                    <input id="email" v-model="localFormData.email" type="email" class="form-input"
                        :class="{ 'is-invalid': errors.email }" placeholder="john@example.com" />
                    <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>

                <div class="col-md-6">
                    <label for="phone">Phone Number</label>
                    <input id="phone" v-model="localFormData.phone" type="tel" class="form-input"
                        placeholder="+1 (555) 000-0000" />
                </div>

                <div class="col-12">
                    <label for="address">Street Address *</label>
                    <input id="address" v-model="localFormData.address" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.address }" placeholder="123 Main Street" />
                    <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
                </div>

                <div class="col-md-4">
                    <label for="city">City *</label>
                    <input id="city" v-model="localFormData.city" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.city }" placeholder="New York" />
                    <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
                </div>

                <div class="col-md-4">
                    <label for="zipCode">Zip Code *</label>
                    <input id="zipCode" v-model="localFormData.zipCode" type="text" class="form-input"
                        :class="{ 'is-invalid': errors.zipCode }" placeholder="10001" />
                    <span v-if="errors.zipCode" class="error-message">{{ errors.zipCode }}</span>
                </div>

                <div class="col-md-4">
                    <label for="country">Country</label>
                    <input id="country" v-model="localFormData.country" type="text" class="form-input"
                        placeholder="United States" />
                </div>
            </div>
        </div>

        <!-- Shipping Method -->
        <div class="shipping-methods">
            <h4>Shipping Method</h4>
            <div class="method-options">
                <label class="method-option">
                    <input v-model="localFormData.shippingMethod" type="radio" value="standard" />
                    <span class="method-label">
                        <span class="method-name">Standard Shipping</span>
                        <span class="method-price">FREE - 5-7 business days</span>
                    </span>
                </label>

                <label class="method-option">
                    <input v-model="localFormData.shippingMethod" type="radio" value="express" />
                    <span class="method-label">
                        <span class="method-name">Express Shipping</span>
                        <span class="method-price">$15 - 2-3 business days</span>
                    </span>
                </label>

                <label class="method-option">
                    <input v-model="localFormData.shippingMethod" type="radio" value="overnight" />
                    <span class="method-label">
                        <span class="method-name">Overnight Shipping</span>
                        <span class="method-price">$30 - Next business day</span>
                    </span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
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

const shippingSection = ref(null);

onMounted(() => {
    if (shippingSection.value) {
        gsap.fromTo(
            shippingSection.value.querySelectorAll('.form-input'),
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

.form-group {
    margin-bottom: 2rem;
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
        background-color: rgba(220, 53, 69, 0.05);

        &:focus {
            box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
        }
    }
}

.error-message {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    display: block;
}

.shipping-methods {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 72, 118, 0.1);

    h4 {
        font-weight: 700;
        color: var(--color-secondary);
        margin-bottom: 1rem;
    }
}

.method-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.method-option {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 2px solid rgba(0, 72, 118, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    input[type="radio"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 1rem;
    }

    &:hover {
        border-color: var(--color-primary);
        background: rgba(0, 72, 118, 0.02);
    }

    input[type="radio"]:checked~.method-label {
        color: var(--color-primary);
    }
}

.method-label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: var(--text-color);
    transition: color 0.2s ease;
}

.method-name {
    font-weight: 600;
}

.method-price {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

@media (max-width: 576px) {
    .section-header {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
