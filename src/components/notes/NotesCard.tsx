import type { Note } from "../../types/note";

interface Props {
  note: Note;
}

function NotesCard({ note }: Props) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      <h2 className="font-bold text-xl mb-2">{note.title}</h2>

      <p className="text-slate-300 line-clamp-3">{note.content}</p>
    </div>
  );
}

export default NotesCard;
