<template>
    <!-- Products Section -->
    <section class="py-5">
        <div class="container">
            <header class="text-center mb-4">
                <span>{{ $t('products.label') }}</span>
                <h2>{{ $t('products.title') }}</h2>
            </header>

            <!-- Filter Tabs -->
            <div class="d-flex gap-3 justify-content-center mb-5 flex-wrap flex-lg-nowrap" id="filterTabs">
                <button v-for="category in currentCategories" :key="category.id" @click="filterCategories(category.id)"
                    :class="{ active: activeSection === category.id }">
                    {{ category.name }}
                </button>
            </div>

            <!-- Products Grid -->
            <TransitionGroup name="fade-up" tag="div" class="row g-4">
                <div class="col-md-6 col-lg-3" v-for="product in filteredProducts" :key="product.id">
                    <ProductCard :product="product" />
                </div>
            </TransitionGroup>
        </div>
    </section>
    <!----->
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ProductCard from '../../../shared/components/ProductCard.vue';
const props = defineProps({
    categories: {
        type: Object,
        required: true
    },
    products: {
        type: Object,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
})

const activeSection = ref(1)

const currentCategories = computed(() => {
    return props.categories[props.lang] || []
})

const currentProducts = computed(() => {
    return props.products[props.lang] || []
})

// Filter products based on active category
const filteredProducts = computed(() => {
    if (activeSection.value === 1) {
        return currentProducts.value; // All products
    }
    return currentProducts.value.filter(product =>
        product.category.includes(activeSection.value)
    );
});

const filterCategories = (sectionId) => {
    activeSection.value = sectionId;
};

</script>
<style lang="scss" scoped>
header {

    span,
    h2 {
        color: #3B2F2F;
        line-height: 100%;

        &:lang(en) {
            font-family: "Quicksand", sans-serif;
        }

        &:lang(ar) {
            font-family: 'Tajawal', sans-serif;
        }
    }

    span {
        font-size: 1.25rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 700;
    }
}

#filterTabs {
    button {
        &:lang(en) {
            font-family: "Quicksand", sans-serif;
        }

        &:lang(ar) {
            font-family: 'Tajawal', sans-serif;
        }

        background: none;
        border: none;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 100%;
        height: 25px;
        padding: 30px 10px;
        color: #3B2F2F;
        transform: all .4s ease-in-out;

        &.active,
        &:hover {
            color: #004876;
            border-bottom: 2px solid #004876;
        }
    }
}

.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.4s ease;
}

.fade-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-up-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}


@media screen and (max-width:992px) {
    #filterTabs {
        button {
            padding: 15px 10px;
        }
    }
}
</style>