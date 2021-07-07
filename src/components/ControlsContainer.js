import styled from "styled-components";

const ControlForm = styled.form`
  background: rgb(63, 94, 251);
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 10px;
`;

const ControlInputText = styled.p`
  font-size: 1rem;
`;

const ControlInput = styled.input`
  width: 50px;
  height: 100%;
`;

const ControlButton = styled.button`
  border: 0;
  padding: 0.2rem 1rem;
  background-color: #dbdb1f;
  color: #3498db;
  cursor: pointer;
  &:hover {
    background-color: #3498db;
    color: #dbdb1f;
  }
`;

const ControlsContainer = () => {
  return (
    <ControlForm action="/">
      <ControlInputText> Hit me with </ControlInputText>
      <ControlInput
        type="number"
        id="number-ipsum"
        value="5"
        max="10"
        min="2"
        name="numberOfParagraph"
      />
      <ControlInputText>paragraphs</ControlInputText>
      <ControlButton id="generateIpsum">Right Here</ControlButton>{" "}
    </ControlForm>
  );
};

export default ControlsContainer;
