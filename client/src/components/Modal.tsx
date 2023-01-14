import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleModal,
	setData,
	setBox,
	createRoute,
} from "../features/AppSlice";

type Props = {};

const Modal = (props: Props) => {
	const { isModal, data, update } = useSelector((state: any) => state.app);
	const dispatch = useDispatch();
	const {
		currentLocation,
		destination,
		Route,
		productName,
		itemDescription,
		estimatedDeliveryDate,
	} = data;

	const handleChange = (e: any) => {
		dispatch(setData({ ...data, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(createRoute(data));
		console.log(data);
	};
	return (
		<>
			<div className="flex align-items md:max-w-md justify-center border shadow lg:p-10 py-6 p-3  mt-5  rounded-lg bg-white modal-box ">
				<form
					action=""
					onSubmit={handleSubmit}
					className="grid md:flex md:flex-col gap-2  lg:px-4 p-2 justify-center  border-green-900">
					<div className="flex gap-3 justify-center items-center p-1">
						<h1 className="text-2xl">
							{update ? "Update a Route" : "Create a new Route"}{" "}
						</h1>
					</div>
					<div className="flex  flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<input
							type="text"
							value={productName}
							name="productName"
							onChange={handleChange}
							required
							placeholder="What's the product name?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm focus:bg-emerald-100 transition duration-200"
						/>
					</div>
					<div className="flex flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<input
							type="text"
							value={itemDescription}
							name="itemDescription"
							onChange={handleChange}
							required
							placeholder="What's the Item Description?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm focus:bg-emerald-100 transition duration-200"
						/>
					</div>
					<div className="flex flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<input
							type="text"
							value={currentLocation}
							name="currentLocation"
							onChange={handleChange}
							required
							placeholder="What's the current location?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm focus:bg-emerald-100 transition duration-200"
						/>
					</div>

					<div className="flex flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<input
							type="text"
							name="destination"
							value={destination}
							required
							onChange={handleChange}
							placeholder="What's the destination?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm focus:bg-emerald-100 transition duration-200"
						/>
					</div>
					<div className="flex flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<input
							type="text"
							name="estimatedDeliveryDate"
							value={estimatedDeliveryDate}
							required
							onChange={handleChange}
							placeholder="What's the estimated delivery date?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm focus:bg-emerald-100 transition duration-200"
						/>
					</div>
					<div className="flex flex-col lg:gap-3 gap-1 justify-center items-center lg:p-2 p-1  shadow-md border rounded-md border-sky-700">
						<textarea
							id=""
							cols={30}
							rows={1}
							name="Route"
							value={Route}
							onChange={handleChange}
							placeholder="What's the route?"
							className="p-3 w-full border-1 rounded-md outline-none lg:text-lg text-sm max-h-64 focus:bg-emerald-100 transition duration-200"></textarea>
					</div>
					<button
						type="submit"
						className=" p-2 border border-emerald-700 text-xl bg-emerald-900 shadow-md active:shadow text-white rounded-md transition duration-200 hover:bg-emerald-800 active:scale-95 cursor-pointer ">
						{update ? "Update" : "Create"}
					</button>
					{/* {update && (
            <button
                   onClick={Clear}
                       type="button"
             className=" p-2 border border-rose-700 text-xl bg-rose-900 shadow-md active:shadow text-white rounded-md transition duration-200 hover:bg-rose-800 active:scale-95 cursor-pointer ">
             Clear
         </button>
                )} */}
				</form>
			</div>
		</>
	);
};

export default Modal;
