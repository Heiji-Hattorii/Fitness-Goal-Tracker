import React from 'react';

function GoalItem({ goal, deleteGoal }) {
  const percent = ((goal.progress / goal.target) * 100).toFixed(1);

  return (
    <div className="bg-white p-4 shadow rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{goal.name}</h3>
        <p>Type: {goal.type}</p>
        <p>Progression: {goal.progress} / {goal.target} ({percent}%)</p>
        <div className="bg-gray-200 h-2 w-full rounded">
          <div className="bg-blue-500 h-2 rounded" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      <button onClick={() => deleteGoal(goal.id)} className="bg-red-500 text-white px-3 py-1 rounded">Supprimer</button>
    </div>
  );
}

export default GoalItem;
