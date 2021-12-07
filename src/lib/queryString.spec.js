const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Anderson',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Anderson&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Anderson',
      abilities: ['React', 'JS'],
    };

    expect(queryString(obj)).toBe('name=Anderson&abilities=React,JS');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Anderson',
      abilities: {
        first: 'React',
        second: 'JS',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Anderson&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Anderson',
      profession: 'developer',
    });
  });

  it('should convert a query string of single key-value pair to object', () => {
    const qs = 'name=Anderson';

    expect(parse(qs)).toEqual({
      name: 'Anderson',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Anderson&abilities=React,JS';

    expect(parse(qs)).toEqual({
      name: 'Anderson',
      abilities: ['React', 'JS'],
    });
  });
});
