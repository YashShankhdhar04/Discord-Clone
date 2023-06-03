import { styled } from "@mui/material";
import React from "react";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import PendingInvitaionsList from "./PendingInvitationsList/PendingInvitaionsList";
import FriendsList from "./FriendsList/FriendsList";
const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitaionsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
