import { useEffect, useState } from 'react';

import { fetchContestList } from '../api-client';

import ContestItem from './contest-item';
import Header from './header';

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(
    initialContests ?? [],
  );

  useEffect(() => {
    if (!initialContests) {
      fetchContestList().then((contests) => {
        setContests(contests);
      });
    }
  }, [initialContests]);

  return (
    <>
      <Header message="Naming Contests" />

      <div className="contest-list">
        {contests.map((contest) => {
          return (
            <ContestItem
              key={contest.id}
              contest={contest}
              onClick={onContestClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContestList;
