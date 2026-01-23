<template>
    <section class="container pt-2 mb-3">
        <div :class="explore ? 'd-flex justify-content-between align-items-center flex-wrap gap-3' : ''">
            <div :class="!explore ? 'text-center' : ''">
                <h2>{{ headingcontent.title }}</h2>
                <p>
                    {{ headingcontent.desc }}
                </p>
            </div>
            <div :class="!explore ? 'd-flex justify-content-end mb-5' : ''">
                <router-link to="" class="btn"> Explore all</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    headingcontent: {
        type: Object,
        required: true
    },
    explore: {
        type: Boolean,
        required: false
    }
})
</script>

<style lang="scss" scoped>
h2 {
    color: #1F2224;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    font-family: "Tajawal", sans-serif;
    margin-bottom: 0;
}

P {
    color: #1F2224;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 22px;
    font-weight: 400;
    line-height: 40px;
    font-family: "Tajawal", sans-serif;
    margin-top: -3px;
}

.btn {
    border-radius: 10px;
    border: 1px solid #004876;
    width: 113px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #004876;
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    transition: all .3s ease-in-out;

    &:hover {
        color: #fff;
        background: #004876;
    }
}

@media screen and (min-width: 992px) {
    h2 {
        font-size: 50px;
    }
}
</style>