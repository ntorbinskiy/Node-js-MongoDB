import PostService from "../services/PostService.js";

const serverError = (e, res) => res.status(500).json(e.message);

const successResult = (res, arg) => res.status(200).json(arg);

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);

      return successResult(res, post);
    } catch (e) {
      serverError(e, res);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);

      return successResult(res, post);
    } catch (e) {
      return serverError(e, res);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();

      return successResult(res, posts);
    } catch (e) {
      return serverError(e, res);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);

      successResult(res, updatedPost);
    } catch (e) {
      return serverError(e, res);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);

      successResult(res, post);
    } catch (e) {
      return serverError(e, res);
    }
  }
}

export default new PostController();
