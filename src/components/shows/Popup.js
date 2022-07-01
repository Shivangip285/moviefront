import React,{useState} from 'react';
import {Button} from "@material-ui/core";
import Popup from 'reactjs-popup';
import styles from "./styles/showsStyles";
import "./styles/ScheduleMovie.css";
import "./styles/popup.css";
import useMovies from "./hooks/useMovies";
import useEndSlots from "./hooks/useEndSlots";
import DropdownList from "react-widgets/DropdownList";
import {Form, Formik} from "formik";
import FormikTextField from "../formik/FormikTextField";
import {object, string} from "yup";
import useShows from "./hooks/useShows";
import Shows from "./Shows"
export default ({showsDate,startTime}) => {
const initialValues = {
        cost: ""
    };
const formSchema = object({
        cost: string("Cost")
            .required("Cost is required")
            .matches(/^[1-9][0-9]*/, "Cost should be greater than zero")
    });
const toppings = [
  {
    name: "9:00-12:00"
  },
  {
    name: "13:00-16:00"
  }
];

const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
      };
    const classes = styles();
    const {movies, moviesLoading} = useMovies();
    const {endSlots, endSlotsLoading} = useEndSlots();


    return(
    <Popup
    trigger={<Button color="primary" variant="contained"> Schedule Movie </Button>}
    modal
    nested
    >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Schedule Movie </div>
        <div className="content">
          <div>
            <DropdownList
                className="dropdown_customized"
                data={movies}
                textField='name'
                //groupBy={person => person.fullName.length}
              />
          </div>

<div className="App">
      <h3>Slot</h3>
      <ul className="toppings-list">
        {endSlots.map(({ startTime, endTime }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={startTime}
                    value={startTime}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label className="right-section" htmlFor={`custom-checkbox-${index}`}>{startTime}</label>
                <div className="right-section">{endTime}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>




<Formik validationSchema={formSchema} initialValues={initialValues} >
                    {
                        ({isValid}) => {
                            return (
                                <Form>
                                        <FormikTextField
                                            required
                                            margin="dense"
                                            inputProps={{"data-testid": "cost"}}
                                            name="cost"
                                            label="Cost"
                                            fullWidth
                                            autoComplete='off'
                                        />
                                </Form>
                            );
                        }
                    }
                </Formik>


        </div>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            SCHEDULE
          </button>
        </div>
      </div>
    )}
  </Popup>
  );
};

