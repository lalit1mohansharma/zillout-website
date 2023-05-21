import { useQuery } from "react-query";
import API from "../helpers/api";

export const getEventDetail = async (event_id: string | undefined) => {
  const { data } = await API.get(`/api/v1/rbzo/events/customer/${event_id}`);
  return data;
};

export const useEvent = (event_id: string | undefined) => {
  return useQuery(["event", event_id], () => getEventDetail(event_id));
};
