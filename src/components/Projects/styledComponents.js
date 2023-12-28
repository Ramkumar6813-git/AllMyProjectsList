import styled from 'styled-components'

export const BgContainer = styled.div`
  padding: 20px;
  margin-top: 80px;
  @media (min-width: 768px) {
    padding: 25px 40px;
  }
`

export const InputDiv = styled.div``
export const SelectName = styled.h1`
  font-size: 20px;
  padding: 0;
  display: inline-block;
  margin-right: 15px;
`

export const Select = styled.select`
  padding: 12px 15px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
`

export const Option = styled.option`
  font-size: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
`

export const LoaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
`
export const FailureDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
`
export const FailureImage = styled.img`
  width: 300px;
`
export const FailureText = styled.h1`
  font-size: 28px;
  margin-bottom: 5px;
  color: #475569;
`
export const FailureDescription = styled.p`
  margin-top: 5px;
  font-size: 15px;
  color: #cbd5e1;
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 22px;
  font-weight: 600;
  color: #ffffff;
  background-color: #328af2;
`
