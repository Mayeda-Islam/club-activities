export const setExerciseTimeToDB = (time) => {
  localStorage.setItem("exerciseTime", JSON.stringify(time));
};

export const getExerciseTimeFromDB = () => {
  const exerciseTime = JSON.parse(localStorage.getItem("exerciseTime"));
  return exerciseTime;
};

export const setBreakTimeToDB = (time) => {
  localStorage.setItem("breakTime", JSON.stringify(time));
};

export const getBreakTimeFromDB = () => {
  const breakTime = JSON.parse(localStorage.getItem("breakTime"));
  return breakTime;
};

