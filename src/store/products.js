// stores/product.js
import { defineStore } from "pinia";
import api from "../Services/apiclient";

import { useMainStore } from "./mainStore";

export const useProductStore = defineStore("products", {

  state: () => ({
    allProducts: null,
    cart: [],
  }),

  getters: {
    products(state) {
      if (!state.allProducts) return [];
      return state.allProducts;
    },

    cartItems(state) {
      const mainStore = useMainStore();

      if (!state.allProducts) return [];

      const products = state.allProducts[mainStore.currentLanguage] || [];
      //console.log("Cart Items:", state.cart); // Debugging log
      return state.cart
        .map(item => {
          const product = products.find(p => p.id === item.id);

          if (!product) return null;

          return {
            product: { ...product },
            quantity: item.quantity
          };
        })
        .filter(Boolean);
    }
  },

  actions: {
    async getProductDetails() {
      try {
        const response = await api.get("/data/Data.json");
        this.allProducts = response.data.products;
      } catch (error) {
        console.log(error);
      }
    },

    addToCart(product, qty) {
      const existingItem = this.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity = qty;
      } else {
        this.cart.push({
          id: product.id,
          quantity: qty
        });
      }
    },

    // increase quantity
    increaseQty(productId) {
      const item = this.cart.find((i) => i.product.id === productId);
      if (item) item.quantity++;
    },

    // decrease quantity (auto remove if 0)
    decreaseQty(productId) {
      const item = this.cart.find((i) => i.product.id === productId);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
      }
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.product.id !== productId);
    },

    clearCart() {
      this.cart = [];
    },

    setQuantity(productId, qty) {
      const item = this.cart.find((i) => i.product.id === productId);
      if (!item) return;

      if (qty <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = qty;
      }
    },

    // Alias for setQuantity to match component expectations
    updateCartQuantity(productId, qty) {
      this.setQuantity(productId, qty);
    },
  },
});
