import { ChangeEvent, FC, memo } from "react";

export type IFilters = {
	filters: {
	  active: boolean;
	  noPayment: boolean;
	};
	onFilterChange: (filters: IFilters['filters']) => void;
  };

const Filters: FC<IFilters> = memo(({ filters, onFilterChange }) => {
	console.log( filters, onFilterChange);
	const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
	  onFilterChange({
		...filters,
		[e.target.name]: e.target.checked,
	  });
	};
  
	return (
		<div className="flex items-center gap-10">
		<div>
		Filters: 
		</div>
		<div>
		<label className="flex items-center space-x-2">
		  <input 
			type="checkbox" 
			name="active" 
			checked={filters.active} 
			onChange={handleFilterChange} 
			className="form-checkbox text-blue-500"
		  />
		  <span className="text-sm text-gray-700">Active</span>
		</label>
		<label className="flex items-center space-x-2">
		  <input 
			type="checkbox" 
			name="noPayment" 
			checked={filters.noPayment || false} 
			onChange={handleFilterChange}
			className="form-checkbox text-blue-500"
		  />
		  <span className="text-sm text-gray-700">No Payment</span>
		</label>
		</div>
	  </div>
	);
  })


  Filters.displayName = 'Filters'
  
  export default Filters;
  