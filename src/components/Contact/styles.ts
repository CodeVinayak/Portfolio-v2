import styled from "styled-components";


export const Container = styled.section`
  margin-top: 20rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 8rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 40rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }
  }
  
`