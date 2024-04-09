export const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    console.log(item,"jkj",key)
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log("what",error);
  }
};

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
