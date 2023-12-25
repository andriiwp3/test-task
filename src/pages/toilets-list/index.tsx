import Filters from "@/components/Filters";
import LooDetails from "@/components/LooDetails";
import LooList from "@/components/LooList";
import Pagination from "@/components/Pagination";
import useLooList from "@/hooks/useLooList";

const ToiletsList = () => {
  const {
    isAuthenticated,
    selectedLoo,
    filters,
    currentPage,
    looData,
    loading,
    error,
    handleFilterChange,
    nextPage,
    prevPage,
    setSelectedLoo
  } = useLooList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <div className="flex space-between">
        <div className="w-[500px]">
          <LooList
            looData={looData}
            selectedLoo={selectedLoo}
            onLooSelect={setSelectedLoo}
          />
          <Pagination
            currentPage={currentPage}
            onPrevPage={prevPage}
            onNextPage={nextPage}
          />
        </div>
        {isAuthenticated && selectedLoo && <LooDetails looId={selectedLoo} />}
      </div>
    </>
  );
};

export default ToiletsList;
