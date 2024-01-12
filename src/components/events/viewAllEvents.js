import EventCard from "./eventCard"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box"
import eventDetails from "./eventDetails.json";
import ViewEvent from "./viewEvent";
import { useState } from "react";
const AllEvents = () => {
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] =  useState({})
    const handleOpen = (eveIndex, msg) => {
        setOpen(true);
        setSelectedEvent(eveIndex)
    
    };
    const handleClose = () => {setOpen(false);
        setSelectedEvent({})
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container 
                spacing={{ xs: 2, md: 3 }} 
            direction="row"
            alignItems="center"
            columns={{ xs: 1, sm: 4, md: 12 }}
            >
                {eventDetails.allEvents.map((eve, eveIndex) => (
                    <Grid

                        key={eve.id}
                        item xs={2} sm={4} md={4}>
                        <EventCard
                            onClick={handleOpen.bind(this, eveIndex)}
                            cardData={eve}
                        />
                    </Grid>
                ))}
            </Grid>
            <ViewEvent 
             open = {open}
             eveIndex={selectedEvent}
             closeCallBack = {handleClose}
            />
        </Box>
    )
}

export default AllEvents;