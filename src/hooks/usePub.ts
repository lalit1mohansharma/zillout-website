import { useQuery } from "react-query";
import API from "../helpers/api";

export const getPubDetail = async (pub_id: string | undefined) => {
  const { data } = await API.get(`/api/v1/rbzo/pubs/customer/${pub_id}`);
  return data;
};

export const usePub = (pub_id: string | undefined) => {
  return useQuery(["pub", pub_id], () => getPubDetail(pub_id));
};
