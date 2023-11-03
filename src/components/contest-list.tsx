import ContestItem from "./contest-item";

const ContestList = ({ contests }) => {
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
