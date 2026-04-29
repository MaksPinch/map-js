export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(400, "Неверный запрос");
    this.errors.set(404, "Персонаж не найден");
    this.errors.set(500, "Внутренняя ошибка сервера");
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return "Unknown error";
  }
}
