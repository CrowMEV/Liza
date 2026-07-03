import userProfileStyles from "./UserProfile.module.css";
import type { UserProfileProps } from "../types/UserProfile.ts";


export default function UserProfile({ user }: UserProfileProps) {
  return (
    <>
      <h1
        className={
          user.online ? userProfileStyles.online : userProfileStyles.offline
        }
      >
        {user.name}
      </h1>
      <h2 className={userProfileStyles.online}>{user.name}</h2>
      <div>{user.avatar}</div>
      <div>{user.online && "online"}</div>
      <p>
        <img
          src={user.avatar}
          width="50"
          height="50"
          alt={`${user.name} avatar`}
        />
      </p>
      <ul>
        {user.interests.map((o, index) => (
          <li key={index}>
            <a href="#">{o}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
