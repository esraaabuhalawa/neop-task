<template>
    <section class="client">
        <div class="d-flex flex-wrap gap-3 align-items-center">
            <div class="image">
                <img :src="review?.userAvatar" @error="onImageError" :alt="review?.userName">
            </div>
            <div>
                <h4 class="client-name mb-0 pb-0">{{ review?.userName }}</h4>
            </div>
        </div>
        <div class="review">
            <p class="text">
               {{ review?.comment }}
            </p>
            <div class="overflow-hidden mt-1">
                <rating-component :rating="review?.rating"></rating-component>
            </div>
        </div>
    </section>
</template>
<script setup>
import RatingComponent from './RatingComponent.vue';
const props = defineProps({
    review:{
        type: Object
    }
})
const fallbackImage = '/images/user.jpg'

const onImageError = (event) => {
  event.target.onerror = null   
  event.target.src = fallbackImage
}

</script>
<style lang="scss" scoped>
.client {
    padding: 28px 20px;
    margin-bottom: 20px;
    width: 80%;
    border-bottom: 1px solid #dde3e7;
    background: var(--bg-color);
}

.image {
    width: 63px;
    height: 63px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;

    img {
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
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
        margin-top: 20px;
        color: #2e4758;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.5;
    }
}
</style>