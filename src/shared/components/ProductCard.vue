<template>
    <router-link :to="{ name: 'product-details', params: { id: product.id } }"
        class="h-100 mb-3 product-card text-decoration-none">
        <div class="text-center p-2">
            <div class="position-relative">
                <div class="product-image mb-3 position-relative">
                    <div class="img-container-1">
                        <div class="img-container">
                            <img :src="product.image" :alt="product.name">
                        </div>
                    </div>
                </div>
                <span class="discount" v-if="product.price < product.originalPrice">
                    -{{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}%
                </span>
            </div>

            <div class="product-desc">
                <h5 class="card-title">{{ product.name }}</h5>
                <p>{{ product.brand }}</p>
                <div>

                    <rating-component :rtl="isRTL" :rating="product.rating" />

                </div>
            </div>
        </div>
    </router-link>
</template>
<script setup>
import { ref, watch, computed } from 'vue';
import RatingComponent from '../../shared/components/RatingComponent.vue';
import { useMainStore } from '../../store/mainStore';
defineProps({
    product: {
        type: Object,
        required: true
    }
});
const isRTL = ref(true);
const langStore = useMainStore();
const currentLanguage = computed(() => langStore.currentLanguage);

watch(
    currentLanguage,
    (newLang) => {
        isRTL.value = newLang === 'ar'
    },
    { immediate: true }
)
</script>
<style lang="scss" scoped>
.product-desc {

    h5,
    p {
        color: var(--color-secondary);
        line-height: 100%;
    }

    h5 {
        font-size: 22px;
        font-weight: 500;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        margin-top: 14px;
    }
}

.discount {
    position: absolute;
    top: 25px;
    border-radius: 4px;
    padding: 4px 10px;
    background: #F9EDBD;
    font-size: 12px;
    color: var(--color-secondary);
    font-weight: 500;
    z-index: 10;

    &:lang(en) {
        left: 40px;
    }

    &:lang(ar) {
        right: 40px;
    }
}

.star {
    margin-top: -10px;
    overflow: hidden !important;
}

.img-container {
    position: relative;
    background: #fff;
    overflow: hidden;
    height: 280px;
    border-radius: 70px 30px 70px 70px;
    z-index: 20;

    img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
}

.product-image {
    padding: 10px 10px 8px;
    width: 100%;
    height: 100%;
    top: 0;
    background: var(--color-primary);
    border-radius: 30px 30px 60px 60px;
    display: block;
    z-index: -1;
}

.product-image::after {
    content: "";
    position: absolute;
    width: calc(100% - 10px);
    height: 97%;
    top: 0;
    left: 0;
    background: #6F4336;
    border-radius: 70px 40px 70px 70px;
    display: block;
    z-index: 1;
}
</style>