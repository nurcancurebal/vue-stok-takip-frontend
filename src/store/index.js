import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    inventory: [],
    current: []
  },
  getters: {
    inventory(state) {

      return state.inventory;
    },
    current(state) {

      return state.current;
    }
  },
  mutations: {
    INVENTORY(state, context) {

      state.inventory = context;
    },

    CURRENT(state, context) {

      state.current = context;
    }
  },
  actions: {

    async getInventory(context, payload) {

      try {

        const result = await axios
          .get(`http://localhost:3000/inventory?page=${payload.page}&limit=${payload.limit}&sort=${payload.sort}`);

        console.log("getInventory", result.data);

        context.commit('INVENTORY', result.data);

        return result;

      } catch (error) {

        console.error("getInventory", error);

      };
    },

    async getInventoryCount(context, payload) {

      try {

        const result = await axios
          .get("http://localhost:3000/inventory/list/count");

        console.log("getInventoryCount", result.data.count);

        return result.data.count;

      } catch (error) {

        console.error("getInventoryCount", error);

      };
    },

    async getCurrentCount(context, payload) {

      try {

        const result = await axios
          .get("http://localhost:3000/inventory/current/count");

        console.log("getCurrentCount", result.data.count);

        return result.data.count;

      } catch (error) {

        console.error("getCurrentCount", error);

      };
    },

    async getListBarcode(context, payload) {

      try {

        const result = await axios
          .get(`http://localhost:3000/inventory/${payload.barcode}`);

        console.log("getListBarcode", result.data);

        return result;

      } catch (error) {

        console.error("getListBarcode", error);

      };
    },

    async getCurrent(context, payload) {

      try {

        const result = await axios
          .get(`http://localhost:3000/inventory/current?page=${payload.page}&limit=${payload.limit}&sort=${payload.sort}`);

        console.log("getCurrent", result.data);

        context.commit('CURRENT', result.data);

        return result.data;

      } catch (error) {

        console.error("getCurrent", error);

      };
    },

    async entryOne(context, payload) {

      try {

        const result = await axios.post("http://localhost:3000/Inventory", {
          "barcode": payload.barcode,
          "productname": payload.productname,
          "category": payload.selectedCategory,
          "subcategory": payload.selectedSubCategory,
          "supplier": payload.supplier,
          "brand": payload.selectedBrand,
          "unit": payload.unit,
          "quantity": payload.quantity,
          "unitprice": payload.unitprice,
        });

        console.log("entryOne", result.data);

        return result;

      } catch (error) {

        console.error("entryOne", error);

      };
    },

    async checkoutOne(context, payload) {

      try {

        const result = await axios.post(`http://localhost:3000/inventory/${payload.barcode}`, {
          "barcode": payload.barcode,
          "productname": payload.productname,
          "category": payload.selectedCategory,
          "subcategory": payload.selectedSubCategory,
          "supplier": payload.supplier,
          "brand": payload.selectedBrand,
          "unit": payload.unit,
          "quantity": payload.quantity,
          "unitprice": payload.unitprice,
        });

        console.log("checkoutOne", result.data);

        return result;

      } catch (error) {

        console.error("checkoutOne", error);

      };
    },
  }
})