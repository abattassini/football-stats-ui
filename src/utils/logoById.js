import logoAtleticoMg from "../images/team-logos/1766.png";
import logoAtleticoPr from "../images/team-logos/1768.png";
import logoCoritiba from "../images/team-logos/3.png";
import logoPalmeiras from "../images/team-logos/1769.png";
import logoFluminense from "../images/team-logos/1765.png";
import logoGremio from "../images/team-logos/1767.png";
import logoChapecoense from "../images/team-logos/1772.png";
import logoSaoPaulo from "../images/team-logos/1776.png";
import logoBahia from "../images/team-logos/1777.png";
import logoSport from "../images/team-logos/1778.png";
import logoCorinthians from "../images/team-logos/1779.png";
import logoFlamengo from "../images/team-logos/1783.png";
import logoCeara from "../images/team-logos/1837.png";
import logoAmericaMg from "../images/team-logos/1838.png";
import logoFortaleza from "../images/team-logos/3984.png";
import logoAtleticoGo from "../images/team-logos/3988.png";
import logoJuventude from "../images/team-logos/4245.png";
import logoBragantino from "../images/team-logos/4286.png";
import logoCuiaba from "../images/team-logos/4289.png";
import logoInternacional from "../images/team-logos/6684.png";
import logoSantos from "../images/team-logos/6685.png";
import logoBotafogo from "../images/team-logos/13.png";
import logoGoias from "../images/team-logos/17.png";
import logoVasco from "../images/team-logos/20.png";
import logoVitoria from "../images/team-logos/21.png";
import logoCruzeiro from "../images/team-logos/22.png";
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
