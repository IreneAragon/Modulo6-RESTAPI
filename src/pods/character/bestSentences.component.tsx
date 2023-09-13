import React from 'react';

interface Props {
    bestSentences: string[];
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
                <ul>
                    {bestSentences.map((scene, index) => (
                        <li key={index}>{scene}</li>
                    ))}
                </ul>
            </>
        ) : (
            <p></p>
        )}
      </div>
    );
  };