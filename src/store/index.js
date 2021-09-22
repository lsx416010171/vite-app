import { createStore } from "vuex";
import mutation from "./mutations";
import action from "./actions";

export default createStore({
  state: {
    couter: 0,
  },
  mutation,
  action,
});
