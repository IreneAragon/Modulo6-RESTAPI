import { Button } from '@mui/material';
import { TextFieldComponent } from 'common/components';
import React from 'react';

interface Props {
    bestSentences: string;
}

export const BestSentencesComponent: React.FunctionComponent<Props> = (props) => {
    
    const { bestSentences } = props;
  
    return (
      <div>
        {bestSentences.length > 0 ? (
            <>
                <label>
                    Best sentence:
                </label>
                <p>{bestSentences}</p>
                <TextFieldComponent
                    name="bestSentences"
                    label="Edit best sentence"
                /> 
            </>
        ) : (
            <>
                <p>Best sentence:</p>
                <small><i>This character doesn't have a best sentence yet, you can create one below</i></small>
                <TextFieldComponent
                    name="bestSentences"
                    label="Create best sentence"
                />
            </>
        )}
        <Button type="submit" variant="contained" color="primary">
              Save
        </Button>
      </div>
    );
  };