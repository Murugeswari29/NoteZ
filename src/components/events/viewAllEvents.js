import EventCard from "./eventCard"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box"
import eventDetails from "./eventDetails.json";

const AllEvents = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}

            >
                {eventDetails.allEvents.map(eve => (
                    <Grid
                        key={eve.id}
                        item xs={2} sm={4} md={4}>
                        <EventCard
                            cardData={eve}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default AllEvents;