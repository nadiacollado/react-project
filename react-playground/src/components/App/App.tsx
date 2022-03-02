import { Header } from "../Header";

const menuItems = [
  "Home",
  "My Results",
  "Health Profile",
  "Community",
  "Resources",
  "Settings",
  "Log out",
];
interface AppProps {
  bodyText: string;
}

function App({ bodyText }: AppProps) {
  return (
    <div>
      <Header menuItems={menuItems} />
      {bodyText}
    </div>
  );
}

export default App;
