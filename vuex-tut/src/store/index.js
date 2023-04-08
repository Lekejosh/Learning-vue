import { createStore } from "vuex";

//firebase import
import { auth } from "../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("User State Changed: ", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      console.log("sign Up action");

      //async code
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res) {
        console.log(res);
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not signup user");
      }
    },
    async login(context, { email, password }) {
      console.log("Login action");

      //async code
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("Could not login");
      }
    },
    async logout(context) {
      console.log("logout action");
      await signOut(auth);
      context.commit("setUser", null);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

// export the store
export default store;
