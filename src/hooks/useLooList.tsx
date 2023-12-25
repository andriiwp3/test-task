import { useCallback, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import { IFilters } from "@/interfaces/common";
import { GET_LOOS } from "@/utils/graphql/queries";

function useLooList() {
  const { data: session } = useSession();
  const isAuthenticated = !!session;

  const [selectedLoo, setSelectedLoo] = useState<string | null>(null);
  const [filters, setFilters] = useState({ active: true, noPayment: true });
  const memoizedFilters = useMemo(() => filters, [filters]);


  const [currentPage, setCurrentPage] = useState(1);

  const pagination = { limit: 10, page: currentPage };
  const sort = "NEWEST_FIRST";

  const { loading, error, data } = useQuery(GET_LOOS, {
    variables: { filters, pagination, sort },
  });

  const handleFilterChange = useCallback((newFilters: IFilters) => {
	setFilters(newFilters);
	setSelectedLoo(null);
	setCurrentPage(1);
  }, []);

  const nextPage = useCallback(() => {
	setCurrentPage(currentPage => currentPage + 1);
	setSelectedLoo(null);
  }, []);

  const prevPage = useCallback(() => {
	setCurrentPage(currentPage => {
	  if (currentPage > 1) {
		setSelectedLoo(null);
		return currentPage - 1;
	  }
	  return currentPage;
	});
  }, []);

  return {
    isAuthenticated,
    selectedLoo,
    filters: memoizedFilters,
    currentPage,
    looData: data?.loos?.loos,
    loading,
    error,
    handleFilterChange,
    nextPage,
    prevPage,
    setSelectedLoo,
  };
}

export default useLooList;
