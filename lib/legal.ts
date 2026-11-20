/** Rechtstexte-ENTWÜRFE. [[Doppelklammern]] = Platzhalter, den du ausfüllen musst. Nicht anwaltlich geprüft. */
export type Section = { h: string; p: string[] };
export const legal: Record<string, { intro?: string; sections: Section[] }> = {
  impressum: { sections: [
    { h: "Angaben nach § 5 DDG", p: ["[[VOLLSTÄNDIGER NAME / FIRMENNAME]]", "[[RECHTSFORM, falls Unternehmen]]", "[[STRASSE, HAUSNUMMER, PLZ, ORT]]"] },
    { h: "Kontakt", p: ["E-Mail: [[E-MAIL-ADRESSE]]", "Telefon: [[TELEFONNUMMER, falls erforderlich]]"] },
    { h: "Weitere Angaben", p: ["Umsatzsteuer-ID: [[USt-IdNr., sofern vorhanden]]", "Registerangaben: [[Register und Nummer, sofern erforderlich]]", "Verantwortlich für Inhalte: [[VERANTWORTLICHE PERSON, falls erforderlich]]"] },
  ] },
  datenschutz: { intro: "Entwurf der Struktur. Die tatsächlich eingesetzten Dienste müssen vollständig ergänzt und geprüft werden.", sections: [
    { h: "Verantwortlicher", p: ["[[NAME, ANSCHRIFT, E-MAIL des Verantwortlichen]]", "Datenschutz-Kontakt: [[DATENSCHUTZ-KONTAKT bzw. Datenschutzbeauftragte/r, falls vorhanden]]"] },
    { h: "Hosting und Server-Logfiles", p: ["Diese Website wird bei [[HOSTING-ANBIETER, Anschrift, Auftragsverarbeitungsvertrag prüfen]] betrieben. Beim Aufruf werden technisch notwendige Verbindungsdaten (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite) verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. [[Speicherdauer eintragen]]"] },
    { h: "Schriftarten", p: ["Die Schriftarten werden beim Build der Website lokal eingebunden und nicht bei jedem Aufruf von Google-Servern geladen. [[Nach dem Deployment prüfen, dass keine Verbindung zu Google-Servern stattfindet]]"] },
    { h: "Kontaktaufnahme per E-Mail", p: ["Wenn du uns schreibst, verarbeiten wir deine Angaben zur Bearbeitung der Anfrage (Art. 6 Abs. 1 lit. b oder f DSGVO). [[Speicherdauer eintragen]]"] },
    { h: "Kauf über Whop (Zahlungsanbieter)", p: ["Der Kauf erfolgt auf der Seite des Anbieters [[ZAHLUNGSANBIETER/PLATTFORM: Whop – vollständige Firmierung, Anschrift und deren Datenschutzhinweise eintragen]]. Mit dem Klick auf den Kaufbutton verlässt du diese Website. Für die dortige Datenverarbeitung gelten die Datenschutzhinweise des Anbieters. [[Prüfen: Rollen (Verantwortlicher/Auftragsverarbeiter), Drittlandübermittlung, Verweis auf Garantien]]"] },
    { h: "Cookies, Tracking und Einwilligung (TDDDG)", p: ["Diese Website setzt in der ausgelieferten Grundversion keine Cookies und keine Analyse- oder Marketing-Tools ein, die eine Einwilligung erfordern. [[Prüfen und anpassen]] Falls du später nicht notwendige Cookies, Tracking oder externe Inhalte einbindest, ist vorab eine Einwilligung nach § 25 TDDDG und Art. 6 Abs. 1 lit. a DSGVO über ein Einwilligungsbanner erforderlich."] },
    { h: "Weitere eingesetzte Dienste", p: ["[[WEITERE DIENSTE auflisten (z. B. E-Mail-Dienst, Support-Tool) oder „keine“]]"] },
    { h: "Deine Rechte", p: ["Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde: [[ZUSTÄNDIGE AUFSICHTSBEHÖRDE]]."] },
  ] },
  agb: { intro: "Entwurf. Vertragspartner, Ablauf und Verbraucherinformationen müssen zum tatsächlichen Whop-Checkout passen und anwaltlich geprüft werden.", sections: [
    { h: "1. Geltungsbereich", p: ["Diese AGB gelten für den Kauf des digitalen Produkts „Dein eigenes automatisiertes KI-System“ (PDF) von [[ANBIETER: Name/Firma]]. [[Prüfen: Wer ist Vertragspartner – du oder die Plattform (z. B. als „Merchant of Record“)?]]"] },
    { h: "2. Vertragsgegenstand", p: ["Gegenstand ist ein PDF-Leitfaden mit allgemeinen Informationen. Es wird kein Erfolg und kein Einkommen geschuldet."] },
    { h: "3. Vertragsschluss", p: ["[[Ablauf des Vertragsschlusses im tatsächlichen Whop-Checkout beschreiben, inkl. Bestellbutton, Bestätigung und Vertragstext-Speicherung]]"] },
    { h: "4. Preise und Zahlung", p: ["Der Preis ist der auf der Bestellseite angezeigte Gesamtpreis. [[Angabe zu Umsatzsteuer bzw. Hinweis nach § 19 UStG festlegen]] Zahlungsarten: siehe Zahlungsinformationen."] },
    { h: "5. Lieferung", p: ["Siehe Seite „Lieferung digitaler Produkte“."] },
    { h: "6. Widerrufsrecht", p: ["Siehe Widerrufsbelehrung."] },
    { h: "7. Nutzungsrechte", p: ["Siehe „Urheberrecht & Nutzungsrechte“."] },
    { h: "8. Haftung und Gewährleistung", p: ["Es gelten die gesetzlichen Regelungen. [[Haftungsregelung anwaltlich formulieren lassen]]"] },
    { h: "9. Schlussbestimmungen", p: ["[[Anwendbares Recht, Gerichtsstand und Hinweis zur Streitbeilegung nach aktueller Rechtslage prüfen und ergänzen]]"] },
  ] },
  widerruf: { intro: "Wichtig: Die verbindliche Widerrufsbelehrung muss dem gesetzlichen Muster entsprechen und zum konkreten Checkout passen.", sections: [
    { h: "Widerrufsbelehrung", p: ["[[HIER das aktuelle gesetzliche Muster der Widerrufsbelehrung einfügen (Anlage 1 zu Art. 246a § 1 Abs. 2 S. 2 EGBGB), angepasst auf digitale Inhalte, mit deinen Angaben zu Name, Anschrift und E-Mail]]"] },
    { h: "Vorzeitiges Erlöschen bei digitalen Inhalten", p: ["Das Widerrufsrecht bei nicht auf einem körperlichen Datenträger gelieferten digitalen Inhalten kann nur unter den Voraussetzungen des § 356 Abs. 5 BGB erlöschen, insbesondere bei ausdrücklicher Zustimmung zum Beginn der Ausführung vor Ablauf der Widerrufsfrist, Bestätigung der Kenntnis vom Verlust des Widerrufsrechts und Bestätigung des Vertrags auf einem dauerhaften Datenträger. [[Prüfen, ob der tatsächliche Whop-Checkout dies technisch und rechtlich korrekt abbildet. Eine bloße Checkbox ist nicht pauschal ausreichend.]]"] },
  ] },
  widerrufsformular: { intro: "Entwurf. Gegen das aktuelle gesetzliche Muster (Anlage 2 zu Art. 246a § 1 Abs. 2 S. 1 Nr. 1 EGBGB) abgleichen.", sections: [
    { h: "Muster-Widerrufsformular", p: ["An: [[NAME, ANSCHRIFT, E-MAIL des Anbieters]]", "Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Ware(n) (*)/die Erbringung der folgenden Dienstleistung (*): Digitales Produkt „Dein eigenes automatisiertes KI-System“", "Bestellt am (*) / erhalten am (*): ____________", "Name des/der Verbraucher(s): ____________", "Anschrift des/der Verbraucher(s): ____________", "Datum: ____________ (*) Unzutreffendes streichen."] },
  ] },
  zahlung: { sections: [
    { h: "Zahlung", p: ["Die Zahlung wird über [[ZAHLUNGSANBIETER/PLATTFORM, vollständige Angaben]] abgewickelt. Verfügbare Zahlungsarten: [[ZAHLUNGSARTEN aus dem tatsächlichen Whop-Checkout übernehmen]]."] },
    { h: "Preis", p: ["Es gilt der im Checkout angezeigte Gesamtpreis in [[WÄHRUNG]]. Zusätzliche Kosten für dich entstehen nach unserer Planung nicht. [[Prüfen: Währungsumrechnung oder Gebühren des Zahlungsanbieters für Käufer]]"] },
  ] },
  lieferung: { sections: [
    { h: "Digitale Lieferung", p: ["Das Produkt wird als PDF-Datei ausgeliefert. Der Zugriff erfolgt nach erfolgreicher Zahlung über [[AUSLIEFERUNGSWEG: z. B. Whop-Downloadbereich und/oder E-Mail – an Einrichtung anpassen]]. Es erfolgt kein Versand körperlicher Ware und es fallen keine Versandkosten an."] },
    { h: "Probleme beim Download", p: ["Wenn der Download nicht funktioniert, schreibe an [[SUPPORT-E-MAIL]]. [[Reaktionszeit festlegen]]"] },
  ] },
  haftung: { intro: "Sachlicher Haftungshinweis. Er ersetzt keine anwaltliche Prüfung.", sections: [
    { h: "Allgemeine Informationen", p: ["Das E-Book enthält allgemeine Bildungs- und Informationsinhalte. Es stellt keine Rechts-, Steuer-, Finanz- oder Anlageberatung dar."] },
    { h: "Keine Einkommensgarantie", p: ["Es wird kein bestimmter Erfolg und kein Einkommen garantiert. Ergebnisse hängen von individuellen Faktoren ab, z. B. Nische, Produktqualität, Einsatz, Zeit und Konkurrenz."] },
    { h: "Änderungen und eigene Prüfung", p: ["Preise, Funktionen, Gebühren und Plattformregeln der im E-Book genannten Dienste können sich ändern. Prüfe Informationen vor der Anwendung selbst bei den Anbietern."] },
    { h: "Gesetzliche Haftung", p: ["Wir haften nach den gesetzlichen Vorschriften, insbesondere bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz und bei Verletzung wesentlicher Vertragspflichten. [[Weitere Haftungsregelungen nur anwaltlich formuliert ergänzen]]"] },
  ] },
  urheberrecht: { sections: [
    { h: "Urheberrecht", p: ["Das E-Book, Texte, Grafiken, Vorlagen und Prompts sind urheberrechtlich geschützt. © [[JAHR]] [[RECHTEINHABER]]."] },
    { h: "Nutzungsrechte", p: ["Mit dem Kauf erhältst du ein einfaches, nicht übertragbares Recht zur privaten Nutzung. Weitergabe, Vervielfältigung, Weiterverkauf und öffentliche Zugänglichmachung sind nur mit schriftlicher Zustimmung erlaubt. [[Umfang der Nutzungsrechte (z. B. Nutzung der Vorlagen im eigenen Projekt) festlegen und prüfen lassen]]"] },
    { h: "Marken Dritter", p: ["Genannte Marken gehören den jeweiligen Inhabern. Das E-Book steht in keiner Verbindung zu den genannten Unternehmen."] },
  ] },
};
