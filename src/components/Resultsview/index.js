import {Images} from '../StyledComponents/index'

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
  const randomIndex = Math.floor(Math.random() * choicesList.length)
  const randomChoice = choicesList[randomIndex]
  return (
    <div>
      {selectedChoice && (
        <Images src={selectedChoice.imageUrl} alt={activeId} />
      )}
      <Images src={randomChoice.imageUrl} alt={randomChoice.id} />
    </div>
  )
}
export default ResultsView
