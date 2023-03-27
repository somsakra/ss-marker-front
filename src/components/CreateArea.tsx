import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { createNote } from "../features/note-slice";

import "../css/CreateArea.css";

const CreateArea = (props: any) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const dispatch = useAppDispatch();

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setNote((state: any) => {
      return { ...state, [name]: value };
    });
  };

  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const createInfo = {
      token: localStorage.getItem("token"),
      noteInfo: note,
    };
    dispatch(createNote(createInfo));
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <form className="create-note">
      <input
        name="title"
        type="text"
        // value={note.title}
        placeholder="Title"
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        // value={note.content}
        placeholder="Content"
        onChange={handleInputChange}
      ></textarea>
      <button onClick={submit}>
        <AddIcon />
      </button>
    </form>
  );
};

export default CreateArea;
