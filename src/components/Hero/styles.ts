import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8rem;
  background: rgba(0,0,0,0);

  .hero-text{
    & > p{
      font-size: 1.8rem;
    }

    h1{
      font-size: 7rem;
    }

    h3{
      color: var(--green);
      margin: 1rem 0;
      max-width: 62rem;
    }

    p.small-resume {
      margin-bottom: 5rem;
      max-width: 58rem;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    flex-shrink: 0;

    img{
      width: min(34vw, 420px);
      max-width: 100%;
      object-fit: cover;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.22));
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;

    .hero-text{
      h1{
        font-size: 5rem;
      }

      h3,
      p.small-resume{
        max-width: 100%;
      }
    }

    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }

  @media(max-width: 480px){
    margin-top: 45%;
  }
`
