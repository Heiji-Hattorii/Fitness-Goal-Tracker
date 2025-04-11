import React, { useState, useEffect } from 'react';
import GoalForm from './components/GoalForm';
import ProgressUpdateForm from './components/ProgressUpdateForm';
import GoalList from './components/GoalList';
import Summary from './components/Summary';
import { loadGoals, saveGoals } from './utils/localStorage';

function App() {
  const [goals, setGoals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // <-- pour éviter écrasement

  useEffect(() => {
    const loaded = loadGoals();
    console.log("Loaded from localStorage:", loaded);
    setGoals(loaded);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log("Saving to localStorage:", goals);
      saveGoals(goals);
    }
  }, [goals, isLoaded]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const updateGoalProgress = (id, addedProgress) => {
    setGoals(goals.map(goal =>
      goal.id === id
        ? { ...goal, progress: goal.progress + Number(addedProgress) }
        : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-center text-gray-800 tracking-tight leading-tight border-b-4 border-blue-500 inline-block pb-2">
        Fitness Goal Tracker
      </h1>
      <GoalForm addGoal={addGoal} />
      <ProgressUpdateForm goals={goals} updateGoalProgress={updateGoalProgress} />
      <GoalList goals={goals} updateGoalProgress={updateGoalProgress} deleteGoal={deleteGoal} />
      <Summary goals={goals} />
    </div>
  );
}

export default App;
