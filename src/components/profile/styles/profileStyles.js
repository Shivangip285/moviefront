import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) =>
    ({
      overlay:{
          width: "100vw",
          height: "100vh",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          position: "fixed",
          background: "rgba(49,49,49,0.8)"
      },
      content:{
      position:"absolute",
       top:  "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          background: "#f1f1f1",
          padding: "14px 28px",
          borderRadius: "3px",
          maxWidth: "600px",
          minWidth: "300px"

      },
      card :{
       padding:"30px",
       lineHeight:"5"
      },
      userContent:{
        display: "flex",
        flexDirection:"column",
        justifyContent:"space-between"
      },
      userHeading:{
      fontWeight: "600"
      },
      button:{


      padding:"8px 20px",
     },

     dialogContainer:{
       width:"70%",
       display: "block",
       marginLeft: "auto",
       marginRight: "auto"
     },
     dialogHeader: {
                 fontWeight: "bold",
                 padding: "10px 40px 20px "
     },
     dialogContent: {

                   padding:"30px",


     },

     formText:{

     }




    })
);
