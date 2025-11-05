import "./card.css";
import { useState } from "react";
type Props = {
  description: string;
  title: string;
  id: number;
  state: string;
  remove: (id: number) => number;
  edit: (id: number) => number;
  done: (id: number) => number;
};

export default function Card(props: Props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [state, setState] = useState(props.state);
  const [description, setDescription] = useState(props.description);

  if (state && state === "done") props.done(id);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-main">
          <h3>{title}</h3>
          <input id={`${id}`} className="nothing" type="checkbox" />
          <label htmlFor={`${id}`}>
            <span className="expose open"></span>
          </label>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
      </div>
      <div className="card-functions">
        <span className="done" onClick={() => props.done(id)}></span>
        <span className="edit" onClick={() => props.edit(id)}></span>
        <span className="delete" onClick={() => props.remove(id)}></span>
      </div>
    </div>
  );
}
