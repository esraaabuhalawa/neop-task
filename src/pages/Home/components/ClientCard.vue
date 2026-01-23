<template>
    <section class="client">
        <div class="d-flex flex-wrap gap-3 align-items-center">
            <div class="image">
                <img src="../../assets/images/user.jpg" alt="">
            </div>
            <div>
                <h4 class="client-name mb-0 pb-0">Rashed Kabir</h4>
                <span class="client-position">Miami, USA</span>
            </div>
        </div>
        <div class="review">
            <p class="text">
                “Game-changer! Boosted efficiency, simplified tasks, and Highly recommended!”
            </p>
            <div class="d-flex flex-wrap justify-content-between align-items-center">
                <div class="overflow-hidden">
                    <rating-component :rating="4"></rating-component>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path
                            d="M14.9144 8.49168C11.9904 16.0466 5.85001 15.3897 2.92097 11.2463C-0.00807471 7.10302 3.65702 1.75794 6.8734 1.10099C10.0898 0.444038 15.2068 2.9076 15.1979 11.1467C15.186 22.1234 5.0344 32.64 3.91886 33.5635"
                            stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" />
                        <path
                            d="M33.1168 8.49168C30.1928 16.0466 24.0524 15.3897 21.1234 11.2463C18.1943 7.10302 21.8594 1.75794 25.0758 1.10099C28.2922 0.444038 33.4092 2.9076 33.4003 11.1467C33.3884 22.1234 23.2368 32.64 22.1212 33.5635"
                            stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import RatingComponent from "../common/RatingComponent.vue";
</script>
<style lang="scss" scoped>
.client {
    border-radius: 20px;
    padding: 38px 50px;
    border-radius: 20px;
    border: 1.2px solid #E9E9E9;
    background: #FFF;
}

.image {
    width: 63px;
    height: 63px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
}

.client-name {
    color: #1B1B1B;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
}

.client-position {
    color: rgba(27, 27, 27, 0.50);
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
}

.review {
    .text {
        margin-top: 40px;
        margin-bottom: 60px;
        color: #000;
        font-size: 22px;
        font-weight: 400;
        line-height: 44px;
    }
}
</style>