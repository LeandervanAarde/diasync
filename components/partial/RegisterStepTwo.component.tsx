import { MdPerson4, MdKey } from "react-icons/md";
import Input from "../Common/Input.component";
import ToggleButton from "../Common/ToggleButton.component";
import Button from "../Button";
import { RegisterContext } from "@/store/Register.Context";
import { captureValues, togglePassword, updateLabels } from "@/Reusables/Functions";
import {useState, useContext} from 'react';

function RegisterStepTwo() {
  const { values, setValues } = useContext(RegisterContext);
  const { weight, height, type, sex, data} = values;
  const [weightError, setWeightError] = useState(false);
  const [ weightLabel, setWeightLabel] = useState<string>("Weight (kg)");
  const [heightError, setHeightError] = useState(false);
  const [heightLabel, setHeightLabel] = useState<string>("Height (cm)");

    const onChangeHandler =
    (error: React.Dispatch<React.SetStateAction<boolean>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      captureValues(e, setValues, error);

    };


    const handleSelect = (selectedValue: string) => {
      // Handle the selected value for diabetes type and sex
      setValues((prevValues) => ({
        ...prevValues,
        [selectedValue === "Type 1" || selectedValue === "Type 2" ? "type" : "sex"]: selectedValue,
      }));
    };

    
    const handleBlur =
    (
      key: string,
      stateSetter: React.Dispatch<React.SetStateAction<string>>,
      errorState: boolean,
      originalLabel: string,
      errorLabel: string
    ) =>
    (e: React.FocusEvent<HTMLInputElement>) => {
      updateLabels(key, stateSetter, errorState, originalLabel, errorLabel);

      console.log(stateSetter);
    };

  return (
    <>
      <h5>Step 2 of 2</h5>
      <div className="flex flex-row flex-wrap gap-5 w-full">
        <Input
          err={weightError}
          width="fit"
          label={weightLabel}
          blur={handleBlur(
            "weight",
            setWeightLabel,
            weightError,
            "Weight (kg)",
            "Invalid Weight"
          )}
          name="weight" // Use "firstname" here
          change={onChangeHandler(setWeightError)}
          type="number"
          placeholder="eg. John"
          icon={
            <MdPerson4
              key="person-icon"
              className="text-cspurple"
              fontSize={22}
            />
          }
          value={weight}
        />

        <Input
          err={heightError}
          width="fit"
          label={heightLabel}
          blur={handleBlur(
            "height",
            setHeightLabel,
            heightError,
            "Height (cm)",
            "Invalid Height"
          )}
          name="height"
          change={onChangeHandler(setHeightError)}
          type="number"
          placeholder="eg. Doe"
          icon={
            <MdPerson4
              key="person-icon"
              className="text-cspurple"
              fontSize={22}
            />
          }
          value={height}
        />
      </div>

      <div className="flex flex-row flex-wrap gap-x-5 w-full">
      <ToggleButton value1="Type 1" value2="Type 2" label="Diabetes Type" onSelect={handleSelect} />
      <ToggleButton value1="Male" value2="Female" label="Sex" onSelect={handleSelect} />
      </div>

      <div className="flex items-center justify-center">
        <Button
          label="Upload CSV Data"
          type="secondary"
          clickHandler={() => console.log("heyy")}
        />
      </div>
    </>
  );
}

export default RegisterStepTwo;
