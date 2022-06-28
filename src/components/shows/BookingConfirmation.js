import React , {useState} from 'react'
import {Dialog, DialogContent, Typography,Button} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert/Alert";
import styles from "./styles/customerDetailsDialogStyles"
import DownloadIcon from '@mui/icons-material/Download';




const BookingConfirmation = ({bookingConfirmation, showConfirmation,open,onClose}) => {
 const [success, setSuccess] = useState(null);

  const classes = styles();

  const handleClose = () => {
      onClose();
        };


    return (





      <Dialog open={showConfirmation} onClose={handleClose}>
            <Alert severity="success">
                Seats booked successfully!

                   <DownloadIcon className={classes.downloadIcon} />



            </Alert>

            <Typography variant="h6" className={classes.dialogHeader}>
                Booking Confirmation
               </Typography>

            <DialogContent>
                <Typography variant="body1" display="block" gutterBottom>
                    Booking id : {bookingConfirmation.id}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show Date: {bookingConfirmation.showDate}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Show start time: {bookingConfirmation.startTime}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Customer Name: {bookingConfirmation.customerName}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Amount Paid: {bookingConfirmation.amountPaid}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    Number of seats booked: {bookingConfirmation.noOfSeats}
                </Typography>
            </DialogContent>
        </Dialog>
    )
}

export default BookingConfirmation;
