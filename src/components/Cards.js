import React, { Component } from "react";
import InventionCard from "./InventionCard";
import "./Cards.css";

const wirelessFull = `Im Jahr 1901 startete Nikola Tesla ein einzigartiges Projekt. Es trug den Namen Wardenclyffe, ein damals noch nie gesehener
experimenteller drahtloser Sendeturm. Er ist Teil seines „Weltenergiesystems“, welches es möglich machen sollte, elektrische Energie
kabellos, sowie eine drahtlose Punkt-zu-Punkt-Telekommunikation, in alle Regionen der Erde zu übertragen. Zudem sollte es auch die
Zusammenschaltung aller Telefon- und Telegrafensysteme sowie anderer Datenstationen ermöglichen. Jedoch wurde der Sendeturm nie in Betrieb
genommen, da Tesla die finanziellen Mittel ausgingen. So verfiel mit den Jahren die Anlage und wurde schlussendlich am 15. Juli 1917
abgerissen. Teslas Traum, die Welt kostenlos mit Strom zu versorgen, zerbrach in tausend Stücke. Mit Teslas Sendeturm wäre es möglich
gewesen, jeder Bevölkerungsgruppe auf der Welt Zugang zu elektrischer Energie zu verhelfen. Auch Fortbewegungsmittel wie Autos, Flugzeuge,
oder Züge könnten drahtlos mit elektrischer Energie versorgt werden. Der Sendeturm wäre die Lösung für eine umweltbewusste und
futuristische Art der Versorgung mit Strom und Kommunikationsmittel gewesen. Dieses mächtige Potential erkannten auch viele Unternehmen
wie „Viziv Technologies“ oder „Emrod“ und investieren in ähnliche Sendetürme, die sich aktuell noch in der Testphase befinden. Und wer
weiß, vielleicht wird Nikola Teslas Traum, eine Welt, umgeben von drahtloser elektrischer Energie eines Tages doch noch wahr.`;

const motorFull = `Tesla ist in der modernen Bevölkerung ein gut bekannter Name. Als Vorreiter in dem Bereich Elektroautos startete der Namensvetter des
berühmten Wissenschaftlers unter der Führung von Elon Musk durch. 2014 bauten Sie ihr erstes Elektroauto, welches mit dem namensgebenden
Mehr-Phasen-Elektromotor ausgestattet war. Mit der zufälligen Entdeckung des Zusammenhangs zwischen stromdurchflossenen Leitern und
elektromagnetischen Feldern war der Grundstein des Elektromotors gelegt. Viele verschiedene Forscher erkannten das Potenzial dieser
Erkenntnis sehr schnell und waren in der Lage nur wenige Jahre später schon die ersten funktionierenden Motoren zu konstruieren. Nikola
Tesla war einer der Vorreiter und somit seiner Zeit weit voraus. Um 1880 begann er die Arbeit an seinem Mehr-Phasen-Elektromotor. Diese
seiner Erfindungen wurde, wie auch die meisten Anderen, zunächst belächelt, später aber wertgeschätzt. Der Motor galt wegen fehlendem
Wissensstand als extrem gefährlich, war jedoch weitaus effizienter als die zu diesem Zeitpunkt bestehenden Gleichstrommotoren. Bis in die
Moderne werden Elektromotoren nach Teslas Vorschriften gebaut und genutzt.`;

const remoteFull = `Im Jahr 1898 präsentierte Nikola Tesla dem New Yorker Publikum das erste ferngesteuerte Boot. Es war unbemannt und wurde mithilfe von Radiowellen
gesteuert. Der Sender befand sich in einem kleinen Kasten, der vor dem Erfinder stand. Auf dem Boot befand sich der Empfänger, ein von Tesla erfundenes
Schaltelement. Er bestand aus einem Kanister mit Metallpulver, der sich beim Empfang eines Radiosignals so ausrichtete, dass Strom floss. Mit
verschiedenen weiteren Schaltelementen kombiniert, konnte Tesla so den Elektromotor steuern, der die Schiffsschraube antrieb. Nikola Tesla hoffte, mit
seinem ferngesteuerten Boot vor allem die Marine als Geldgeber zu gewinnen. Denn mit seiner Technologie könnten sich weitaus mehr Dinge steuern lassen
als nur Schiffe. Dazu zählen Torpedos und andere Waffen, wie er den US-Militärs erklärt. Doch Tesla ist seiner Zeit wieder einmal zu weit voraus. Der
Marine ist das Ganze zu fremdartig, das Potenzial zu wenig greifbar. Erst einige Jahre später, im Ersten Weltkrieg, erkannte das Militär die
Leistungsfähigkeit. Heute gehören ferngesteuerte Drohnen, Raketen und Fahrzeuge längst zur Standardausrüstung  von Militärs weltweit. In unserem Alltag
sind die vielen Geräte, welche von „unsichtbaren Wellen“ gesteuert werden nicht mehr wegzudenken. Die Fernbedienung hat dem Menschen ermöglicht, viele
Aufgaben auszuführen, die schwierig, wenn nicht unmöglich wären.`;

const radioFull = `Es ist schwierig, die Bedeutung von Radiowellen im heutigen Leben zu überschätzen. Sie sind überall zu finden, in allen Bereichen des
Lebens. Das Mobilnetz, welches uns erlaubt miteinander zu kommunizieren, das GPS, welches wir bei der Navigation nutzen, die
Satelliten, welche für die Datenübertragung über tausende von Kilometern verantwortlich sind und zu guter Letzt, das Internet. Alles
das wäre unvorstellbar gewesen, hätte die Menschheit nicht entdeckt, wie man die Radiowellen nutzen kann. Einer der ersten, der
angefangen hat diese zu forschen und leistete somit einen riesigen Beitrag für die ganze Menschheit, war der serbisch-amerikanische
Wissenschaftler Nikola Tesla. Seine ersten Experimente mit Radio begann Tesla kurz nachdem er die ersten Teslaspulen gebaut hat. Er
entdeckte, dass diese in der Lage sind, Funkwellen zu senden und zu empfangen, wenn sie auf die gleiche Frequenz angepasst waren. Zu
gleicher Zeit konnte man die Teslaspule auch als einen Rundfunksender nutzen. Bis zu seinem Tod im Jahr 1943, beschäftigte sich Nikola
Tesla mit Funkwellen. Ein großer Teil der heutigen Radiotechnologie basiert auf Teslas Forschungen und was wir uns jetzt unter Radio
vorstellen, wäre undenkbar, hätte es den Nikola Tesla nie gegeben.`;

export class Cards extends Component {
  render() {
    return (
      <div className="inventions__cards__flex">
        <InventionCard src={require("../img/remote-card.jpg")} text="Infrarotfernbedienung" textFull={remoteFull} />
        <InventionCard src={require("../img/radio-card.jpg")} text="Radiowellen" textFull={radioFull} />
        <InventionCard src={require("../img/motor-card.jpg")} text="Wechselstrommotor" textFull={motorFull} />
        <InventionCard src={require("../img/wireless-card.jpg")} text="drahtlose Energieübertragung" textFull={wirelessFull} />
      </div>
    );
  }
}

export default Cards;
