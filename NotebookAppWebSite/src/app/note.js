"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = (function () {
    function Note(jsonStr) {
        var jsonObj = JSON.parse(jsonStr);
        for (var prop in jsonObj) {
            this[prop] = jsonObj[prop];
        }
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map