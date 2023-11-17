class ApiError extends Error {
  constructor(status, message) {
    super(); // вызываем родительский конструктор
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    // запрос прошел, но сервер не может найти данные согласно запросу
    return new ApiError(404, message);
  }

  static internal(message) {
    // внутренняя проблема сервера
    return new ApiError(500, message);
  }

  static forbidden(message) {
    // нет доступа
    return new ApiError(403, message);
  }
}

module.exports = ApiError;
