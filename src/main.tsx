import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import HelloWorld from "./HelloWord/HelloWorld.tsx";
import UserProfile from "./UserProfile/UserProfile.tsx";
// import { LikeButton } from "./LikeButton/LikeButton.tsx";
import { PurchasesList } from "./Purchases/PurchasesList.tsx";

const user1 = {
  name: "Jenya",
  status: "Backend Developer",
  online: false,
  avatar: "/logo.svg",
  interests: ["JavaScript", "React", "Frontend"],
};
const user2 = {
  name: "Liza",
  status: "Fullstack Developer",
  online: false,
  avatar: "/logo.svg",
  interests: ["JavaScript", "React", "Frontend"],
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HelloWorld /> */}
    {/* <HelloWorld ></HelloWorld > */}
    {/* <UserProfile user={user1} />
    <UserProfile user={user2} /> */}
    {/* <LikeButton /> */}
    <PurchasesList />,
  </StrictMode>,
);
