<template>
    <div @click="scrollToTop()" :class="['back-to-top-btn', { 'go-top': isTop }]">
        <i>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m5 15 7-7 7 7" />
            </svg>
        </i>

        <i>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m5 15 7-7 7 7" />
            </svg>
        </i>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  isTop.value = window.scrollY >= 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.back-to-top-btn {
    position: fixed;
    cursor: pointer;
    bottom: 110%;
    right: 15px;
    background-color: #3B2F2F;
    box-shadow: 2px 2px 3px #333;
    z-index: 10000;
    width: 40px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    transition: .9s;
    border-radius: 50%;
    border: 1px solid #3B2F2F;

    &:hover {
        background: #fff;

        i {
            color: #3B2F2F;
        }
    }

    i {
        position: absolute;
        color: #fff;
        top: 44%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin: 0 auto;
        -webkit-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;
        font-size: 20px;

        &:last-child {
            opacity: 0;
            visibility: visible;
            top: 60%;
        }
    }

    &:hover,
    &:focus {
        color: #fff;
        &::before {
            opacity: 1;
            visibility: visible;
        }
    }

    &.go-top {
        bottom: 20px;
    }
}
</style>