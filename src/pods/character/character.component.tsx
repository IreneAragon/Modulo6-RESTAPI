import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent} from 'common/components';
// import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';

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
              </div>
            </div>
            {/* <TextFieldComponent
              name="bestSentence"
              label="Best Sentence"
              multiline={true}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button> */}
          </Form>
        </CardContent>
      </Card>
    )}
    </Formik>
  );
};
