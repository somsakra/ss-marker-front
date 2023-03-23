import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props: any) {
  const { notes } = props;

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
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
        {notes.map((note: any) => {
          return (
            <Card
              key={note.id}
              sx={{ display: "block", boxSizing: "border-box" }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {note.title}
                </Typography>
                <Typography variant="body1">{note.content}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
