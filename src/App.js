import "./styles/reset.css";
import "./styles/style.css";
import Wrapper from "./components/Wrapper";
import IntroTitle from "./components/IntroTitle";
import Snip from "./components/Snip";
import WrapperTwo from "./components/WrapperTwo";
import Cards from "./components/Cards";
import GameSnip from "./components/gameSnip";
import EndSnip from "./components/EndSnip";
import Sources from "./components/Sources";
import Schem from "./components/Schem";

function App() {
  return (
    <div className="App">
      <main>
        <section className="intro">
          <Wrapper>
            <div className="intro__flex">
              <IntroTitle>nikola tesla</IntroTitle>
            </div>
            <p className="intro__members">Seminarfachgruppe 16: Nikola Tesla - Der Einfluss seiner Forschung auf die moderne Bevölkerung</p>
          </Wrapper>
        </section>

        <section className="about">
          <Wrapper>
            <div className="about__content">
              <WrapperTwo>
                <Snip>
                  <h2>Über die Arbeit</h2>
                  <p>
                    Nachdem wir uns nun mehrere Monate intensiv mit dem Thema Nikola Tesla beschäftigt haben, freuen wir uns, ihnen diese Website
                    präsentieren zu dürfen. Die Seminarfachgruppe 16, bestehend aus Yannick Rippel, Peter Pyshnyy, Sarah Graf und Leah Weise möchten
                    Ihnen das Leben und die Erfindung von Nikola Tesla vorstellen. Diese Website beinhaltet vier seiner Erfindungen, Hintergründe,
                    Highlights, wichtige Ereignisse und Ergebnisse. Mit dieser Website verfolgen wir das Ziel, den Lesern Hintergrundwissen zu
                    vermitteln und das Interesse für Nikola Tesla zu wecken. Wir wünschen Ihnen viel Freude beim Lesen.
                  </p>
                </Snip>
              </WrapperTwo>
            </div>
          </Wrapper>
        </section>

        <section className="inventions">
          <Wrapper>
            <WrapperTwo>
              <div className="inventions__about">
                <Snip>
                  <h2>Teslas Erfindungen</h2>
                  <p>
                    Nikola Tesla war einer der brillantesten Pioniere des elektrischen Zeitalters. Mit seinen Erfindungen war er seiner Zeit weit
                    voraus. Gleichzeitig prägte er mit seinen Erfindungen die Entwicklung der modernen Welt, wie kein anderer es tat. Seine Ideen
                    schufen unter anderem die Grundlagen für das moderne Wechselstromnetz, Elektromotoren, Neonröhren, Mikrowellenherde und das Radio.
                  </p>
                </Snip>
              </div>

              <div className="inventions__cards">
                <Cards />
              </div>
            </WrapperTwo>
          </Wrapper>
        </section>

        <section className="game">
          <div className="game__bg">
            <Wrapper>
              <div className="game__wrapper">
                <GameSnip>
                  <h2>Teslas Erfindung selbst nachbauen</h2>
                  <p>So kannst du einfach einen Elektromotor Bauen:</p>
                </GameSnip>
                <Schem></Schem>
              </div>
            </Wrapper>
          </div>
        </section>

        <section className="end-word">
          <Wrapper>
            <EndSnip className="align-left">
              <h2>Schlusswort</h2>
              <p>
                Mit seinen bahnbrechenden Erfindungen gilt er als einer der brillantesten Köpfe aller Zeiten. Trotz vieler Niederschläge in seinem
                Leben ließ er sich niemals aufhalten und arbeitete weiter an seinen Erfindungen. Viele seiner Forschungen und Erfindungen stecken in
                der heutigen Technik oder inspirieren Forscher aller Welt zu Weiterentwicklungen. Eine Welt wie wir sie heute kennen würde es ohne ihn
                nicht geben. Dem Seminarfachteam 16 hat es viel Freude bereitet an diesem Thema zu arbeiten. Durch unsere Arbeit haben wir viel Neues
                erfahren und hoffen, sie trägt dazu bei, den Einfluss Teslas bekannter zu machen.
              </p>
            </EndSnip>
          </Wrapper>
        </section>
        <Wrapper>
          <Sources></Sources>
        </Wrapper>
      </main>

      <footer>
        <Wrapper>
          <div className="footer__content">
            <p>Seminarfachgruppe 16: Nikola Tesla - Der Einfluss seiner Forschung auf die moderne Bevölkerung</p>
            <p>Yannick Rippel, Peter Pyshnyy, Sarah Graf und Leah Weise</p>
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}

export default App;
