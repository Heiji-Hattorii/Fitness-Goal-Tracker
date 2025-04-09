export const loadGoals = () => {
    const savedGoals = localStorage.getItem('goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  };
  
  export const saveGoals = (goals) => {
    localStorage.setItem('goals', JSON.stringify(goals));
  };
  