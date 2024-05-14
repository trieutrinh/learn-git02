import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
