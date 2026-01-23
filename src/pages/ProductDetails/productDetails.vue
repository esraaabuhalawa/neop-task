<template>
    <div class="d-flex justify-content-between flex-column w-100 min-vh-100 position-relative">
        <div>
            <Navbar></Navbar>
            <main class="main-content">
                <section class="container">
                    <nav style="--bs-breadcrumb-divider: '>';margin-top: 8rem;" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item non-active"><router-link to="/">Home</router-link></li>
                            <li class="breadcrumb-item non-active" aria-current="page">Coffee Beans</li>
                            <li class="breadcrumb-item active" aria-current="page">Brazilian Roasted Coffee</li>
                        </ol>
                    </nav>

                    <ProductInfo />
                    <Clients/>
                    <reviews-form />
                </section>
            </main>
        </div>
        <FooterItem />
    </div>
</template>

<script setup>
import Navbar from "../../shared/components/Navbar.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/products"; // Pinia store
import ProductInfo from "./components/productInfo.vue";
import FooterItem from "../../shared/components/FooterItem.vue";
import Clients from "./components/Clients.vue";
import ReviewsForm from "./components/ReviewsForm.vue";

const store = useStore();
const route = useRoute();

// Fetch product from Pinia store
// const product = computed(() => store.product || {
//   mainImage: "",
//   subImages: [
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuBfW_YDuR3p0EzOcaMfA6Mtj5aDqdV9Sa9RpMnHv8qmK-eRD7PgM6LTiHddpaKacsBdEI-TBnsaiKQTGO-5obo14nsGKZovrd6gJJh2efFPmxtuVeAykNy5S3r4gBp1Ji2UEGhBjKOUVgVRBn-Fwd05HATli5BQrY8EAr_dac3I5NC2jknRXV3hlwG7N7Hym7w2H750LyscyIh7yFivJ-TMqVfoA3igfwTqe6IbVZtxA1xSPshE8iBmG1rUlrkgw9ecpGj9MZzHVcc",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuAy9288Mit8YAX72TipwrlRnq2n9ca_Ux7XXVVfcqUH8IbL2jSCTfZIona59sSBKCeVXcwole7pLwuo4u_WJ0WHHDyqCGWGXCyblqeSTM0o64xSehlcAdtFU7WkRdcM78nFyb36Tf3jgJzipX1ntI0bstbr5GzF0-u5eDngrxsNglWsRK_RiF0piX57lTTfeDc6coShz8R6ZkNAawdKguiPl4LpkZzmzRJL9yZcV_uKbKzjeLXTzr0FOs5LmiPEk4pSHaXzDedEqa8",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuB-m2u7pH99u1ZfX296g6FOdxVxtgRwqnUHYxTemm1v8Xw2sdnUj24L2MEbhbbNouSuQo1SQtxgTWgv1xlVBUwmBWZ8Py57hz5btKZLXBhl1VXqv5LL-8u6vkLFOlPd2ZWpeZ8LqL7XFM7asPRTXyDYJcY1Bc1dpopdzHP_0GD7FKdkGgwzOVYblwushVAMkihB2IrBcrjrkD_1WKVDwR8Kzs5zp4w0ihyo_KCvQ33rhTzT7wFmWzvKemdqZMLIj1hFYkzAf0_gx9Q",
//     "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kn1mB7ONmjrW28Zbcbre8rVmHhFLFHZToXjjekUVuGIO4ch5Qrjxr1rXIiroX-xU0mm38OFMGlunB6iAXpN8nVwbH5cwM4goMGx8PZC40XiHCRXlhyo6Fge5U-_SF6H9Xwqht8dXkPXM6pqKLvm7UjQ46I5iwL1_x2W1CWu2rWqz8c-x0XYpTFQkk2FtfKyeOf7OCEsZImYMCO30xdSqoVyTUQyMH6EgZ1TjgqzQdHEE44C8cVBXN8zKZ_HxXkVFddEQTZjB90Y"
//   ],
//   title: "",
//   price: 0,
//   discountPercent: 0,
//   subDescription: "",
//   description: "",
// });


// Load product
onMounted(() => {
    const id = route.params.id;
    store.getProduct(id);
});
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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    transform: rotate(180deg);
}

