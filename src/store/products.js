import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    product: null,
    loading: false,
    cart: [],
  }),
  actions: {
    async getProduct(id) {
      // Fetch from API or JSON
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      this.product = data;
    },
    addToCart({ product, quantity }) {
      const existing = this.cart.find((p) => p.id === product.id);
      if (existing) existing.quantity += quantity;
      else this.cart.push({ ...product, quantity });
    },
  },
});
