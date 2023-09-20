import React from 'react';
import { Formik, Form } from 'formik';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import { BestSentencesComponent } from './bestSentences.component'

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
    {() => (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="Character" src={character.image}></Avatar>
          }
          title={character.name}
          subheader={character.gender}
        />
        <CardContent>
          <Form className={classes.root}>
            <div>
              <CardMedia
                image={character.image}
                title={character.name}
                style={{
                  height: 0,
                  paddingTop: '56.25%',
                  maxHeight: '100px',
                }}
              />
              <div>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Status:
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {character.status}
                  </Typography>
                </div>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Origin:
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {character.origin.name}
                  </Typography>
                </div>
                <BestSentencesComponent
                  bestSentences={character.bestSentences}
                />
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    )}
    </Formik>
  );
};