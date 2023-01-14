import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import routeService from "../api/routeService";

interface stateType {
	isModal: boolean;
	data: any;
	box: any[];
	route: any[];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	messages: any;
	dataId: any[];
	update: boolean;
	updateDetails: string;
}
const initialState: stateType = {
	isModal: false,
	data: {
		currentLocation: "",
		destination: "",
		Route: "",
		productName: "",
		itemDescription: "",
		estimatedDeliveryDate: "",
	},
	box: [],
	route: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	messages: "",
	dataId: [],
	update: false,
	updateDetails: "",
};

// Create new Route
export const createRoute: any = createAsyncThunk(
	"route/create",
	async (routeData, thunkAPI) => {
		try {
			return await routeService.createRoute(routeData);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getRoute: any = createAsyncThunk(
	"route/getRoute",
	async (_: any, thunkAPI: any) => {
		try {
			// const token = thunkAPI.getState().auth.user.token;
			const x = await routeService.getRouteAPI();
			return x;
		} catch (error: any) {
			console.log(error, "error");
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const updateRoute: any = createAsyncThunk(
	"route/delete",
	async ([id, routeData]: any, thunkAPI: any) => {
		try {
			console.log(id, routeData, "ouyescliec", thunkAPI);
			return await routeService.updateRoute(id, routeData);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const deleteRoute: any = createAsyncThunk(
	"route/deleteRoute",
	async (id, thunkAPI) => {
		try {
			return await routeService.deleteRoute(id);
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const AppSlice = createSlice({
	name: "App",
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.isModal = !state.isModal;
		},

		setData: (state, { payload }) => {
			state.data = { ...payload };
		},

		setBox: (state, { payload }) => {
			state.box = [...state.box, payload];
			console.log(payload, state.box);
		},
		reset: (state) => initialState,
		setUpdate: (state, { payload }) => {
			state.update = payload || false;
		},
		setDataId: (state, { payload }) => {
			state.dataId = payload;
			console.log(payload, "red");

			state.update = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRoute.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRoute.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				// state.route = JSON.stringify(action.payload);
				state.route = [...action.payload];
				console.log(action.payload, "addcase area");
			})
			.addCase(getRoute.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.messages = action.payload;
			});
		builder
			.addCase(createRoute.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createRoute.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.route = [payload];
				console.log(payload, "no payload abi?");
			})
			.addCase(createRoute.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = true;
				state.messages = payload;
			});
		builder
			.addCase(updateRoute.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateRoute.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.route = [payload];
				console.log(payload, "no update abi?");
			})
			.addCase(updateRoute.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = true;
				state.messages = payload;
			});

		builder
			.addCase(deleteRoute.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteRoute.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.route = state.route.filter((item) => item._id !== payload.id);
			})
			.addCase(deleteRoute.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.isError = true;
				state.messages = payload;
			});
	},
});

export const { toggleModal, setData, setBox, reset, setUpdate, setDataId } =
	AppSlice.actions;

export default AppSlice.reducer;
