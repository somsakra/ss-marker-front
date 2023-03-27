import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { getAllNote, deleteNote } from "../features/note-slice";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  const notes = useAppSelector((state) => state.notes.value.notes);

  const dispatch = useAppDispatch();

  const handleDeleteNote = (id: any) => {
    const deleteInfo = {
      token: localStorage.getItem("token"),
      _id: id as string,
    };
    dispatch(deleteNote(deleteInfo));
    window.location.href = "/";
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            boxSizing: "border-box",
            width: "30%",
            height: 250,
          },
        }}
      >
        {Array.isArray(notes)
          ? notes.map((note: any) => {
              return (
                <Card
                  key={note._id}
                  sx={{
                    position: "relative",
                    display: "block",
                    boxSizing: "border-box",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {note.title}
                    </Typography>
                    <Typography variant="body1">{note.content}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        position: "absolute",
                        right: "18px",
                        bottom: "18px",
                      }}
                      onClick={() => {
                        handleDeleteNote(note._id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          : typeof notes}
      </Box>
    </div>
  );
}
