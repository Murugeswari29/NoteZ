import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import eventStyles from "../../styles/eventStyles.module.css";
import eventDetails from "./eventDetails.json";

const ViewEvent = (props) => {
    const handleClose = () => {
        props.closeCallBack()
    };
    return (

        <Dialog
            className={eventStyles.transparentBg}
            PaperProps={{
                style: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            }}
            fullScreen
            onClose={handleClose} open={props.open}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <Carousel
                index={props.eveIndex}
                height={'95%'}
                autoPlay={false}
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={false}
                sx={{ height: '100%', marginTop: '50px' }}>
                {
                    eventDetails.allEvents.map((eventData, i) =>
                        <Container sx={{ height: '100%' }}>
                            <Card
                                sx={{ display: 'flex', marginTop: '20px', height: '100%' }}>
                                <Box className={eventStyles.imagesSection}>
                                    <Carousel
                                        height={'100%'}
                                        autoPlay={false}
                                        indicators={false}
                                        navButtonsAlwaysVisible={true}
                                        cycleNavigation={false}
                                        sx={{ height: '100%' }}>
                                        {
                                            eventData.images.map((item, i) =>
                                                <CardMedia
                                                    sx={{ height: '100%', width: '100%' }}
                                                    key={item}
                                                    component="img"
                                                    image={require(`../../assets/${item}`)}
                                                    alt="Live from space album cover"
                                                />
                                            )
                                        }
                                    </Carousel>

                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {eventData.title}
                                        </Typography>
                                        <Typography component="div" variant="h6">
                                            {eventData.eventDate}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {eventData.description}
                                        </Typography>
                                    </CardContent>

                                </Box>
                            </Card>
                        </Container>

                    )}
            </Carousel>
        </Dialog>
    );
}



export default ViewEvent;