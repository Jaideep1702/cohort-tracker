import "./App.css";

export default function App() {
  return (
    <div>
      <CardWrapper innerComponent={TextComponent} />
    </div>
  );
}

function TextComponent() {
  return <div>Hello world</div>
}

function CardWrapper(props) {
  return <div id="cards">
    {props.innerComponent()}  
  </div>
  
}
