export default function Header() {
  return (
    <header>
      <h1>Tarefas</h1>
      <input type="text" id="title" placeholder="Title" />
      <input type="text" id="description" placeholder="Description" />
      <button id="create" />
    </header>
  );
}
