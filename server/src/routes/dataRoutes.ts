import { Router } from "express";
import {
	createRoute,
	deleteRoute,
	getRoute,
	searchProduct,
	updateRoute,
} from "../controllers/dataControllers.js";
import RoutesSchema from "../models/postModel.js";
const router = Router();

//  get Delivery detail by using the tracking number
router.get("/", getRoute);

// create new delivery details
router.post("/post", createRoute);

// update tracking details
router.patch("/:id", updateRoute);

// delete tracking details

router.delete("/:id", deleteRoute);

//  search for product details

router.post("/search", searchProduct);

export default router;
