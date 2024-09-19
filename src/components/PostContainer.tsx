import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)
  return (
    <div>
        <div className="posts_list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error...</h1>}
            {posts && posts.map(post => <PostItem post={post} key={post.id} />)}
        </div>
    </div>
  )
}

export default PostContainer