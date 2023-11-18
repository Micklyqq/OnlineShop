const { Device, User, Rating } = require("../models/models");
const ApiError = require("../error/ApiError");

class RatingController {
  async addRating(req, res, next) {
    const userId = req.user.id;
    const { deviceId, rate } = req.body;
    if (rate > 10) {
      return next(ApiError.badRequest("Некорректная оценка"));
    }
    const findRate = await Rating.findOne({ where: { userId, deviceId } });
    if (findRate) {
      return next(ApiError.badRequest("Пользователь уже поставил оценку"));
    }
    const rating = await Rating.create({ rate, userId, deviceId });
    return res.json({ rating });
  }

  async getRating(req, res, next) {
    const { deviceId } = req.body;
    const rating = await Rating.findAll({ where: { deviceId } });
    if (rating.length == 0) {
      return next(
        ApiError.badRequest(
          "У данного товара нет оценок или товар не существует"
        )
      );
    }
    return res.json({ rating });
  }
  async getAverageRate(req, res, next) {
    const { deviceId } = req.body;
    const rating = await Rating.findAll({ where: { deviceId } });
    if (rating.length == 0) {
      return next(
        ApiError.badRequest(
          "У данного товара нет оценок или товар не существует"
        )
      );
    }
    const avgRate =
      rating.reduce((sum, current) => sum + current.rate, 0) / rating.length;
    return res.json({ avgRate: avgRate });
  }
}

module.exports = new RatingController();
