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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Suivi des Objectifs Fitness</h2>
          <p className="text-gray-600">Votre progression vers un mode de vie plus sain</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                  <i className="ri-flag-line"></i>
                </div>
                <span className="text-sm text-gray-500">Objectifs Fixés</span>
              </div>
              <span className="text-2xl font-semibold">{totalGoals}</span>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3">
                  <i className="ri-check-line"></i>
                </div>
                <span className="text-sm text-gray-500">Objectifs Complétés</span>
              </div>
              <span className="text-2xl font-semibold">{completedGoals}</span>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <i className="ri-percent-line"></i>
                </div>
                <span className="text-sm text-gray-500">Taux de Réussite</span>
              </div>
              <span className="text-2xl font-semibold">{((completedGoals / totalGoals) * 100).toFixed(2)}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mr-3">
                  <i className="ri-footprint-line"></i>
                </div>
                <span className="font-medium">Pas Totaux</span>
              </div>
              <span className="text-3xl font-semibold block mb-2">{totalSteps}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill bg-gradient-to-r from-orange-400 to-orange-500"
                  style={{ width: `${(totalSteps / 100000) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span>Objectif: 100,000</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                  <i className="ri-cup-line"></i>
                </div>
                <span className="font-medium">Eau Consommée (verres)</span>
              </div>
              <span className="text-3xl font-semibold block mb-2">{totalWater}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill bg-gradient-to-r from-blue-400 to-blue-500"
                  style={{ width: `${(totalWater / 56) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0</span>
                <span>Objectif: 56</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mr-3">
                <i className="ri-heart-pulse-line"></i>
              </div>
              <span className="font-medium">Entraînements Complétés</span>
            </div>
            <span className="text-3xl font-semibold block mb-2">{totalWorkouts}</span>
            <div className="progress-bar">
              <div
                className="progress-bar-fill bg-gradient-to-r from-purple-400 to-purple-500"
                style={{ width: `${(totalWorkouts / 20) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>Objectif: 20</span>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Progression Globale</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-primary">
                  {((completedGoals / totalGoals) * 100).toFixed(0)}%
                </span>
              </div>
              <div>
                <p className="text-gray-600">Vous êtes sur la bonne voie! Continuez à maintenir votre routine d'exercice et d'hydratation.</p>
                <a href="#" className="text-primary font-medium mt-2 inline-block">Voir les détails complets</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
