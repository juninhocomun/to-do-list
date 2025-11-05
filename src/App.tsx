import Card from "./components/card";
import Provider from "./components/Provider";
import "./App.css";

function App() {
  return (
    <>
      <Provider>
        <Card
          description="string"
          title="string"
          id={1}
          state="string"
          remove={remove}
          edit={edit}
          done={done}
        />
      </Provider>
    </>
  );
}

export default App;
