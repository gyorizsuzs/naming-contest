import Header from "./header";
import ContestList from "./contest-list";

const App = ({ initialData }) => {
  // console.log({ initialData });
  return (
    <div className="container">
      <Header message="Naming Contests" />
      <ContestList contests={initialData.contests.contests} />
    </div>
  );
};

export default App;