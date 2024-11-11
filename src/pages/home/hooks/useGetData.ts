import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/api/countries/index.ts";

const useGetData = (sort: string) => {
  const {
    data: countriesList,
    isLoading: getLoading,
    isError: getIserror,
    refetch: getRefetch,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: () => getCountries(sort as string),
    gcTime: 1000 * 5,
    staleTime: 1000 * 5,
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { countriesList, getLoading, getIserror, getRefetch };
};

export default useGetData;
