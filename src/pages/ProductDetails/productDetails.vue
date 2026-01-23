<template>
    <div class="d-flex justify-content-between flex-column w-100 min-vh-100 position-relative">
        <div>
            <Navbar :SpecialStyle="true" />
            <main class="main-content">
                <section class="container">
                    <nav style="--bs-breadcrumb-divider: '>';margin-top: 8rem;" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item non-active"><router-link to="/">{{ $t('breadcrumb.home')
                                    }}</router-link></li>
                            <li class="breadcrumb-item non-active" aria-current="page">{{ $t('breadcrumb.category') }}
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumb.product') }}</li>
                        </ol>
                    </nav>

                    <ProductInfo />
                    <Clients />
                    <reviews-form />
                </section>
            </main>
        </div>
        <FooterItem />
    </div>
</template>

<script setup>
import Navbar from "../../shared/components/Navbar.vue";
import ProductInfo from "./components/productInfo.vue";
import FooterItem from "../../shared/components/FooterItem.vue";
import Clients from "./components/Clients.vue";
import ReviewsForm from "./components/ReviewsForm.vue";
</script>

<style lang="scss" scoped>
.breadcrumb {
    .non-active {
        a {
            color: #939393;
            text-decoration: none;
        }

        color:#939393
    }

    .active {
        color: #1a4464;
        font-weight: 500;
    }

    li {
        &:lang(ar) {
            font-family: 'Tajawal', sans-serif;
        }

        &:lang(en) {
            font-family: "Quicksand", sans-serif;
        }
    }
}

.breadcrumb-item+.breadcrumb-item::before {
    content: '\f054';
    /* FontAwesome chevron-right unicode */
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    /* required for solid icons */
    display: inline-block;
    margin: 6px 0.5rem;
    font-size: 10px;
    color: #939393;
    vertical-align: middle;
}

/* RTL: flip chevron */
[dir="rtl"] .breadcrumb-item+.breadcrumb-item::before {
    -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
            transform: rotate(180deg);
}

/* RTL */
[dir="rtl"] .breadcrumb-item+.breadcrumb-item::before {
    padding: 0 0.5rem;
    float: right;
}
</style>