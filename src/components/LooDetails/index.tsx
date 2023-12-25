import { useQuery } from "@apollo/client";
import { GET_LOO_DETAILS } from "@/utils/graphql/queries";
import { NextPage } from "next";
import { format } from "date-fns";

interface ILooDetails {
	looId: string
}

const LooDetails: NextPage<ILooDetails> = ({ looId }) => {
	const { data, loading, error } = useQuery(GET_LOO_DETAILS, {
	  variables: { id: looId },
	  skip: !looId,
	});

	const formatDate = (dateString: string) => {
		return format(new Date(dateString), 'PPPppp');
	  }
  
	if (!looId) return null;
	if (loading) return <p>Loading details...</p>;
	if (error) return <p>Error loading details</p>;
  
	const loo = data ? data?.loo : null;
  
	return (
		<div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-5">
		  {loo && (
			<div>	
			  <h3 className="text-lg font-semibold mb-2">{loo?.name}</h3>
			  <p>Created at: {formatDate(loo?.createdAt)}</p>
			  <p>Updated at: {formatDate(loo?.updatedAt)}</p>
			  <p>Active: {loo?.active ? 'Yes' : 'No'}</p>
			  {loo?.area && (
				<div>
				<p>Area Name: {loo?.area[0]?.name}</p>
				<p>Area Type: {loo?.area[0]?.type}</p>
				</div>
         		 )}
			</div>
		  )}
		</div>
	  );
	};
	
	export default LooDetails;