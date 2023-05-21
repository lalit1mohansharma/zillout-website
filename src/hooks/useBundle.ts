import { useQuery } from "react-query";
import API from "../helpers/api";

export const getEventBundle = async (event_type: string | undefined) => {
  const { data } = await API.get(
    `/api/v1/rbzo/events/list_events/${event_type}`
  );
  return data;
};

export const useBundle = (event_type: string | undefined) => {
  return useQuery(["bundle", event_type], () => getEventBundle(event_type));
};
