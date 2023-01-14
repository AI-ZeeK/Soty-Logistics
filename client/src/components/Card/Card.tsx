import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoute } from "../../features/AppSlice";
import Route from "./Route";

const Card = () => {
	const { route, isLoading, isError, isSuccess, messages, update, box } =
		useSelector((state: any) => state.app);

	const dispatch = useDispatch();

	const routeDetails = route;
	useEffect(() => {
		if (isError) {
			console.log(messages, "grey");
		}

		if (isSuccess) {
			console.log("success");
		}
		dispatch(getRoute(1));
	}, [isError, dispatch, isSuccess, messages, update, route.length]);

	return (
		<>
			{routeDetails.length > 0 ? (
				routeDetails.map((routeDetail: any) => (
					<Route key={routeDetail._id} routeDetail={routeDetail} />
				))
			) : (
				<>
					<div className="text-black p-2 flex items-center justify-center">
						<h1 className="text-4xl">You are yet to set routes details </h1>
					</div>
				</>
			)}
			{isLoading && <h1>Loading . . . </h1>}
		</>
	);
};

export default Card;
