import React, { useState } from 'react';

function ProgressUpdateForm({ goals, updateGoalProgress }) {
  const [selectedId, setSelectedId] = useState('');
  const [progressValue, setProgressValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedId || !progressValue) return;

    updateGoalProgress(Number(selectedId), Number(progressValue));
    setSelectedId('');
    setProgressValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">Ajouter une Progression</h2>
      <select value={selectedId} onChange={e => setSelectedId(e.target.value)} className="input mb-2">
        <option value="">-- Choisir un objectif --</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={progressValue} onChange={e => setProgressValue(e.target.value)} placeholder="Ajout de progrès" className="input mb-2" />
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Ajouter</button>
    </form>
  );
}

export default ProgressUpdateForm;
