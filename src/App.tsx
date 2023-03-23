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

function App() {
  const showLoginModal = useAppSelector((state) => state.showLoginModal.value);
  const notes = useAppSelector((state) => state.notes);

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

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbXNha3JhQGdtYWlsLmNvbSIsInVzZXJJZCI6IjY0MWIxNDk5YTVhZjFjODhmYjI0M2U0ZSIsImlhdCI6MTY3OTU5OTc0MywiZXhwIjoxNjc5NjAzMzQzfQ.58HrQ8DekIL-RVUn0B9My_tU7YEwKo91C-mcNMnNyLA";
  useEffect(() => {
    dispatch(getAllNote(token));
  }, []);

  if (notes.isLoading) return <Loading />;

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
