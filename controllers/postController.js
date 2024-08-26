export let posts = [
  { id: 1, title: "Introduction to JavaScript" },
  { id: 2, title: "Understanding Closures in JS" },
  { id: 3, title: "JavaScript ES6 Features" },
  { id: 4, title: "Asynchronous JavaScript with Promises" },
  { id: 5, title: "JavaScript Array Methods" },
  { id: 6, title: "Working with JSON in JavaScript" },
  { id: 7, title: "Event Handling in JavaScript" },
  { id: 8, title: "Debugging JavaScript Code" },
  { id: 9, title: "JavaScript Modules and Imports" },
  { id: 10, title: "Understanding the DOM in JavaScript" },
];

// @desc Get all posts
// @route GET /api/posts
export function getAllPosts(req, res) {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
}

// @desc Get single posts
// @route GET /api/posts/:id
export function getSinglePost(req, res, next) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
}

// @desc Create new post
// @route POST /api/posts/:id
export function createNewPost(req, res, next) {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
}

// @desc update new post
// @route PUT /api/posts/:id
export function updateSinglePost(req, res, next) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
}

// @desc Delete new post
// @route DELETE /api/posts/:id
export function deleteSinglePost(req, res, next) {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
}
