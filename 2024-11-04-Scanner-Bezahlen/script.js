class GeldLade {
    constructor() {
      this.kasse = 0;
    }
  
    scannen(artikel) {
      this.artikel = artikel;
    }
  
    bezahlen(betrag) {
      if (betrag < this.artikel.preis) {
        throw new Error("Der eingegebene Betrag ist nicht ausreichend.");
      }
      this.kasse += this.artikel.preis;
      const rueckgeld = betrag - this.artikel.preis;
      return { bezahlterBetrag: this.artikel.preis, rueckgeld };
    }
  
    toString() {
      return `Heute wurden ${this.kasse} € einggenommen.`;
    }
  }
  
  const artikel = { name: "Cola", preis: 1.49 };
  const geldLade = new GeldLade();
  geldLade.scannen(artikel);
  
  try {
    const { bezahlterBetrag, rueckgeld } = geldLade.bezahlen(5.00);
    console.log(
      `Der bezahlte Betrag betrug ${bezahlterBetrag} € und das Rückgeld beträgt ${rueckgeld} €.`
    );
  } catch (e) {
    console.error(e.message);
  }
  
  console.log(geldLade.toString());