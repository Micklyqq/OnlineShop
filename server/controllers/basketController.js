const { Basket, BasketDevice } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async openBasket(req, res, next) {
    const userId = req.user.id;
    const basket = await Basket.findOne({ where: { userId: userId } });
    const basketDevices = await BasketDevice.findAll({
      where: { basketId: basket.id },
    });
    return res.json({ basketDevices });
  }

  async addtobasket(req, res, next) {
    const userId = req.user.id;
    const { deviceId } = req.body;
    const basket = await Basket.findOne({ where: { userId: userId } });
    const basketId = basket.id;
    const basketDevice = await BasketDevice.create({ basketId, deviceId });
    return res.json({ basketDevice });
  }

  async delfrombasket(req, res, next) {
    const userId = req.user.id;
    const { deviceId } = req.body;
    const basket = await Basket.findOne({ where: { userId: userId } });
    const basketId = basket.id;
    const delDevice = await BasketDevice.destroy({
      where: { deviceId, basketId },
    });
    return res.json({ delDevice });
  }
}

module.exports = new BasketController();
