import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onDetails: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetails } = props;

  return (
    <Card onClick={() => onDetails(character.id)}>
      <CardActionArea>
        <CardHeader
          title={character.name}
          subheader={character.gender}
        /> 
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.image}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
