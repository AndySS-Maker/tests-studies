import { sum } from './calculator';
import { sub } from './calculator';
import { mult } from './calculator';
import { div } from './calculator';

describe('Sum between two numbers', () => {
  it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
    expect(sum('2', '2')).toBe(4);
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => {
      sum('', 2);
    }).toThrowError();

    expect(() => {
      sum([2, 2]);
    }).toThrowError();

    expect(() => {
      sum({});
    }).toThrowError();

    expect(() => {
      sum();
    }).toThrowError();
  });
});

describe('Subtraction betweeen two numbers', () => {
  it('should sub 2 and 2 and the result must be 0', () => {
    expect(sub(2, 2)).toBe(0);
  });

  it('should sub 2 and 2 even if one of them is a string and the result must be 0', () => {
    expect(sub('2', '2')).toBe(0);
  });

  it('should throw an error if what is provided to the method cannot be subtracted', () => {
    expect(() => {
      sub('', 2);
    }).toThrowError();

    expect(() => {
      sub([2, 2]);
    }).toThrowError();

    expect(() => {
      sub({});
    }).toThrowError();

    expect(() => {
      sub();
    }).toThrowError();
  });
});

describe('Multiplication betweeen two numbers', () => {
  it('should multiply 3 and 3 and the result must be 9', () => {
    expect(mult(3, 3)).toBe(9);
  });

  it('should multiply 3 and 3 even if one of them is a string and the result must be 9', () => {
    expect(mult('3', '3')).toBe(9);
  });

  it('should throw an error if what is provided to the method cannot be multiplied', () => {
    expect(() => {
      mult('', 2);
    }).toThrowError();

    expect(() => {
      mult([2, 2]);
    }).toThrowError();

    expect(() => {
      mult({});
    }).toThrowError();

    expect(() => {
      mult();
    }).toThrowError();
  });
});

describe('Division between two numbers', () => {
  it('should divide 2 and 2 and the result must be 1', () => {
    expect(div(2, 2)).toBe(1);
  });

  it('should divide 2 and 2 even if one of them is a string and the result must be 1', () => {
    expect(div('2', '2')).toBe(1);
  });

  it('should throw an error if what is provided to the method cannot be divided', () => {
    expect(() => {
      div('', 2);
    }).toThrowError();

    expect(() => {
      div([2, 2]);
    }).toThrowError();

    expect(() => {
      div({});
    }).toThrowError();

    expect(() => {
      div();
    }).toThrowError();
  });
});
