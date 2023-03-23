import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { increment, decrement, addAmount } from "./features/counter-slice";
import { getDog } from "./features/dog-slice";
import ButtonAppBar from "./components/ButtonAppBar";
import BasicCard from "./components/BasicCard";
import LoginModal from "./components/LoginModal";

function App() {
  const mockupNotes = [
    { id: "1", title: "title1", content: "Content-1......" },
    { id: "2", title: "title2", content: "Content-2......" },
    { id: "3", title: "title3", content: "Content-3......" },
    { id: "4", title: "title4", content: "Content-4......" },
    { id: "5", title: "title5", content: "Content-5......" },
    { id: "6", title: "title6", content: "Content-6......" },
    { id: "7", title: "title7", content: "Content-7......" },
    { id: "8", title: "title8", content: "Content-8......" },
  ];

  return (
    <div>
      <ButtonAppBar />
      <LoginModal />
      <BasicCard notes={mockupNotes} />
    </div>
  );
}

export default App;
