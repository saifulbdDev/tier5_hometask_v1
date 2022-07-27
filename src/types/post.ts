export type TPostView = "gridView" | "listView";

export interface IPost {
  id: string;
  user: {
    name: string;
    username: string;
    profilePicture?: string;
  };
  description?: string;
  image?: string;
  likes: number;
  liked: boolean;
  comments: string[];
  shares: number;
  postedOn: number;
 
}
