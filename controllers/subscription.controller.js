import Subscription from "../models/subscription.model.js";

const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      status: true,
      message: "Subscription created successfully",
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("Unauthorized access");
      error.statusCode = 403;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      status: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export { createSubscription, getUserSubscriptions };
