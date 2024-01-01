import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import styles from "../styles/selectAction.module.css"
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const SelectAction = () => {

    const actionItem = [
        {
            label: "Journal",
            route: ""
        },
        {
            label: "Reminder",
            route: ""
        },
        {
            label: "Events",
            route: "/NoteZ/all_events"
        },
        {
            label: "To Do List",
            route: ""
        }
    ]

    // Method to get card element
    const getActionCard = (item) => {
        return <React.Fragment>
            <CardContent className={styles.actionCardContent}>
                <Typography variant="h5" gutterBottom color="text.secondary">
                    {item.label}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description
                </Typography>
            </CardContent>
            <CardActions
                className={styles.justifyCenter}
            >
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">Add</Button>


                    <Link to={item.route}>
                        <Button variant="contained">
                            View
                        </Button>
                    </Link>


                </Stack>
            </CardActions>
        </React.Fragment>
    }

    return (
        <Grid
            spacing={{ xs: 2, md: 3 }}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.actionContainer}
            columns={{ xs: 1, sm: 4, md: 12 }}
        >
            {
                actionItem.map(action => (
                    <Grid item xs={1} sm={4} md={4}
                        key={action.label}
                    >
                        <Box sx={{ minWidth: 200 }}>
                            <Card variant="outlined">{getActionCard(action)}</Card>
                        </Box>
                    </Grid>
                ))
            }


        </Grid>
    )
}

export default SelectAction;