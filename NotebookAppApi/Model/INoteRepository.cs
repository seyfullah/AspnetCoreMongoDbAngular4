using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NotebookAppApi.Model
{
    public interface INoteRepository
    {
        Task<IEnumerable<Note>> GetAllNotes();
        Task<Note> GetNote(string id);
        Task AddNote(Note item);
        Task<DeleteResult> RemoveNote(string id);
        //Task<UpdateResult> UpdateNote(string id, string body);
        Task<UpdateResult> UpdateNote(string id, Note item);

        // demo interface - full document update
        Task<ReplaceOneResult> UpdateNoteDocument(string id, string body);

        // should be used with high cautious, only in relation with demo setup
        Task<DeleteResult> RemoveAllNotes();
    }
}
