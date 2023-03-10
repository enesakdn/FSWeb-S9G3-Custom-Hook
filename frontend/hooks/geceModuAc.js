import useLocalStorage from "./localStorageKullan.js";

export const useInput = (initalValue, key) => {
  const [thema, setThema] = useLocalStorage(initalValue, key);
  const handleChanges = (updateValue) => {
    setValue(updateValue);
  };

  return [thema, setThema, handleChanges];
};

export default useInput;
