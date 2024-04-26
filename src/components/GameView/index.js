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

class GameView extends Component {
  state = {
    gameView: true,
    resultView: false,
    clickedImage: '',
    activeId: '',
  }

  resultView = id => {
    const {resultView} = this.state
    this.setState({resultView: true, activeId: id})
    console.log(id)
  }

  render() {
    const {gameView, clickedImage, resultView, activeId} = this.state

    return (
      <MainContainer>
        <div>
          <Container>
            <div>
              <Heading>ROCK</Heading>
              <Heading>PAPER</Heading>
              <Heading>SCISCCORS</Heading>
            </div>
            <div>
              <h1>Score</h1>
              <p>1</p>
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

        {resultView && <ResultsView activeId={activeId} />}

        <ButtonCont>
          <Popup
            trigger={<Button aria-label="Open Image">RULES</Button>}
            modal
            closeOnDocumentClick
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close} aria-label="Close">
                  <RiCloseLine />
                </button>
                <div className="modal-content">
                  <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" />
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
