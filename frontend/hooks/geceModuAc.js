import useLocalStorage from "./localStorageKullan.js";

export const useInput = (initalValue, key) => {
  const [value, setValue] = useLocalStorage(initalValue, key);
  const handleChanges = (updateValue) => {
    setValue(updateValue);
  };

  return [value, setValue, handleChanges];
};

export default useInput;
