import { nanoid } from "nanoid";
import notes from "../utils/notes.js";

const addNoteHandler = (req, h) => {
  const { title, tags, body } = req.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updateAt,
  };

  notes.push(newNote);
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const res = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan!",
      data: {
        noteId: id,
      },
    });
    res.code(201);
    return res;
  }
};

const getAllNotesHandler = (req, h) => {
  const res = h.response({
    status: "success",
    data: {
      notes,
    },
  });
  return res;
};

const getNoteByIdHandler = (req, h) => {
  const { id } = req.params;

  const note = notes.filter((note) => note.id === id)[0];

  if (note !== undefined) {
    return {
      message: "success",
      data: {
        note,
      },
    };
  }

  const res = h.response({
    status: "fail",
    message: "Catatan tidak ditemukan",
  });
  res.code(404);
  return res;
};

const updateNoteByIdHandler = (req, h) => {
  const { id } = req.params;
  const { title, tags, body } = req.payload;

  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id == id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
  }

  const res = h.response({
    status: "success",
    message: "Catatan berhasil diperbarui",
  });
  res.code(200);
  return res;
};

const dropNoteByIdHandler = (req, h) => {
  const { id } = req.params;

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const res = h.response({
      status: "success",
      message: "Catatan berhasil dihapus",
    });
    res.code(200);
    return res;
  }
};

export {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
  dropNoteByIdHandler,
};
