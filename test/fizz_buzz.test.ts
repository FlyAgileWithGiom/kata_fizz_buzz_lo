import { fizz, buzz, generateAll, fizzToStr } from "../src/fizz_buzz";


describe('generate 100 numbers', () => {
  test('should not be null', () => {
    let result = generateAll();
    expect(result).not.toBeNaN();
  });

  test("should return 100 lines", () => {
    let result = generateAll()
    expect(result.split("\n").length).toBe(100)
  })

});


describe('test fizz function', () => {
  describe('divisible by 3 returns Fizz', () => {
    test('normal case 1', () => {
      expect(fizzToStr(1)).toBe("1")
    })

    test('normal case 1', () => {
      expect(fizzToStr(2)).toBe("2")
    })

    test('6 gets Fizz', () => {
      expect(fizzToStr(6)).toBe("Fizz")
    })

    test('should be divisible by 3 and contains a 3, function result should be 2', () => {
      let result = fizz(3);
      expect(result).toBe(2);
    });

    test('should contain a 3, function result should be 1', () => {
      let result = fizz(13);
      expect(result).toBe(1); //"1Fizz"
    });
    test('should be divisible by 3, and contains 3 3s, function result should be 3', () => {
      let result = fizz(33);
      expect(result).toBe(3);
    });
  })
});

describe('test buzz function', () => {
  test('should be divisible by 5 and contains a 5, function result should be 2', () => {
    let result = buzz(5);
    expect(result).toBe(2);
  });

  test('should be divisible by 5 and contains a 5, function result should be 2', () => {
    let result = buzz(15);
    expect(result).toBe(2);
  });
  
  test('should be divisible by 5, and contains 3 5s, function result should be 3', () => {
    let result = buzz(55);
    expect(result).toBe(3);
  });
});
