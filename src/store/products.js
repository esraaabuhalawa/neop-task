// stores/product.js
import { defineStore } from "pinia";
import api from "../Services/apiclient";

export const useProductStore = defineStore("products", {
  state: () => ({
    allProducts: null,
    cart: [],
  }),

  getters: {
    products(state) {
      return state.allProducts;
    },
    cartItems(state) {
      return state.cart;
    },
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
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity = qty;
      } else {
        this.cart.push({
          product,
          quantity: qty,
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
