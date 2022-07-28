import React from 'react';
import facebook from '../../database/facebook.json';
import { TPostView, } from '../../types/post';
import Post from '../limb/post';

interface IProps {
  postsView?: TPostView;
}

const PostContainer: React.FC<IProps> = (props) => {
  const { postsView } = props;
  return (
    <div className="mt-4 w-full h-full">
      <div
        className={`grid ${
          postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
        {facebook.posts.length ? (
          facebook.posts?.map((post, key) => {
            const {
              
              user,
              postedOn,
              description,
              image,
              likes,
              liked,           
              comments,
            } = post;
            return (
              <Post
                key={`post-${key}`}
                user={{
                  name: user.name,
                  profilePicture: user.profilePicture,
                }}
                description={description}
                image={image}
                postedOn={postedOn}
                likes={likes}
                liked={liked}
                shares={likes}
               
                comments={comments}
              />
            );
          })
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  );
};

export default PostContainer;
