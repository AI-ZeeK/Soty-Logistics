import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal, setData, setBox } from "./features/AppSlice";
import Modal from "./components/Modal";
import Card from "./components/Card/Card";
function App() {
	const { isModal, data } = useSelector((state: any) => state.app);
	const dispatch = useDispatch();

	const handleChange = (e: any) => {
		dispatch(setData({ ...data, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(setBox(data));
		console.log(data);
	};
	const handleAddItems = () => {
		dispatch(toggleModal());
	};
	return (
		<div className="app">
			<div className="app-items">
				<div className="items-box">
					<div className="my-grid p-1 justify-center items-center">
						<Card />
					</div>
				</div>
				<div
					className={`${
						isModal ? "modal-bg active" : "modal-bg"
					} flex justify-center items-center`}>
					<Modal />
				</div>
			</div>

			<div className="add-icon" onClick={handleAddItems}>
				{isModal ? (
					<AiOutlineClose className="icon" />
				) : (
					<AiOutlinePlus className="icon" />
				)}
			</div>
		</div>
	);
}

export default App;
