import Card from "./components/Card"; // Import the Card component for use

const CallingCards = () => {
  return (
    <>
      <h1>My Cards</h1>
      {/* Each prop for Card is passed in like attributes for JSX tags */}
      <Card 
        title="Hello World"
        desc="My first component" />
    </>
  )
}

// Export the CallingCards component so it can be used in other files
export default CallingCards;