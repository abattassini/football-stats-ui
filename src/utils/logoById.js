import logoFortaleza from "../images/team-logos/1.png";
import logoAtleticoPr from "../images/team-logos/2.png";
import logoCoritiba from "../images/team-logos/3.png";
import logoInternacional from "../images/team-logos/4.png";
import logoSport from "../images/team-logos/5.png";
import logoCeara from "../images/team-logos/6.png";
import logoFlamengo from "../images/team-logos/7.png";
import logoAtleticoMg from "../images/team-logos/8.png";
import logoSantos from "../images/team-logos/9.png";
import logoBragantino from "../images/team-logos/10.png";
import logoGremio from "../images/team-logos/11.png";
import logoFluminense from "../images/team-logos/12.png";
import logoBotafogo from "../images/team-logos/13.png";
import logoBahia from "../images/team-logos/14.png";
import logoCorinthians from "../images/team-logos/15.png";
import logoAtleticoGo from "../images/team-logos/16.png";
import logoGoias from "../images/team-logos/17.png";
import logoSaoPaulo from "../images/team-logos/18.png";
import logoPalmeiras from "../images/team-logos/19.png";
import logoVasco from "../images/team-logos/20.png";
import logoVitoria from "../images/team-logos/21.png";
import logoCruzeiro from "../images/team-logos/22.png";
import logoAmericaMg from "../images/team-logos/23.png";
import logoChapecoense from "../images/team-logos/24.png";
import logoParana from "../images/team-logos/25.png";
import logoAvai from "../images/team-logos/26.png";
import logoCSA from "../images/team-logos/27.png";

const logoIds = {
  1: logoFortaleza,
  2: logoAtleticoPr,
  3: logoCoritiba,
  4: logoInternacional,
  5: logoSport,
  6: logoCeara,
  7: logoFlamengo,
  8: logoAtleticoMg,
  9: logoSantos,
  10: logoBragantino,
  11: logoGremio,
  12: logoFluminense,
  13: logoBotafogo,
  14: logoBahia,
  15: logoCorinthians,
  16: logoAtleticoGo,
  17: logoGoias,
  18: logoSaoPaulo,
  19: logoPalmeiras,
  20: logoVasco,
  21: logoVitoria,
  22: logoCruzeiro,
  23: logoAmericaMg,
  24: logoChapecoense,
  25: logoParana,
  26: logoAvai,
  27: logoCSA,
};

export const getLogoById = (id) => {
  if (logoIds[id]) {
    return logoIds[id];
  }
  return null;
};
