const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const ResultsView = props => {
  const {activeId} = props
  const selectedChoice = choicesList.find(choice => choice.id === activeId)
  return (
    <div>
      {selectedChoice && <img src={selectedChoice.imageUrl} alt={activeId} />}
    </div>
  )
}
export default ResultsView
