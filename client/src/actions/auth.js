import { AUTH } from "../constants/actionTypes";
import * as api from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**sign in */
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
    toast.success("Sign in successful", { autoClose: 5000 });
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message); // Display error message from server in the toast
    } else {
      toast.error("Failed to sign in. Please try again.");
    }
  }
};

/**sign up */
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
    toast.success("Sign up successful", { autoClose: 5000 })
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message); // Display error message from server in the toast
    } else {
    toast.error("Failed to sign up. Please try again."); // Display error toast
  }
}
};
