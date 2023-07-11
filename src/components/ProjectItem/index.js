import {ListItem, Image, ProjectName} from './styledComponents'

const ProjectItem = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails
  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ListItem>
  )
}

export default ProjectItem
