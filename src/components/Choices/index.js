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
      <button label="images" onClick={onImageClicked} className="image-button">
        <Images src={eachChoice.imageUrl} />
      </button>
    </ListItem>
  )
}

export default Choices
