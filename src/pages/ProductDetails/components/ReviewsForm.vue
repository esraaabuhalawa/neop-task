<template>
    <section class="mt-4">
        <div>
            <h2>
                Add A Review
            </h2>
        </div>
        <!------Reviews Form------------>
        <form @submit.prevent="submitReview" novalidate>
            <div class="mb-3">
                <label class="form-label">Name  <span class="text-danger">*</span> </label>
                <input v-model="userName" type="text" class="form-control"/>
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.userName.$error">
                    {{ v$.userName.$errors[0].$message }}
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label">Email <span class="text-danger">*</span> </label>
                <input v-model="emailField" type="email" class="form-control"/>
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.emailField?.$error">
                    {{ v$.emailField?.$errors[0].$message }}
                </span>
            </div>
             <div class="mb-3">
                <label class="form-label">Your Review  <span class="text-danger">*</span></label>
                <textarea v-model="reviewContent" class="form-control" rows="3"></textarea>
                <span class="alert alert-danger py-1 d-block mt-2" v-if="v$.reviewContent.$error">
                    {{ v$.reviewContent.$errors[0].$message }}
                </span>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
        <!-------------------->
    </section>
</template>
<script setup>
import { ref,computed } from 'vue';
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, email, helpers } from "@vuelidate/validators";


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
  showToast(`Review submitted by ${userName.value}!`);

  // Clear form
  userName.value = "";
  emailField.value = "";
  reviewContent.value = "";
  v$.value.$reset();
};

</script>
<style lang="scss" scoped>
    h2{
        font-size: 2rem;
        color: #333;
    }
    form{
        width: 60%
    }
    button{
           color: #fff;
    background: #004876;
    width: 9.375rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-in-out;

    &:hover {
        cursor: pointer;
        background: #6F4336;
        color:#fff;
        transform: translateY(2px);
    }
    }
    form{
            background: #edf4f8;
    padding: 20px;
    border-radius: 5px;
    }
</style>