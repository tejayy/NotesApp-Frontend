import type { Note } from "../../types/note";
import NotesCard from "./NotesCard";

interface Props {
  notes: Note[];
}

function NotesGrid({ notes }: Props) {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-4
    "
    >
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesGrid;
