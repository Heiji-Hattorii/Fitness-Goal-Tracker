// const STORAGE_KEY = 'fitness_goals';

// export const saveGoals = (goals) => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
// };

// export const loadGoals = () => {
//   const data = localStorage.getItem(STORAGE_KEY);
//   return data ? JSON.parse(data) : [];
// };
const STORAGE_KEY = 'fitness_goals';

export const saveGoals = (goals) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  } catch (err) {
    console.error("Erreur lors de la sauvegarde des objectifs :", err);
  }
};

export const loadGoals = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Erreur lors du chargement des objectifs :", err);
    return [];
  }
};
