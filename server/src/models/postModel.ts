import mongoose from "mongoose";

const routesSchema = new mongoose.Schema(
	{
		trackingNumber: { type: Number, required: true },
		currentLocation: String,
		Route: String,
		destination: String,
		productName: String,
		itemDescription: String,
		estimatedDeliveryDate: String,
	},
	{
		timestamps: true,
	}
);

const RoutesSchema = mongoose.model("Routes", routesSchema);
export default RoutesSchema;
