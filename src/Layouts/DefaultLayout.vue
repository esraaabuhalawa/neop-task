<!-- App.vue or your main layout -->
<template>
    <Transition name="fade" mode="out-in">
        <div v-if="ui.loading" key="loader" class="d-flex flex-column min-vh-100">
            <PreLoader />
        </div>
        <div v-else key="content" class="d-flex flex-column min-vh-100">
            <Navbar />
            <main class="flex-fill">
                <router-view />
            </main>
            <FooterItem />
        </div>
    </Transition>
</template>

<script setup>
import Navbar from "../shared/components/Navbar.vue"
import FooterItem from "../shared/components/FooterItem.vue"
import PreLoader from '../shared/components/PreLoader.vue'
import { useUIStore } from '../store/uiStore'
import { watch } from 'vue'
import { useMainStore } from '../store/mainStore'

const ui = useUIStore()
const langStore = useMainStore()

// Watch for language changes and show loader
// watch(() => langStore.currentLanguage, () => {
//     ui.start()
//     // Loader will be stopped by page components after their data loads
// })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>