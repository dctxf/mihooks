import { pushByBark } from '.';

describe('pushByBark', () => {
  it('should be defined', () => {
    expect(pushByBark).toBeDefined();
  });
  it('apiUrl is undefined', () => {
    expect(async () => {
      await pushByBark({
        title: 'test apiUrl is undefined', body: 'test',
      });
    }).rejects.toThrowError();
  });
  it('title is undefined', () => {
    expect(async () => {
      await pushByBark({
        body: 'test title is undefined',
        apiUrl: 'https://api.dctxf.com/mGTPVYeE3gFFknswfemUHC'
      });
    }).rejects.toThrowError();
  });
  it('body is undefined', () => {
    expect(async () => {
      await pushByBark({
        title: 'test body is undefined',
        apiUrl: 'https://api.dctxf.com/mGTPVYeE3gFFknswfemUHC'
      });
    }).rejects.toThrowError();
  })
  it('apiUrl is invalid', () => {
    expect(async () => {
      await pushByBark({
        title: 'test', body: 'apiUrl is invalid',
        apiUrl: 'https://api.dctxf.com/mGTPVYeE3gFFknswfemUHC11'
      });
    }).rejects.toThrowError();
  });
  it('pushByBark success', () => {
    expect(async () => {
      await pushByBark({
        title: 'test', body: 'test pushByBark success', group: 'mitools',
        apiUrl: 'https://api.dctxf.com/mGTPVYeE3gFFknswfemUHC'
      });
    }).rejects.toThrowError();
  })
});


