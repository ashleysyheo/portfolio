import './scss/Project.scss';
import Footer from './Footer';

export function TossbankPage() {
  let notMobile = window.innerWidth > 600 ? true : false;

  return (
    <div className="project-container">
      <header>
        <h1 className="project-title">Toss Bank</h1>
        <div className="project-info-container">
          <p className="project-desc">
            Toss Bank is South Korea's third neobank, established by Viva Republica, the company
            behind the popular Toss financial app. Toss Bank is known for its user-friendly
            interface, accessibility features, and focus on financial inclusion, including services
            tailored for teenagers and expats. 
            <br />
            <br />
            These are some of the projects I've worked on.
          </p>
          <div className="project-infos">
            <h4 className="project-info heading">Time</h4>
            <h4 className="project-info info">Oct 2023 – Present</h4>
            <h4 className="project-info heading">Role</h4>
            <h4 className="project-info info">Frontend Developer, Interaction Developer</h4>
          </div>
        </div>
      </header>
      <main>
        <div style={{ marginBottom: 48 }}>
          <h4 className="heading">Two Tab Experiment</h4>
          <p className="desc" style={{ marginBottom: 24 }}>
            An experiment to increase My TossBank tab traffic, CTR, and product conversion.
          </p>
          <div>
            <video
              controls
              style={{ maxWidth: 375, width: '100%' }}
              autoPlay={notMobile}
              loop
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/two-tab-experiment.MP4"
            />
          </div>
        </div>
        <div style={{ marginBottom: 48 }}>
          <h4 className="heading">Toss Bank Overseas Home</h4>
          <p className="desc" style={{ marginBottom: 24 }}>
            A localized global home that adapted UI and content based on user geolocation and
            currency.
          </p>
          <p className="desc" style={{ marginBottom: 24, fontWeight: 500 }}>
            Version 1
          </p>
          <div style={{ marginBottom: 24 }}>
            <video
              controls
              style={{ maxWidth: 375, width: '100%' }}
              autoPlay={notMobile}
              loop
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/oversease-home-V1.mp4"
            />
          </div>

          <p className="desc" style={{ marginBottom: 24, fontWeight: 500 }}>
            Version 2
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <img
              alt=""
              style={{ maxWidth: 375, width: '100%' }}
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/overseas-home-1.PNG"
            />
            <img
              alt=""
              style={{ maxWidth: 375, width: '100%' }}
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/overseas-home-3.PNG"
            />
            <img
              alt=""
              style={{ maxWidth: 375, width: '100%' }}
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/overseas-home-2.PNG"
            />
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h4 className="heading">Money Pool Deposit & Withdrawals Interaction </h4>
          <p className="desc" style={{ marginBottom: 24 }}>
            An immersive interaction for depositing and withdrawing money from account.
          </p>
          <div>
            <video
              controls
              style={{ maxWidth: 375, width: '100%' }}
              autoPlay={notMobile}
              loop
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/money-pool.MP4"
            />
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h4 className="heading">Navigation AI</h4>
          <p className="desc" style={{ marginBottom: 24 }}>
            A Navigation AI chat services that helps wandering users using LLM.
          </p>
          <div>
            <video
              controls
              style={{ maxWidth: 375, width: '100%' }}
              autoPlay={notMobile}
              loop
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/navigation-ai.MP4"
            />
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h4 className="heading">Ten Million Users Campaign</h4>
          <p className="desc" style={{ marginBottom: 24 }}>
            A campaign website celebrating 10M users achievement.
          </p>
          <div>
            <video
              controls
              style={{ maxWidth: 1668, width: '100%' }}
              autoPlay={notMobile}
              loop
              src="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/works/tossbank/ten-million.mov"
            />
          </div>
        </div>
      </main>
      <Footer title={'Toss Bank'} />
    </div>
  );
}
