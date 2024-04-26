import {Images, ListItem} from '../StyledComponents/index'
// import ResultsView from '../Resultsview/index'
import './index.css'

const Choices = props => {
  const {eachChoice, resultView} = props

  const onImageClicked = () => {
    console.log('imageclicked')
    resultView(eachChoice.id)
  }

  return (
    <ListItem>
      <button
        type="button"
        label="images"
        onClick={onImageClicked}
        className="image-button"
        data-testid={eachChoice.altValue}
      >
        <Images src={eachChoice.imageUrl} alt={eachChoice.id} />
      </button>
    </ListItem>
  )
}

export default Choices
