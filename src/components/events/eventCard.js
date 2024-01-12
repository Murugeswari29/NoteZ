import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';

export default function EventCard(props) {
  const cardData = props.cardData;

  return (
    <Card sx={{ maxWidth: 345 }}
    >

      <CardHeader
        action={
          <React.Fragment>
            {
              cardData.isFavourite && (
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon
                    sx={{ color: 'red' }}
                  />
                </IconButton>
              )
            }
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </React.Fragment>
        }
        title={cardData.title}
        subheader={cardData.eventDate}
      />
      <CardActionArea>
        <CardMedia
          onClick={(e) => { props.onClick(cardData) }}
          component="img"
          height="194"
          image={require(`../../assets/${cardData.images[0]}`)}
          alt="Paella dish"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardData.description.slice(0, 130)}
        </Typography>
      </CardContent>

    </Card>
  );
}
