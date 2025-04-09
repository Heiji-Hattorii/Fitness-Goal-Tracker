import React, { useState } from 'react';

function ProgressForm({ addGoal }) {
  const [goalName, setGoalName] = useState('');
  const [goalType, setGoalType] = useState('steps');
  const [goalProgress, setGoalProgress] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalName || goalProgress < 0) {
      setError('Please provide a valid goal name and progress.');
      return;
    }

    const newGoal = {
      id: Date.now(),
      name: goalName,
      type: goalType,
      progress: goalProgress,
    };

    addGoal(newGoal);
    setGoalName('');
    setGoalType('steps');
    setGoalProgress(0);
    setError('');
  };

  return (
    <div className="progress-form">
      <h2>Log Your Fitness Goal Progress</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="goalName">Goal Name:</label>
          <input
            type="text"
            id="goalName"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            placeholder="e.g., Walk 10,000 steps"
          />
        </div>

        <div>
          <label htmlFor="goalType">Goal Type:</label>
          <select
            id="goalType"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
          >
            <option value="steps">Steps</option>
            <option value="water">Water (cups)</option>
            <option value="workout">Workouts</option>
          </select>
        </div>

        <div>
          <label htmlFor="goalProgress">Progress:</label>
          <input
            type="number"
            id="goalProgress"
            value={goalProgress}
            onChange={(e) => setGoalProgress(Number(e.target.value))}
            placeholder="e.g., 5000 steps"
          />
        </div>

        <button type="submit">Log Progress</button>
      </form>
    </div>
  );
}

export default ProgressForm;
