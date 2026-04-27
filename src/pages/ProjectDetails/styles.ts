import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 14rem 2rem 8rem;
  background: linear-gradient(180deg, #d9d9d9 0%, #cfcfcf 100%);

  .paper {
    width: min(100%, 92rem);
    margin: 0 auto;
    padding: 3.2rem;
    background: #ffffff;
    color: #151515;
    border-radius: 0.8rem;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.18);
  }

  .paper-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .section-label {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #4c4c4c;
  }

  h1 {
    font-size: 3.4rem;
    line-height: 1.15;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 1.6rem;
    color: #505050;
  }

  .header-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-end;
  }

  .action-button,
  .ghost-button {
    padding: 1rem 1.6rem;
    border-radius: 999px;
    font-size: 1.4rem;
  }

  .ghost-button {
    background: transparent;
    border: 1px solid #cfcfcf;
    color: #222;
  }

  .overview-card,
  .story-card,
  .narrative-card,
  .visual-frame {
    border: 1px solid #e5e5e5;
    background: #fff;
  }

  .overview-card {
    padding: 1.8rem 2rem;
    margin-bottom: 2rem;
  }

  h2,
  h3 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p,
  li,
  small,
  span {
    line-height: 1.7;
  }

  p,
  li {
    font-size: 1.45rem;
    color: #222;
  }

  .hero-visual,
  .implementation-photo {
    margin-bottom: 2rem;
  }

  .hero-visual-grid,
  .implementation-grid {
    display: grid;
    gap: 1.6rem;
  }

  .hero-visual-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .implementation-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .visual-frame {
    padding: 1.4rem;
  }

  .visual-frame img {
    width: 100%;
    display: block;
    border: 1px solid #ececec;
  }

  .visual-frame figcaption {
    margin-top: 0.8rem;
    text-align: center;
  }

  .visual-frame strong {
    display: block;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #232323;
  }

  small {
    display: block;
    margin-top: 0.4rem;
    font-size: 1.2rem;
    color: #555;
    text-align: center;
  }

  .story-grid,
  .detail-layout,
  .analysis-grid,
  .bottom-grid,
  .architecture-section {
    display: grid;
    gap: 1.6rem;
    margin-bottom: 2rem;
  }

  .story-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .detail-layout,
  .analysis-grid,
  .bottom-grid,
  .architecture-section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .story-card,
  .narrative-card {
    padding: 1.8rem;
  }

  ol,
  ul {
    padding-left: 1.8rem;
  }

  ol li,
  ul li {
    margin-bottom: 0.8rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tags span {
    padding: 0.7rem 1.1rem;
    border-radius: 999px;
    background: #f1f5f3;
    color: #175f39;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .flow-steps {
    display: grid;
    gap: 1rem;
  }

  .flow-step {
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    padding: 1rem 0;
    border-bottom: 1px solid #ececec;
  }

  .flow-step:last-child {
    border-bottom: none;
  }

  .step-number {
    flex: 0 0 auto;
    min-width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background: #eef8f1;
    color: #15803d;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .not-found {
    text-align: center;
  }

  @media (max-width: 960px) {
    padding-top: 12rem;

    .paper {
      padding: 2.2rem;
    }

    .paper-header,
    .story-grid,
    .detail-layout,
    .analysis-grid,
    .bottom-grid,
    .architecture-section,
    .hero-visual-grid,
    .implementation-grid {
      grid-template-columns: 1fr;
    }

    .header-actions {
      justify-content: flex-start;
    }
  }

  @media (max-width: 640px) {
    .paper {
      padding: 1.8rem;
    }

    h1 {
      font-size: 2.6rem;
    }

    .visual-frame {
      padding: 1rem;
    }
  }
`;
