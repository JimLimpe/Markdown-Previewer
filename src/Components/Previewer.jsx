import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  breaks: true,
  gfm: true
});

const Previewer = ({ preview }) => (
<div id="preview"
 dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(marked(preview))
 }}
 /> 
);

export default Previewer;