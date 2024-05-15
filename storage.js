// -----get data------ //
function getData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// -----save data------ //
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Export the functions to make them accessible in other files
export { getData, saveData };
