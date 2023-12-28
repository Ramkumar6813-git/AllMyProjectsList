import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProjectItem from '../ProjectItem'
import {
  BgContainer,
  InputDiv,
  SelectName,
  Select,
  Option,
  UnorderedList,
  LoaderDiv,
  FailureDiv,
  FailureImage,
  FailureText,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Projects extends Component {
  state = {
    projectsList: [],
    apiStatus: apiConstants.initial,
    projectCategory: categoriesList[0].id,
  }

  onChangeCategory = event => {
    this.setState(
      {
        projectCategory: event.target.value,
      },
      this.getProjects,
    )
  }

  componentDidMount = () => {
    this.getProjects()
  }

  getProjects = async () => {
    this.setState({
      apiStatus: apiConstants.loading,
    })
    const {projectCategory} = this.state
    const options = {
      method: 'GET',
    }

    const url = `https://apis.ccbp.in/ps/projects?category=${projectCategory}`
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.projects.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        imageUrl: eachData.image_url,
      }))
      this.setState({
        projectsList: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderProjects = () => {
    const {projectsList} = this.state
    return (
      <UnorderedList>
        {projectsList.map(eachProject => (
          <ProjectItem projectDetails={eachProject} key={eachProject.id} />
        ))}
      </UnorderedList>
    )
  }

  renderLoader = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderDiv>
  )

  renderFailureView = () => (
    <FailureDiv>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureText>Oops! Something Went Wrong</FailureText>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={() => this.getProjects()}>
        Retry
      </RetryButton>
    </FailureDiv>
  )

  renderDisplayView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderProjects()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.loading:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <BgContainer>
          <InputDiv>
            <SelectName>Select Category :-</SelectName>
            <Select onChange={this.onChangeCategory}>
              {categoriesList.map(eachProjectItem => (
                <Option value={eachProjectItem.id} key={eachProjectItem.id}>
                  {eachProjectItem.displayText}
                </Option>
              ))}
            </Select>
          </InputDiv>
          {this.renderDisplayView()}
        </BgContainer>
      </>
    )
  }
}

export default Projects
