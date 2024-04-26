import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  Heading,
  Container,
  MainContainer,
  UnOrderedList,
  ButtonCont,
  Button,
} from '../StyledComponents/index'
import Choices from '../Choices/index'
import ResultsView from '../Resultsview'

const choicesList = [
  {
    id: 'ROCK',
    altValue: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    altValue: 'scissorsButton',

    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    altValue: 'paperButton',

    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    gameView: true,
    resultView: false,
    activeId: '',
    activeScore: 0,
  }

  resultView = id => {
    this.setState({resultView: true, activeId: id, gameView: false})
    // console.log(id)
  }

  playButton = score => {
    this.setState({
      gameView: true,
      resultView: false,
      activeScore: score,
    })
  }

  render() {
    const {gameView, resultView, activeId, activeScore} = this.state

    return (
      <MainContainer>
        <div>
          <Container>
            <div>
              <Heading>Rock Paper Scissors</Heading>
            </div>
            <div>
              <p>Score</p>
              <p>{activeScore}</p>
            </div>
          </Container>
        </div>
        {gameView && (
          <UnOrderedList>
            {choicesList.map(eachChoice => (
              <Choices
                eachChoice={eachChoice}
                key={eachChoice.id}
                resultView={this.resultView}
              />
            ))}
          </UnOrderedList>
        )}

        {resultView && (
          <ResultsView activeId={activeId} playButton={this.playButton} />
        )}

        <ButtonCont>
          <Popup
            trigger={
              <Button type="button" aria-label="Open Image" alt="rules">
                Rules
              </Button>
            }
            modal
            closeOnDocumentClick
          >
            {close => (
              <div className="modal">
                <button
                  className="close"
                  onClick={close}
                  aria-label="Close"
                  type="button"
                >
                  <RiCloseLine />
                </button>
                <div className="modal-content">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="modal"
                  />
                </div>
              </div>
            )}
          </Popup>
        </ButtonCont>
      </MainContainer>
    )
  }
}

export default GameView
