import ErrorRepository from "../../index";

describe("ErrorRepository class", () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test("должен возвращать правильное описание для существующего кода ошибки", () => {
    expect(repo.translate(400)).toBe("Неверный запрос");
    expect(repo.translate(404)).toBe("Персонаж не найден");
    expect(repo.translate(500)).toBe("Внутренняя ошибка сервера");
  });

  test('должен возвращать "Unknown error", если кода не существует', () => {
    expect(repo.translate(123)).toBe("Unknown error");
    expect(repo.translate(999)).toBe("Unknown error");
  });

  test("должен корректно инициализироваться с объектом Map", () => {
    expect(repo.errors).toBeInstanceOf(Map);
  });

  test('должен возвращать "Unknown error" для некорректных типов данных (не чисел)', () => {
    expect(repo.translate("404")).toBe("Unknown error");
    expect(repo.translate(null)).toBe("Unknown error");
  });
});
