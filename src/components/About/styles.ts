import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: block;

  .hard-skills{
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    align-items: start;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .timeline{
    position: relative;
    margin-top: 1.8rem;
    display: grid;
    gap: 2rem;
  }

  .timeline:before{
    content: "";
    position: absolute;
    left: 1.1rem;
    top: 0.8rem;
    bottom: 0.8rem;
    width: 2px;
    background: rgba(35, 206, 107, 0.3);
  }

  .timeline-item{
    position: relative;
    display: grid;
    grid-template-columns: 2.6rem 1fr;
    gap: 1.4rem;
    align-items: start;
  }

  .timeline-marker{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: var(--green);
    border: 4px solid rgba(35, 206, 107, 0.2);
    z-index: 1;
    margin-top: 0.4rem;
  }

  .timeline-content{
    padding: 1.8rem;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 1.6rem;
    background: rgba(255,255,255,0.02);

    ul{
      margin-top: 1.2rem;
      padding-left: 1.8rem;
    }

    li{
      font-size: 1.55rem;
      line-height: 1.7;
      margin-bottom: 0.8rem;
    }
  }

  .timeline-period,
  .certificate-period{
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    background: rgba(35, 206, 107, 0.14);
    color: var(--green);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.04rem;
  }

  .timeline-company,
  .timeline-location{
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
  }

  .certificate-grid{
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.6rem;
  }

  .certificate-card{
    padding: 1.8rem;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 1.6rem;
    background: rgba(255,255,255,0.02);

    h4{
      margin: 0 0 1rem;
      font-size: 1.8rem;
      line-height: 1.4;
      color: var(--white);
    }

    p{
      font-size: 1.5rem;
      letter-spacing: 0.05rem;
    }
  }

  .certificate-proof{
    margin-top: 1.4rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .certificate-figure{
    margin: 0;
    padding: 0.8rem;
    border-radius: 1.2rem;
    background: rgba(0, 0, 0, 0.16);
    border: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
      width: 100%;
      height: 16rem;
      display: block;
      border-radius: 0.8rem;
      background: #fff;
      object-fit: contain;
      padding: 0.4rem;
    }

    figcaption{
      margin-top: 0.8rem;
      font-size: 1.2rem;
      letter-spacing: 0.04rem;
      color: rgba(255,255,255,0.72);
      text-align: center;
    }
  }

  .skill-group{
    padding: 1.8rem;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 1.6rem;
    background: rgba(255,255,255,0.02);

    h4{
      margin: 0 0 1.4rem;
      font-size: 1.7rem;
      color: var(--white);
    }
  }

  .skill-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-card{
    min-height: 9rem;
    min-width: 9rem;
    padding: 1rem 1.2rem;
    border-radius: 1.2rem;
    background: rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    text-align: center;

    img{
      width: auto;
      max-width: 100%;
      height: 3.4rem;
      object-fit: contain;
    }

    span{
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.4;
    }
  }

  .skill-badge{
    min-height: 3.4rem;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    background: rgba(35, 211, 107, 0.14);
    color: var(--green);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;

    .timeline:before{
      left: 50%;
      transform: translateX(-50%);
    }

    .timeline-item{
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .timeline-content{
      text-align: left;
    }

    .hard-skills{
      grid-template-columns: 1fr;
    }

    .certificate-proof{
      grid-template-columns: 1fr 1fr;
    }

    .skill-list{
      justify-content: center;
    }
  }

  @media (max-width: 560px){
    .certificate-proof{
      grid-template-columns: 1fr;
    }
  }
`
