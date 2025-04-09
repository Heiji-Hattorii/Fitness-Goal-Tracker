import React from 'react';

function Summary({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.progress >= 100).length;

  const totalSteps = goals
    .filter(goal => goal.type === 'steps')
    .reduce((acc, goal) => acc + goal.progress, 0);

  const totalWater = goals
    .filter(goal => goal.type === 'water')
    .reduce((acc, goal) => acc + goal.progress, 0);

  const totalWorkouts = goals
    .filter(goal => goal.type === 'workout')
    .reduce((acc, goal) => acc + goal.progress, 0);

  return (
    <div className="summary">
      <h2>Fitness Goal Tracker Summary</h2>
      <div className="stats">
        <p><strong>Total Goals Set:</strong> {totalGoals}</p>
        <p><strong>Goals Completed:</strong> {completedGoals}</p>
        <p><strong>Total Steps Walked:</strong> {totalSteps}</p>
        <p><strong>Total Water Drank (cups):</strong> {totalWater}</p>
        <p><strong>Total Workouts Completed:</strong> {totalWorkouts}</p>
      </div>

      <div className="progress-summary">
        <h3>Overall Progress</h3>
        <div>
          <h4>Steps</h4>
          <div className="progress-bar">
            <div
              style={{ width: `${(totalSteps / 100000) * 100}%` }}
              className="progress-bar-fill"
            ></div>
          </div>
        </div>

        <div>
          <h4>Water</h4>
          <div className="progress-bar">
            <div
              style={{ width: `${(totalWater / 56) * 100}%` }}
              className="progress-bar-fill"
            ></div>
          </div>
        </div>

        <div>
          <h4>Workouts</h4>
          <div className="progress-bar">
            <div
              style={{ width: `${(totalWorkouts / 20) * 100}%` }}
              className="progress-bar-fill"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;


   