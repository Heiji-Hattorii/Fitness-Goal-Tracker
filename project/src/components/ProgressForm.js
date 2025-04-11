import React, { useState } from 'react';

function ProgressForm({ addGoal }) {
  const [goalName, setGoalName] = useState('');
  const [goalType, setGoalType] = useState('steps');
  const [goalProgress, setGoalProgress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalName || !goalProgress) {
      setError('Veuillez remplir tous les champs requis');
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
    setGoalProgress('');
    setError('');
    alert("Progression enregistrée avec succès!");
  };

  return (
    <div className="flex items-center justify-center p-[6.7%] bg-slate-50">
      <div className="progress-form bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Suivez Votre Progression Fitness
        </h2>

        {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="goalName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom de l'Objectif:
            </label>
            <div className="relative">
              <input
                type="text"
                id="goalName"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                placeholder="ex: Marcher 10 000 pas"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="goalType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Type d'Objectif:
            </label>
            <div className="relative">
              <select
                id="goalType"
                value={goalType}
                onChange={(e) => setGoalType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm pr-8"
              >
                <option value="steps">Pas</option>
                <option value="water">Eau (verres)</option>
                <option value="workout">Entraînements</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="goalProgress"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Progression:
            </label>
            <div className="relative">
              <input
                type="number"
                id="goalProgress"
                value={goalProgress}
                onChange={(e) => setGoalProgress(e.target.value)}
                placeholder="ex: 5000 pas"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-button font-medium hover:bg-blue-100 transition-all whitespace-nowrap flex items-center justify-center"
          >
            Enregistrer la Progression
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProgressForm;
