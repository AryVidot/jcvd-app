import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: lightyellow;
  width: 100%;
  margin-top: 1.5rem;
`;

const GeneratedText = styled.div`
  color: blue;
  padding: 2%;
`;

const ContentIpsum = () => {
  return (
    <ContentContainer>
      <GeneratedText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde
          animi blanditiis! Dignissimos exercitationem ratione saepe commodi aut
          corrupti ullam.
        </p>
      </GeneratedText>
    </ContentContainer>
  );
};

export default ContentIpsum;
