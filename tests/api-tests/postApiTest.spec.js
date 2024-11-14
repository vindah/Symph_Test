// tests/api-tests/postsApi.test.js
import { test, expect } from '@playwright/test';

test.describe('API tests with CRUD operations', () => {
  let initialTotalPosts;
  let createdPostId;

  const apiUrl = process.env.API_URL;

  test('verify that endpoint can read total number of posts and store it in a variable', async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts`);
    expect(response.status()).toBe(200);

    const posts = await response.json();
    initialTotalPosts = posts.length;
    expect(initialTotalPosts).toBe(100);
    console.log(`Total number of posts: ${initialTotalPosts}`);
  });
});
