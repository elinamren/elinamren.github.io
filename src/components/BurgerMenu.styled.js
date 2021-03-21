import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    ${"" /* background-color: #252525d3; */}
    background-color: #d8eaf0e3;
    text-transform: uppercase;
    height: 100vh;
    width: 100%;
    text-align: left;
    padding: 8rem 2rem;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
  .burger-link {
      padding: 1rem 0;
      font-size: 1.75rem;
  }
`;
