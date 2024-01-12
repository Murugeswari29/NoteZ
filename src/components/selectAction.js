import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import styles from "../styles/selectAction.module.css"
import { Link } from 'react-router-dom';
import { ImageListItemBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ImageListItem from '@mui/material/ImageListItem';
import allDetails from "./allDetails.json"
const SelectAction = () => {

    const actionItem = allDetails.sections;

    // Method to get card element
    const getActionCard = (item) => {
        return <React.Fragment>
            <ImageListItem key={item.title}>
            <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle="sub"
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              >
                <Link to={item.route}>
                    <ArrowForwardRoundedIcon />
                </Link>
              </IconButton>
            }
          />
          </ImageListItem>
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
                        key={action.title}
                    >
                        <Box sx={{ minWidth: 200 }}>
                            <Card>{getActionCard(action)}</Card>
                        </Box>
                    </Grid>
                ))
            }


        </Grid>
    )
}

export default SelectAction;