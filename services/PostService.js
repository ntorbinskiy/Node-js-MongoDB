import Post from "../post/Post.js";
import fileService from "./FileService.js";

const throwError = () => {
  throw new Error("Id не указан");
};

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);

    return Post.create({ ...post, picture: fileName });
  }

  async getOne(id) {
    if (!id) {
      throwError();
    }

    return Post.findById(id);
  }

  async getAll() {
    return Post.find();
  }

  async update(post) {
    if (!post._id) {
      throwError();
    }

    return Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throwError();
    }

    const post = await Post.findByIdAndDelete(id);

    return post;
  }
}

export default new PostService();
