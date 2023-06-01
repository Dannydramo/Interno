import axios from "axios";
type FetchStatus = "idle" | "loading" | "success" | "error";
interface FetchDataResponse<T> {
  data: T | null;
  error: string | null;
  status: FetchStatus;
}

export const baseUrl: string = "https://bayut.p.rapidapi.com";
export const useFetch = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "88ac53fc34msh75964679f4e2962p1db6f7jsnaee7e75b6e55",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
