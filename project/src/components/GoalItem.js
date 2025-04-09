import React from 'react';

function GoalItem({ goal, updateGoalProgress, deleteGoal }) {
  const handleProgressChange = (e) => {
    updateGoalProgress(goal.id, e.target.value);
  };

  return (
    <div>
      <h2>{goal.name}</h2>
      <p>Progress: {goal.progress}%</p>
      <input
        type="number"
        value={goal.progress}
        onChange={handleProgressChange}
      />
      <button onClick={() => deleteGoal(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalItem;
