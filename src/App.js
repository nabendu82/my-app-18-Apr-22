import './App.css';
import GrandParent from './components/GrandParent';
import { UserProvider } from './components/userContext';
// import RefsDemo from './components/RefsDemo';
// import ParentLifecycle from './components/ParentLifecycle';
// import DemoForm from './components/DemoForm';
// import ListProducts from './components/ListProducts';
// import UserGreeting from './components/UserGreeting';
// import ParentComponent from './components/ParentComponent';
// import EventBind from './components/EventBind';
// import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
// import Welcome from './components/Welcome';
// import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      {/* <Greeting name="JavaScript">Language of the Web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS apps</Greeting>
      <hr />
      <Welcome name="Flutter">Language for cross-platform mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <ListProducts /> */}
      {/* <DemoForm /> */}
      {/* <ParentLifecycle /> */}
      {/* <RefsDemo /> */}
      <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider>
    </div>
  );
}

export default App;
