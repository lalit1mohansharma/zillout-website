import { useQuery } from "react-query";
import API from "../helpers/api";

const getLandingPage = async (page_no: number, filter: string) => {
  const { data } = await API.get(
    `/api/v1/rbzo/pubs/home?page_number=${page_no}&filter=${filter}`
  );
  return data;
};

export const useLanding = (page_no: number, filter: string) => {
  return useQuery(["overview", page_no, filter], () =>
    getLandingPage(page_no, filter)
  );
};
