export class PostsState {
  posts = [];
}

// Actions type
export const PostsActionType = {
  AddPost: "AddPost",
  UpdatePost: "UpdatePost",
  DeletePost: "DeletePost",
  SetAllPosts: "SetAllPosts",
};

//Actions Creators
// פונקציות שהקומפונטות שלנו ישתמשו בהן כדי ליצור פעולה ולשנות את ה- STATE

export function addPostAction(post) {
  return { type: PostsActionType.AddPost, payload: post };
}
export function updatePostAction(post) {
  return { type: PostsActionType.UpdatePost, payload: post };
}
export function deletePostAction(id) {
  return { type: PostsActionType.DeletePost, payload: id };
}
export function setAllPostAction(posts) {
  return { type: PostsActionType.SetAllPosts, payload: posts };
}

//Reducer
export function postsReducer(currentState = new PostsState(), action) {
  const newState = {
    ...currentState,
    posts: [...currentState.posts],
  };

  switch (action.type) {
    case PostsActionType.AddPost:
      newState.posts.push(action.payload);
      break;

    case PostsActionType.UpdatePost:
      const indexToUpdate = newState.posts.findIndex(
        (p) => p.id === action.payload.id
      );
      if (indexToUpdate !== -1) {
        newState.posts[indexToUpdate] = action.payload;
      }
      break;

    case PostsActionType.DeletePost:
      const indexToDelete = newState.posts.findIndex(
        (p) => p.id === action.payload
      );
      if (indexToDelete !== -1) {
        newState.posts.splice(indexToDelete, 1);
      }
      break;

    case PostsActionType.SetAllPosts:
      newState.posts = action.payload;
      break;

    default:
      break;
  }

  return newState;
}
