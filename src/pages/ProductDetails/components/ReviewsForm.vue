<template>
    <section class="row">
        <div class="mb-3">
            <h2>{{ $t('reviews.addReview') }}</h2>
        </div>
        <!------Reviews Form------------>
        <form class="col-lg-8" @submit.prevent="submitReview" novalidate>
            <div class="mb-3">
                <label class="form-label"> {{ $t('reviews.name') }}<span class="text-danger">*</span> </label>
                <input v-model="userName" type="text" class="form-control" />
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.userName.$error">
                    {{ v$.userName.$errors[0].$message }}
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label">{{ $t('reviews.email') }}<span class="text-danger">*</span> </label>
                <input v-model="emailField" type="email" class="form-control" />
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.emailField?.$error">
                    {{ v$.emailField?.$errors[0].$message }}
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label"> {{ $t('reviews.yourReview') }}<span class="text-danger">*</span></label>
                <textarea v-model="reviewContent" class="form-control" rows="3"></textarea>
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.reviewContent.$error">
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
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, email, helpers } from "@vuelidate/validators";
import { toast } from "vue3-toastify";

// Form fields
const userName = ref("");
const emailField = ref("");
const reviewContent = ref("");

// Validation rules
const rules = computed(() => ({
    userName: {
        required: helpers.withMessage("Name is required", required),
        maxLength: helpers.withMessage("Name cannot exceed 50 characters", maxLength(50))
    },
    emailField: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email must be valid", email)
    },
    reviewContent: {
        required: helpers.withMessage("Review is required", required),
        maxLength: helpers.withMessage("Review cannot exceed 500 characters", maxLength(500))
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
    toast.success("Review submitted successfully 🎉", {
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
    background: var(--color-primary-1);
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
        background: var(--color-hover);
        color: var(--bg-color);
        -webkit-transform: translateY(2px);
        -ms-transform: translateY(2px);
        transform: translateY(2px);
    }
}

form {
    background: var(--form-bg);
    padding: 20px;
    border-radius: 5px;
}
</style>