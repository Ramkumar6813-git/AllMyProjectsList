import styled from 'styled-components'

export const ListItem = styled.li`
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 10px #cbd5e1;
  border-radius: 6px;
  flex-grow: 1;
  @media (min-width: 768px) {
    flex-grow: 0;
  }
`
export const Image = styled.img`
  width: 100%;
  border-radius: 6px;
`
export const ProjectName = styled.p`
  padding-left: 16px;
  font-size: 15px;
  font-weight: 600;
  color: #475569;
`
