import Post from "./Post.js";

class PostController {
  static async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;

      const post = await Post.create({ author, title, content, picture });

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default PostController;
