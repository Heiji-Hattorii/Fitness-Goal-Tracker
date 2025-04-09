import React from 'react';
import GoalItem from './GoalItem';

function GoalList({ goals, updateGoalProgress, deleteGoal }) {
  return (
    <div>
      {goals.map(goal => (
        <GoalItem
          key={goal.id}
          goal={goal}
          updateGoalProgress={updateGoalProgress}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
