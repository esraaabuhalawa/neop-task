<template>
    <section class="client">
        <div class="d-flex flex-wrap gap-3 align-items-center">
            <div class="image">
                <img src="/images/user.jpg" alt="">
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
            <div class="overflow-hidden mt-1">
                <rating-component :rating="4"></rating-component>
            </div>
        </div>
    </section>
</template>
<script setup>
import RatingComponent from './RatingComponent.vue';
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
    color: rgba(27, 27, 27, 0.5);
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
}

.review {
    .text {
        margin-top: 40px;
        color: #2e4758;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.5;
    }
}
</style>