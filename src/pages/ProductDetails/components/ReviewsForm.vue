<template>
    <section class="row">
        <div class="mb-3">
            <h2>{{ $t('reviews.addReview') }}</h2>
        </div>
        <!------Reviews Form------------>
        <form class="col-lg-8" @submit.prevent="submitReview" novalidate>
            <div class="mb-3">
                <label class="form-label"> {{ $t('reviews.name') }}
                    <span class="text-danger">*</span> </label>
                <input :class="{ 'is-invalid': v$.userName.$error }" v-model="userName" type="text"
                    class="form-control" />
                <span class="error-message mt-2" v-if="v$.userName.$error">
                    {{ v$.userName.$errors[0].$message }}
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label">{{ $t('reviews.email') }}<span class="text-danger">*</span> </label>
                <input :class="{ 'is-invalid': v$.emailField.$error }" v-model="emailField" type="email"
                    class="form-control" />
                <span class="error-message mt-2" v-if="v$.emailField.$error">
                    {{ v$.emailField.$errors[0].$message }}
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label"> {{ $t('reviews.yourReview') }}<span class="text-danger">*</span></label>
                <textarea :class="{ 'is-invalid': v$.reviewContent.$error }" v-model="reviewContent"
                    class="form-control" rows="3"></textarea>
                <span class="error-message mt-2" v-if="v$.reviewContent.$error">
                    {{ v$.reviewContent.$errors[0].$message }}
                </span>
            </div>
            <button type="submit" class="btn">{{ $t('reviews.submit') }}</button>
        </form>
        <!-------------------->
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, email, helpers } from "@vuelidate/validators";
import { toast } from "vue3-toastify";

const { t } = useI18n();

// Form fields
const userName = ref("");
const emailField = ref("");
const reviewContent = ref("");

// Validation rules
const rules = computed(() => ({
    userName: {
        required: helpers.withMessage(t('reviews.validation.nameRequired'), required),
        maxLength: helpers.withMessage(t('reviews.validation.nameMaxLength'), maxLength(50))
    },
    emailField: {
        required: helpers.withMessage(t('reviews.validation.emailRequired'), required),
        email: helpers.withMessage(t('reviews.validation.emailInvalid'), email)
    },
    reviewContent: {
        required: helpers.withMessage(t('reviews.validation.reviewRequired'), required),
        maxLength: helpers.withMessage(t('reviews.validation.reviewMaxLength'), maxLength(500))
    }
}));

// Initialize Vuelidate
const v$ = useVuelidate(rules, { userName, emailField, reviewContent });

// Submit function
const submitReview = () => {
    // Touch all fields to trigger validation messages
    v$.value.$touch();

    // If invalid, stop
    if (v$.value.$invalid) return;

    // Success: show toast
    toast.success(`${t('reviews.successMessage')} 🎉`, {
        theme: "colored",
    });

    // Clear form
    userName.value = "";
    emailField.value = "";
    reviewContent.value = "";
    v$.value.$reset();
};

</script>
<style lang="scss" scoped>
h2 {
    font-size: 2rem;
    color: var(--color-secondary);
}

button {
    color: #fff;
    background: linear-gradient(135deg, var(--color-primary) 0%, #0a5a8a 100%);
    width: 9.375rem;
    font-size: 1.2rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;

    &:hover {
        cursor: pointer;
        -webkit-transform: translateY(2px);
        -ms-transform: translateY(2px);
        transform: translateY(2px);
    }
}

form {
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
}
</style>