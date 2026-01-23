<template>
    <!-- Products Section -->
    <section class="py-5">
        <div class="container">
            <header class="text-center mb-4">
                <span>Products</span>
                <h2>Special to Try</h2>
            </header>


            <!-- Filter Tabs -->
            <div class="d-flex gap-3 justify-content-center mb-5 flex-wrap flex-lg-nowrap" id="filterTabs">
                <button @click="filterCategories(1)" :class="{ active: activeSection === 1 }">All categories</button>
                <button @click="filterCategories(2)" :class="{ active: activeSection === 2 }">Best coffee</button>
                <button @click="filterCategories(3)" :class="{ active: activeSection === 3 }">New coffee</button>
                <button @click="filterCategories(4)" :class="{ active: activeSection === 4 }">Packing</button>
                <button @click="filterCategories(5)" :class="{ active: activeSection === 5 }">Coffee</button>
                <button @click="filterCategories(6)" :class="{ active: activeSection === 6 }">Coffee equipment</button>
            </div>

            
            <section v-if="activeSection === 1">
                <!-- Products Grid -->
               <div class="row g-4">
                    <!-- Product 1 -->
                    <div class="col-md-6 col-lg-3" v-for="i in 4" :key="i">
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section v-else-if="activeSection === 2">
                <div class="row g-4">
                    <!-- Product 1 -->
                    <div class="col-md-6 col-lg-3" v-for="i in 4" :key="i">
                        <ProductCard />
                    </div>
                </div>
            </section>

        </div>
    </section>
    <!----->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../../../shared/components/ProductCard.vue';

const activeSection = ref(1)

const filterCategories = (item) => {
    activeSection.value = item
}

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


@media screen and (max-width:992px) {
    #filterTabs {
        button {
            padding: 15px 10px;
        }
    }
}
</style>