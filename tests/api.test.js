const { test, expect, request } = require('@playwright/test');

test('Check Dummy API Status', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const body = await response.json();


  
  expect(body).toHaveProperty('id', 1);
});
