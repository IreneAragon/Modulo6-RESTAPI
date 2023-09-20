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
                    Best sentences:
                </label>
                <p>{bestSentences}</p>
            </>
        ) : (
            <p>{bestSentences}</p>
        )}
        <TextFieldComponent
            name="bestSentences"
            label="Best Sentence"
            multiline={true}
        /> 
        <Button type="submit" variant="contained" color="primary">
              Save
        </Button>
      </div>
    );
  };


//   return (
//     <div>
//       {bestSentences.length > 0 ? (
//           <>
//               <label>
//                   Best sentences:
//               </label>
//               <ul>
//                   {bestSentences.map((scene, index) => (
//                       <li key={index}>{scene}</li>
//                   ))}
//               </ul>
//           </>
//       ) : (
//           <p></p>
//       )}
//       <TextFieldComponent
//           name="bestSentences"
//           label="Best Sentence"
//           multiline={true}
//       /> 
//       <Button type="submit" variant="contained" color="primary">
//             Save
//       </Button>
//     </div>
//   );