import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";
import api from "../../api/axios";

import type { Note } from "../../types/note";
import EmptyState from "../../components/notes/EmptyState";
import NotesGrid from "../../components/notes/NotesGrid";

function DashboardPage() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes");

      setNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <div className="p-10">Loading Notes...</div>;
  }

  return (
    <div className="p-10">
      <div>Dashboard</div>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">My Notes</h1>

        {notes.length === 0 ? <EmptyState /> : <NotesGrid notes={notes} />}
      </div>
      <button
        onClick={() => {
          logout();
          navigate("auth/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardPage;
