import useSWR from "swr";

const useGetOrders = () => {
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: { ApiKey: `${process.env.NEXT_PUBLIC_API_KEY}` },
    }).then((r) => r.json());

  const { data, error, isLoading } = useSWR("https://red-candidate-web.azurewebsites.net/api/Orders", fetcher);

  return { data, error, isLoading };
};

export default useGetOrders;
