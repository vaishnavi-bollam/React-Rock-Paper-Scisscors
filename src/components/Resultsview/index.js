import {Component} from 'react'

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

class ResultsView extends Component {
  state = {
    winningState: '',
    random: '',
  }

  componentDidMount() {
    this.updateWinningState()
  }

  updateWinningState = () => {
    const {activeId, updateScore, activeScore} = this.props
    console.log(activeId, 'selected')
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[randomIndex]
    console.log(randomChoice.id, 'random')
    this.setState({random: randomChoice})
    const getResult = (playerChoice, opponentChoice) => {
      if (
        (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
        (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
        (playerChoice === 'PAPER' && opponentChoice === 'ROCK')
      ) {
        console.log(activeScore)
        updateScore(activeScore + 1)

        return 'YOU WON'
      }
      if (playerChoice === opponentChoice) {
        this.setState(prevState => ({
          score: prevState.score,
        }))
        return 'IT IS DRAW'
      }

      updateScore(activeScore - 1)
      return 'YOU LOSE'
    }

    const result = getResult(activeId, randomChoice.id)
    this.setState({winningState: result})
  }

  onPlayButtonClicked = () => {
    console.log('playbuttonclicked')
    const {playButton} = this.props

    playButton()
  }

  render() {
    const {activeId} = this.props
    const {winningState, random} = this.state

    const selectedChoice = choicesList.find(choice => choice.id === activeId)

    return (
      <div>
        <h1>You</h1>
        {selectedChoice && (
          <Images src={selectedChoice.imageUrl} alt="your choice" />
        )}
        <h1>Opponent</h1>
        <Images src={random.imageUrl} alt="opponent choice" />
        <p>{winningState}</p>
        <button type="button" onClick={this.onPlayButtonClicked}>
          PLAY AGAIN
        </button>
      </div>
    )
  }
}

export default ResultsView
