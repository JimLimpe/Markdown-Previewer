const Editor = ({ preview, handleState }) => (
  <textarea
    id="editor"
    value={preview}
    onChange={handleState}
    className="form-control"
    
  />
);

export default Editor;