export type UserProfileProps = {
  user: {
    name: string;
    status: string;
    online: boolean;
    avatar: string;
    interests: string[];
  };
};