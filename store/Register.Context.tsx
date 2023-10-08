import { Provider, createContext, useContext, useState } from "react";

type Sex = 'male' | 'female';
type DiabetesTypes = 1 | 2;

interface RegisterContextType {
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  weight: number;
  height: number;
  type: DiabetesTypes; 
  sex: Sex;
  data: string;
}

interface RegisterContext {
  values: RegisterContextType,
  setValues: (stateUpdater: (prevState: RegisterContextType) => RegisterContextType, action?: any) => void;
}

export const RegisterContext = createContext<RegisterContext>({
  values: {
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    weight: 0,
    height: 0,
    type: 1, 
    sex: "male",
    data: "",
  },
  setValues: () => {}
});

const defaults: RegisterContextType = {
  firstname: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  weight: 0,
  height: 0,
  type: 1, 
  sex: "male",
  data: "",
}

export const RegisterContextProvider = ({children}: any) => {
  const [values, setVals] = useState<RegisterContextType>(defaults);

  const setValues = (stateUpdater: (prevState: RegisterContextType) => RegisterContextType, action?: any) => {
    setVals(stateUpdater);
    console.log(values)
  }

  const contextValue: RegisterContext = {
    values: values,
    setValues,
  }

  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  )

}
