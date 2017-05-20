import Post from './post.model';

export async function createPost(req, res) {
  try {
    const post = await Post.createPost(req.body, req.user._id);
    return res.status(201).json(post);
  } catch (e) {
    return res.status(400).json(e);
  }
}
