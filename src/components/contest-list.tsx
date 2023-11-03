import ContestItem from "./contest-item";
import { useEffect, useState } from "react";
import { fetchContests } from "../api-client";

const ContestList = ({ initialContests }) => {
  //   debugger;
  const [contests, setContests] = useState(initialContests);

  useEffect(() => {
    // fetchContests().then((contests) => {
    //   setContests(contests);
    // });
  }, []);
  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestItem key={contest.id} contest={contest} />
        );
      })}
    </div>
  );
};

export default ContestList;
