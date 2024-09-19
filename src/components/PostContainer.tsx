import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/Ipost'

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(115)
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
      const title = prompt();
      await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
      deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
      updatePost(post)
    }
  return (
    <div>
        <div className="posts_list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error...</h1>}
            {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />)}
        </div>
    </div>
  )
}

export default PostContainer