import React from "react";
import { useDispatch } from "react-redux";
import { setDataId, getRoute, deleteRoute } from "../../features/AppSlice";

const Route = ({ routeDetail }: any) => {
	const dispatch = useDispatch();
	const handlePopulate = () => {
		dispatch(setDataId({ ...routeDetail }));
	};

	const handleDelete = async () => {
		await dispatch(deleteRoute(routeDetail._id));
		return () => dispatch(getRoute());
	};
	return (
		<>
			<div className=" my-card-width bg-white flex flex-col   py-4 px-2 rounded-md lg:gap-2 gap-1 lg:p-4 ">
				<div className="shadow  bg-white  p-1 flex justify-center  rounded ">
					{new Date(routeDetail.createdAt).toLocaleString("en-US")}
				</div>
				<div className="flex lg:gap-2 gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black text-md ">
						Tracking Number :
					</label>
					<h1 className="text-md">{routeDetail.trackingNumber}</h1>
				</div>
				<div className="flex lg:gap-2 gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black  text-md">
						Product Name :
					</label>
					<h1 className=" text-md">{routeDetail.productName}</h1>
				</div>
				<div className="flex  gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black  text-md">
						Item Description :
					</label>
					<h1 className="text-md">{routeDetail.itemDescription}</h1>
				</div>
				<div className="flex lg:gap-2 gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black text-md">
						Current Location :
					</label>
					<h1 className="text-md">{routeDetail.currentLocation}</h1>
				</div>

				<div className="flex gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black  text-md">
						Destination :
					</label>
					<h1 className="text-md">{routeDetail.destination}</h1>
				</div>
				<div className="flex  gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black  text-md">
						Chosen Route :
					</label>
					<h1 className=" text-md">{routeDetail.Route}</h1>
				</div>
				<div className="flex  gap-1 bg-white justify-center items-center p-2 shadow-md border rounded-md flex-wrap">
					<label htmlFor="" className="text-black text-md">
						Estimated Delivery Date :
					</label>
					<h1 className=" text-md">{routeDetail.estimatedDeliveryDate}</h1>
				</div>
				<div className="flex lg:gap-2 gap-1 justify-center items-center py-1">
					<button
						onClick={handleDelete}
						type="submit"
						className="w-full shadow-lg active:shadow-sm  p-2 border border-rose-700  text-md bg-rose-900 text-white rounded-md transition duration-200 hover:bg-rose-800 active:scale-95 cursor-pointer ">
						Delete
					</button>
					<button
						onClick={handlePopulate}
						type="submit"
						className="w-full shadow-lg active:shadow-sm  p-2 border border-emerald-700  text-md bg-emerald-900 text-white rounded-md transition duration-200 hover:bg-emerald-800 active:scale-95 cursor-pointer ">
						Update
					</button>
				</div>
			</div>
		</>
	);
};

export default Route;
