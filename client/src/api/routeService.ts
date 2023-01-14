import axios from "axios";

const API = axios.create({ baseURL: `https://localhost:5000` });

const API_URL = "/app/";

const createRoute = async (routeData: any) => {
	const response = await API.post(API_URL + "post", routeData);

	return response.data;
};

const getRouteAPI = async () => {
	const response = await API.get(API_URL);
	return response.data;
};

const updateRoute = async (routeID: any, routeData: any) => {
	const response = await API.patch(API_URL + routeID, routeData);
	console.log(API_URL + routeID, "new one", routeData);
	return response.data;
};
const deleteRoute = async (routeID: any) => {
	const response = await API.delete(API_URL + routeID);
	return response.data;
};

const routeService = {
	createRoute,
	getRouteAPI,
	updateRoute,
	deleteRoute,
};

export default routeService;
