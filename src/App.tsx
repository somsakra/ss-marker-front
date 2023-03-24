import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { increment, decrement, addAmount } from "./features/counter-slice";
import {
  openLoginModal,
  closeLoginModal,
} from "./features/showLoginModal-slice";
import { getAllNote } from "./features/note-slice";
import { getDog } from "./features/dog-slice";
import ButtonAppBar from "./components/ButtonAppBar";
import BasicCard from "./components/BasicCard";
import LoginModal from "./components/LoginModal";
import Loading from "./components/Loading";
import { getUserInfo } from "./features/user-slice";

function App() {
  const showLoginModal = useAppSelector((state) => state.showLoginModal.value);
  const notes = useAppSelector((state) => state.notes);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleOpenLoginModal = () => dispatch(openLoginModal());
  const handleCloseLoginModal = () => dispatch(closeLoginModal());

  const mockupNotes = [
    {
      _id: "641b14b3a5af1c88fb243e51",
      title: "New to do",
      content: "Content.....",
      isDone: false,
    },
    {
      _id: "641b14b6a5af1c88fb243e53",
      title: "New to do",
      content: "Content.....",
      isDone: false,
    },
    {
      _id: "641c889e0660243ed0527caf",
      title: "New to do",
      content: "Content.....",
      isDone: false,
    },
    {
      _id: "641c889f0660243ed0527cb1",
      title: "New to do",
      content: "Content.....",
      isDone: false,
    },
    {
      _id: "641c88a00660243ed0527cb3",
      title: "New to do",
      content: "Content.....",
      isDone: false,
    },
  ];

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getAllNote(token));
      dispatch(getUserInfo(token));
    } else if (!token) {
      dispatch(openLoginModal());
    }
  }, []);

  if (notes.isLoading) return <Loading />;
  if (user.isLoading) return <Loading />;

  return (
    <div>
      {/* <Loading /> */}
      <ButtonAppBar />
      <LoginModal />
      <BasicCard />
    </div>
  );
}

export default App;
