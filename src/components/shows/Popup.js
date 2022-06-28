import React from 'react';
import {Button} from "@material-ui/core";
import Popup from 'reactjs-popup';
import styles from "./styles/showsStyles";
import "./styles/ScheduleMovie.css";
import "./styles/popup.css";
import useMovies from "./hooks/useMovies";
import useSlots from "./hooks/useSlots";
import DropdownList from "react-widgets/DropdownList";

export default () => {
    const classes = styles();
    const {movies, moviesLoading} = useMovies();
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


        </div>
        <div className="actions">
          <Popup
            trigger={<Button className="scheduleButton"> Trigger </Button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
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