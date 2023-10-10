import './App.css';

const Button = ({children, backgroundColor}) => {
  return <button style={{backgroundColor}}>{children}</button>;
}

const Alert = ({children}) => {
  return (
    <>
      <div className="Overlay"/>
      <div className="Alert">{children}</div>
    </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor='red'>Delete</Button>;
};

function App() {
  return (
    <div className="App">
      <header>Susies' Salad S-bar</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to delete your account? You will
          miss out of the daily deals discounts we offer.
        </p>
        <DeleteButton/>
      </Alert>
    </div>
  );
}

export default App;
