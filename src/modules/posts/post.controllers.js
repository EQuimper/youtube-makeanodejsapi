import HTTPStatus from 'http-status';

import Post from './post.model';

export async function createPost(req, res) {
  try {
    const post = await Post.createPost(req.body, req.user._id);
    return res.status(HTTPStatus.CREATED).json(post);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id).populate('user');
    return res.status(HTTPStatus.OK).json(post);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPostsList(req, res) {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const posts = await Post.list({ limit, skip });
    return res.status(HTTPStatus.OK).json(posts);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
