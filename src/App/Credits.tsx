import React, { memo, useEffect } from 'react'

const Credits: React.FC = memo(
  () => {

    const [credits, setCredits] = React.useState('');
    const [flagCredits, setFlagCredits] = React.useState('');
    
    useEffect(() => {
      async function credits() {
        const fetchedCredits = await fetchTodoCredits();
        setCredits(fetchedCredits);

        const fetchedFlagCredits = await fetchTodoFlagCredits();
        setFlagCredits(fetchedFlagCredits);
      }

      credits();

    }, []);
    const fetchTodoCredits = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch('https://alloworigin.azurewebsites.net//Todo/credits', { headers });
      const credit = await response.text()
      return credit;
    }

    const fetchTodoFlagCredits = async () => {
      const response = await fetch('https://alloworigin.azurewebsites.net//Todo/secret-credits');
      const credit = await response.text()
      return credit;
    }

    return (
      <footer className="info">
        <h3>
          Credit to {' '}
          {credits}
        </h3>
        <h2>
          Did you find the flag? {' '}?
          {flagCredits}
        </h2>
      </footer>
    )
  },
  () => true,
)

export default Credits
