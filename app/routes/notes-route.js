import {
  addNoteHandler,
  dropNoteByIdHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
} from "../handlers/notes-handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: dropNoteByIdHandler,
  },
];

export default routes;
