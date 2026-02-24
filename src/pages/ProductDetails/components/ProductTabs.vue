<template>
    <section class="product-tabs mt-5">
  <!-- Tabs buttons -->
  <div class="tabs-header d-flex gap-4 border-bottom mb-4">
    <button
      class="tab-btn"
      :class="{ active: activeTab === 'description' }"
      @click="activeTab = 'description'"
    >
    {{ $t('Description') }}
    </button>

    <button
      class="tab-btn"
      :class="{ active: activeTab === 'reviews' }"
      @click="activeTab = 'reviews'"
    >
      {{ $t('reviews.title') }} ({{ product?.reviews?.length || 0 }})
    </button>
  </div>

  <!-- Tabs content -->
  <div class="tabs-content">
    <!-- Description Tab -->
    <div v-if="activeTab === 'description'"  class="description tab-panel">
      <p>
        {{ product?.description }}
      </p>
    </div>

    <!-- Reviews Tab -->
    <div v-if="activeTab === 'reviews'" class="tab-panel">
        <div v-if="product.reviews.length === 0 ">
            <p class="no-review">{{ $t('noreviews') }}</p>
        </div>
        <div v-else>
            <div v-for="slide in product?.reviews" :key="slide">
                <ClientCard :review="slide"/>
            </div>
        </div>
        <reviews-form />
    </div>
  </div>
</section>

</template>

<script setup>
import ClientCard from '../../../shared/components/ClientCard.vue'
import ReviewsForm from './ReviewsForm.vue';
import { ref ,computed , inject } from 'vue';

const activeTab = ref('description');
const injectedProduct = inject('ProductData');

// optional safety wrapper
const product = computed(() => injectedProduct?.value);

</script>

<style lang="scss" scoped>
.description{
    width: 80%;
    margin-bottom: 6rem;
    p{
        color: var(--text-color);
        line-height: 1.8;
    }
     @media (max-width: 768px) {
        width: 100%;
    }
}
.no-review{
    border: 1px solid #efeded;
    border-radius: 15px;
    font-size: 1.56rem;
    color: var(--text-secondary);
    padding: 60px 20px;
    margin-bottom: 30px;
    font-weight: 500;
}
.tab-btn {
  background: none;
  border: none;
  padding: 10px 0;
  font-weight: 500;
  color: var(--color-secondary);
  position: relative;
}

.tab-btn.active {
  color: var(--color-primary-1); 
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary-1);
}

.tab-panel {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>