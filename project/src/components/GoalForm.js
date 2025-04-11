import React, { useState } from 'react';

function GoalForm({ addGoal }) {
  const [goalName, setGoalName] = useState('');
  const [goalType, setGoalType] = useState('steps');
  const [goalTarget, setGoalTarget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goalName || !goalTarget) return;

    const newGoal = {
      id: Date.now(),
      name: goalName,
      type: goalType,
      target: Number(goalTarget),
      progress: 0,
    };

    addGoal(newGoal);
    setGoalName('');
    setGoalType('steps');
    setGoalTarget('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Créer un Objectif</h2>
      <input type="text" value={goalName} onChange={e => setGoalName(e.target.value)} placeholder="Nom de l'objectif" className="input mb-2" />
      <select value={goalType} onChange={e => setGoalType(e.target.value)} className="input mb-2">
        <option value="Pas">Pas</option>
        <option value="Eau">Eau (verres)</option>
        <option value="Workout">Workout</option>
      </select>
      <input type="number" value={goalTarget} onChange={e => setGoalTarget(e.target.value)} placeholder="Objectif à atteindre" className="input mb-2" />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Ajouter</button>
    </form>
  );
}

export default GoalForm;
