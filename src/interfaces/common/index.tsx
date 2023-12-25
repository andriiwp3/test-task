export interface ILooList {
	loos: ILoo[];
	total: number;
	page: number;
	limit: number;
	pages: number;
	__typename: string;
}
export interface ILoo {
	id: string;
	name: string;
	active: boolean;
	area : IArea;
}
export interface IArea {
	name: string,
	type: string
}
export interface IFilters {
	active: boolean;
	noPayment: boolean;
};
export interface IFormInput {
	email: string;
	password: string;
}