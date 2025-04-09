import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import ProgressForm from './components/ProgressForm';
import Summary from './components/Summary';
import { loadGoals, saveGoals } from './utils/localStorage';

function App() {
  const [goals, setGoals] = useState([]);

  // Charger les objectifs à partir du stockage local au démarrage
  useEffect(() => {
    const loadedGoals = loadGoals();
    if (loadedGoals) {
      setGoals(loadedGoals);
    }
  }, []);

  // Sauvegarder les objectifs dans le stockage local à chaque modification
  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  // Ajouter un nouvel objectif
  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  // Mettre à jour la progression d'un objectif
  const updateGoalProgress = (id, progress) => {
    setGoals(
      goals.map(goal =>
        goal.id === id ? { ...goal, progress } : goal
      )
    );
  };

  // Supprimer un objectif
  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="App">
      <h1>Fitness Goal Tracker</h1>
      <ProgressForm addGoal={addGoal} />
      <GoalList goals={goals} updateGoalProgress={updateGoalProgress} deleteGoal={deleteGoal} />
      <Summary goals={goals} />
    </div>
  );
}

export default App;
