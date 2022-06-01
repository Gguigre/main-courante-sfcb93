export type AdminInfo = {
  id: string;
};

export type PostType = { adminInfo: AdminInfo | null };

export interface CurrentPostState {
  currentPost: PostType | null;
}

type CreatePostAction = {
  type: 'CREATE_POST';
  payload: PostType;
};

type EndPostAction = {
  type: 'END_POST';
};

export type CurrentPostAction = CreatePostAction | EndPostAction;