/* RTL */
[dir="rtl"] .breadcrumb-item+.breadcrumb-item::before {
    /* or "＼" if you want */
    padding: 0 0.5rem;
    float: right;
}

// button.cart {
//     background: #000;
//     color: #fff;
//     border-radius: 0;
//     font-family: var(--poppins);
//     font-size: 0.8rem;
//     border: 2px solid #333;
// }

// .product_body {
//     display: table-cell;
//     margin: auto 0;

//     h3 {
//         font-family: serif;
//         font-size: 2rem;
//     }

//     p {
//         font-size: 0.8rem;
//         color: var(--second-color);
//         margin-top: 10px;
//         width: 100%;
//     }

//     .price {
//         font-weight: bold;
//     }
// }

// #product_images img {
//     width: 80%;
// }

// .mimage {
//     -webkit-transition: all 0.35s ease-in-out;
//     transition: all 0.35s ease-in-out;
// }

// .mimage:hover {
//     -webkit-transform: scale(1.02);
//     transform: scale(1.02);
//     cursor: pointer;
//     border-bottom: 1px solid var(--primary-color);
// }

// h4 {
//     font-size: 1.7rem;
//     font-family: serif;
// }

// .selected {
//     border: 1px solid var(--primary-color);
// }

// /***Start Of Description Part ***/
// #user_review {
//     margin-bottom: 3rem;
//     margin-top: 4rem;

//     nav {
//         border-top: 2px solid #9ba1a1;
//         margin-bottom: 2rem;
//     }

//     h3 {
//         font-family: serif;
//         font-size: 1.7rem;
//         color: #2f2f2e;
//     }

//     p {
//         font-size: 0.8rem;
//         color: var(--second-color);
//         margin-top: 10px;
//         font-family: var(--poppins);
//         width: 100%;
//     }

//     button {
//         border: 0;
//         background: none;
//         font-family: var(--poppins);
//         padding: 1rem 0;
//         font-weight: 500;
//         color: #000;
//         font-size: 0.9rem;
//     }
// }

// input,
// label {
//     font-family: var(--poppins);
//     font-size: 0.85rem;
//     font-weight: 500;
// }

// ::-webkit-input-placeholder {
//     font-size: 0.9rem;
//     font-family: var(--poppins);
// }

// ::-moz-placeholder {
//     font-size: 0.9rem;
//     font-family: var(--poppins);
// }

// :-ms-input-placeholder {
//     font-size: 0.9rem;
//     font-family: var(--poppins);
// }

// ::placeholder {
//     font-size: 0.9rem;
//     font-family: var(--poppins);
// }

// button.cart:hoverinput[type="submit"] {
//     border-radius: 0;
//     font-size: 15px;
//     padding: 10px 18px;
//     background: #000;
//     color: #fff;
//     -webkit-transition: all 0.35s ease-in-out;
//     transition: all 0.35s ease-in-out;
// }

// button.cart:hover,
// input[type="submit"]:hover {
//     border: 2px solid #fff;
//     background: var(--primary-color);
// }

// #user_review button.active {
//     border-top: 2px solid var(--primary-color);
// }

// #user_review button.deActive {
//     border-top: 1px solid transparent;
// }

// .sale {
//     left: 25px;
//     top: 20px;
// }

// /*********************************/
// @media (min-width: 768px) {
//     #user_review {

//         h3,
//         h4 {
//             font-size: 1.9rem;
//         }

//         p {
//             font-size: 0.8rem;
//             width: 90%;
//         }
//     }

//     .product_body {
//         p {
//             font-size: 0.9rem;
//             width: 80%;
//         }
//     }

//     button.cart {
//         font-size: 0.9rem;
//     }

//     input,
//     label {
//         font-size: 0.95rem;
//     }
// }

// @media (min-width: 1024px) {
//     #user_review {
//         p {
//             width: 90%;
//         }
//     }

//     .product_body {
//         p {
//             font-size: 0.9rem;
//         }
//     }

//     button.cart {
//         font-size: 1rem;
//     }

//     input,
//     label {
//         font-size: 1rem;
//     }
// }
</style>