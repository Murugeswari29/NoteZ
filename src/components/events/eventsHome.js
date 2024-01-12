import AllEvents from "./viewAllEvents";
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import eventStyles from "../../styles/eventStyles.module.css"
import Grid from '@mui/material/Grid';
const EventsHome = () => {
    return (
        <React.Fragment>
            <Grid className={eventStyles.addEventBtn}>
                <input
                    accept="image/*"
                    className={eventStyles.input}
                    id="contained-button-file"
                    multiple
                    type="file"

                />
                <label htmlFor="contained-button-file">
                    <Fab component="span">
                        <AddIcon />
                    </Fab>
                </label>
            </Grid>
            <AllEvents />
        </React.Fragment>
    )
}
export default EventsHome;