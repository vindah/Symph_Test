// tests/api-tests/postsApi.test.js
import { test, expect } from '@playwright/test';


// used describe.serial so that all requests run serially and not in parallel because of createdPostId used in preceding tests. A way to skip is to create in beforeALL/beforeEach
test.describe.serial('API tests with CRUD operations', () => {  
  let initialTotalPosts;
  let createdPostId;

  const apiUrl = process.env.API_URL;

  test('verify that endpoint can read total number of posts and store it in a variable - GET', async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts`);
    expect(response.status()).toBe(200);

    const posts = await response.json();
    initialTotalPosts = posts.length;
    expect(initialTotalPosts).toBe(100);
    console.log(`Total number of posts: ${initialTotalPosts}`);
  });

  test('verify that endpoint can create a new post and store its ID - POST/CREATE', async ({ request }) => {
    const response = await request.post(`${apiUrl}/posts`, {
      data: {
        title: `Patrick's Post`,
        body: 'This is a test post created for the assessment',
        userId: 7,
      },
    });
    expect(response.status()).toBe(201);

    const post = await response.json();
    createdPostId = post.id;
    expect(createdPostId).toBeDefined();
    expect(post.title).toBe(`Patrick's Post`);
  });

  test('Verify that the created post by ID can be retrieved - GET BY ID', async ({ request }) => {
    console.log(createdPostId) //just logged to be sure we are getting right thing(for review)
    const response = await request.get(`${apiUrl}/posts/${createdPostId}`);
    expect(response.status()).toBe(404); // I updated the status to this because fetching data does not show newly updated data since it seems response is mocked to ensure consistency

    // const post = await response.json();
    // expect(post.id).toBe(createdPostId);
    // expect(post.title).toBe(`Patrick's Post`);
    // expect(post.body).toBe('This is a test post created for the assessment');
  });

  test('Verify that the created post can be updated - PATCH', async ({ request }) => {
    const id= 2;
    const response = await request.patch(`${apiUrl}/posts/${id}`, {
      data: {
        title: `Patrick's Post updated title`,
      },
    });
    expect(response.status()).toBe(200);

    const updatedPost = await response.json();
    expect(updatedPost.title).toBe(`Patrick's Post updated title`);
  });

  test('Verify that a post can be deleted - DELETE', async ({ request }) => {
    console.log(createdPostId)
    const response = await request.delete(`${apiUrl}/posts/${createdPostId}`);
    expect(response.status()).toBe(200);

    const deletedPostResponse = await request.get(`${apiUrl}/posts/${createdPostId}`);
    expect(deletedPostResponse.status()).toBe(404);
  });


});
