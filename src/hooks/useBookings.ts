import { useQuery } from "react-query";
import API from "../helpers/api";

export const getBookings = async () => {
    const userId = localStorage.getItem("userId")
  const { data } = await API.post(
    `/api/v1/rbzo/users/${userId}/bookings`
  );
  return data;
};

export const useBookings = () => {
  return useQuery("bookings", () => getBookings());
};
