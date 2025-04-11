import React from 'react';

function Summary({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.progress >= goal.target).length;

  const totalSteps = goals
    .filter(goal => goal.type === 'Pas')
    .reduce((sum, goal) => sum + goal.progress, 0);

  const totalWater = goals
    .filter(goal => goal.type === 'Eau')
    .reduce((sum, goal) => sum + goal.progress, 0);

  const totalWorkouts = goals
    .filter(goal => goal.type === 'Workout')
    .reduce((sum, goal) => sum + goal.progress, 0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Suivi des Objectifs Fitness</h2>
          <p className="text-gray-600">Votre progression vers un mode de vie plus sain</p>
        </div>

        <div className="p-6">
          {/* Statistiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card icon="ri-flag-line" label="Objectifs Fixés" value={totalGoals} />
            <Card icon="ri-check-line" label="Objectifs Complétés" value={completedGoals} iconColor="green" />
            <Card
              icon="ri-percent-line"
              label="Taux de Réussite"
              value={`${((completedGoals / totalGoals) * 100 || 0).toFixed(2)}%`}
              iconColor="blue"
            />
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Progression Globale</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-blue-500">
                  {((completedGoals / totalGoals) * 100 || 0).toFixed(0)}%
                </span>
              </div>
              <div>
                <p className="text-gray-600">
                  Vous êtes sur la bonne voie! Continuez à maintenir votre routine d'exercice et d'hydratation.
                </p>
                <a href="#" className="text-blue-600 font-medium mt-2 inline-block">Voir les détails complets</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, label, value, iconColor = 'gray' }) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
      <div className="flex items-center mb-2">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-${iconColor}-100 text-${iconColor}-600 mr-3`}>
          <i className={icon}></i>
        </div>
        <span className="text-sm text-gray-500">{label}</span>
      </div>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}

function ProgressStat({ icon, label, total, goal, color }) {
  const progress = Math.min((total / goal) * 100, 100);
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
      <div className="flex items-center mb-3">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-${color}-100 text-${color}-600 mr-3`}>
          <i className={icon}></i>
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-3xl font-semibold block mb-2">{total}</span>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full bg-gradient-to-r from-${color}-400 to-${color}-500`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>0</span>
        <span>Objectif: {goal.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default Summary;
