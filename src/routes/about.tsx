import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "../components/ContactForm";
import classes from "../App.module.css";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2>Om oss</h2>
      <section className={classes.card}>
        <h3>RiksTV</h3>
        <p>
          RiksTV - hvem er vi? I RiksTV jobber vi for å skape et produkt til
          glede for fremtidige generasjoner. For å greie dette må vi ha en
          kultur som inspirerer oss til å være den beste utgaven av oss selv.
          Måten vi etterlever verdiene på er å bygge selskapet som en familie.
          Vi er en lidenskapelig og nysgjerrig gjeng som alltid streber etter å
          bli bedre.
          <br />
          Vi er modige fordi vi tør. Vi tør å si ifra, vi tør å feile og vi tør
          å tenke utenfor boksen. Noen ganger lykkes vi, og andre ganger går det
          ikke så bra som vi håpet. Men enten vi opplever nedtur eller opptur,
          så gjør vi det som ett samlet team - eller én sammensveiset familie,
          om du vil.
        </p>
      </section>
      <section>
        <h3>Ta kontakt</h3>
        <p>
          Har du spørsmål om RiksTV? Ta gjerne kontakt med oss via vårt
          kontaktskjema, så svarer vi deg så snart som mulig.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
