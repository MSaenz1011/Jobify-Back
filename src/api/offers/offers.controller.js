const Offer = require("./offers.model");
const User = require("../user/user.model");
const jwt = require("jsonwebtoken");

module.exports = {
  async createOffer(req, res) {
    try {
      const data = req.body;
      const { authorization } = req.headers;
      const [_, token] = authorization.split(" ");
      const { id } = jwt.verify(token, process.env.SECRET_KEY);

      const user = await User.findById(id);

      if (!user) {
        throw new Error("user not found");
      }

      const offer = await Offer.create({ ...data, user: id });
      user.offers.unshift(offer);

      await user.save({ validateBeforeSave: false });
      res.status(201).json({ message: "offer applied (created)", data: offer });
    } catch (error) {
      res.status(500).json({
        message: "offer could not be applied (created)",
        data: error.message,
      });
    }
  },

  async listOffers(_, res) {
    try {
      const offers = await Offer.find();
      res.status(200).json({ message: "offers found", data: offers });
    } catch (error) {
      res.status(500).json({ message: "offer not found", data: error.message });
    }
  },

  async showOffer(req, res) {
    try {
      const { offerId } = req.params;
      const offer = await Offer.findById(offerId).populate({
        path: "user",
        select: "-_id",
      });
      res.status(200).json({ message: "offer found", data: offer });
    } catch (error) {
      res.status(500).json({ message: "todo not found", data: error.message });
    }
  },

  async updateOffer(req, res) {
    try {
      const { offerId } = req.params;
      const data = req.body;

      const offer = await Offer.findByIdAndUpdate(offerId, data, { new: true });
      res.status(200).json({ message: "offer updated", data: offer });
    } catch (error) {
      res
        .status(500)
        .json({ message: "offer could not be updated", data: error.message });
    }
  },

  async deleteOffer(req, res) {
    try {
      const { offerId } = req.params;

      const offer = await Offer.findByIdAndDelete(offerId);

      res.status(200).json({ message: "offer deleted", data: offer });
    } catch (error) {
      res
        .status(500)
        .json({ message: "offer could not be deleted", data: error.message });
    }
  },
};
