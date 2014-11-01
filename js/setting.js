/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.04; // 県民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'budget_ja_oitapref_2014';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {
  /* oita pref cofog */
  '1000': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1001': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1100': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' },
  '1101': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' },
  '1102': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' },
  '1103': { icon:'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' },
  '1104': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1105': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1106': { icon:'icons/ambulance.svg', color: '#C75746', bcolor: '#935B3B' },
  '1107': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' },
  '1108': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1109': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1200': { icon:'icons/helping-others.svg', color: '#C75746', bcolor: '#935B3B' },
  '1201': { icon:'icons/helping-others.svg', color: '#C75746', bcolor: '#935B3B' },
  '1202': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '1203': { icon:'icons/family2.svg', color: '#C75746', bcolor: '#935B3B' },
  '1204': { icon:'icons/ambulance.svg', color: '#C75746', bcolor: '#935B3B' },
  '1300': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '1301': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '1302': { icon:'icons/environment.svg', color: '#C75746', bcolor: '#935B3B' },
  '1303': { icon:'icons/health.svg', color: '#C75746', bcolor: '#935B3B' },
  '1304': { icon:'icons/health.svg', color: '#C75746', bcolor: '#935B3B' },
  '1305': { icon:'icons/medical-supplies.svg', color: '#C75746', bcolor: '#935B3B' },
  '1400': { icon:'icons/human-resources.svg', color: '#C75746', bcolor: '#935B3B' },
  '1401': { icon:'icons/misc-services.svg', color: '#C75746', bcolor: '#935B3B' },
  '1402': { icon:'icons/labour.svg', color: '#C75746', bcolor: '#935B3B' },
  '1403': { icon:'icons/unemployment.svg', color: '#C75746', bcolor: '#935B3B' },
  '1404': { icon:'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' },
  '1500': { icon:'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },
  '1501': { icon:'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },
  '1502': { icon:'icons/pig.svg', color: '#C75746', bcolor: '#935B3B' },
  '1503': { icon:'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },
  '1504': { icon:'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },
  '1505': { icon:'icons/harbor.svg', color: '#C75746', bcolor: '#935B3B' },
  '1600': { icon:'icons/labour.svg', color: '#C75746', bcolor: '#935B3B' },
  '1601': { icon:'icons/labour.svg', color: '#C75746', bcolor: '#935B3B' },
  '1602': { icon:'icons/coal.svg', color: '#C75746', bcolor: '#935B3B' },
  '1603': { icon:'icons/island.svg', color: '#C75746', bcolor: '#935B3B' },
  '1700': { icon:'icons/coal.svg', color: '#C75746', bcolor: '#935B3B' },
  '1701': { icon:'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#935B3B' },
  '1702': { icon:'icons/car.svg', color: '#C75746', bcolor: '#935B3B' },
  '1703': { icon:'icons/harbor.svg', color: '#C75746', bcolor: '#935B3B' },
  '1704': { icon:'icons/harbor.svg', color: '#C75746', bcolor: '#935B3B' },
  '1705': { icon:'icons/street-lights.svg', color: '#C75746', bcolor: '#935B3B' },
  '1706': { icon:'icons/housing.svg', color: '#C75746', bcolor: '#935B3B' },
  '1800': { icon:'icons/police2.svg', color: '#C75746', bcolor: '#935B3B' },
  '1801': { icon:'icons/police2.svg', color: '#C75746', bcolor: '#935B3B' },
  '1802': { icon:'icons/police2.svg', color: '#C75746', bcolor: '#935B3B' },
  '1900': { icon:'icons/education.svg', color: '#C75746', bcolor: '#935B3B' },
  '1901': { icon:'icons/schools.svg', color: '#C75746', bcolor: '#935B3B' },
  '1902': { icon:'icons/pre-school.svg', color: '#C75746', bcolor: '#935B3B' },
  '1903': { icon:'icons/secondary-lower.svg', color: '#C75746', bcolor: '#935B3B' },
  '1904': { icon:'icons/secondary-upper.svg', color: '#C75746', bcolor: '#935B3B' },
  '1905': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '1906': { icon:'icons/education.svg', color: '#C75746', bcolor: '#935B3B' },
  '1907': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '1908': { icon:'icons/sports.svg', color: '#C75746', bcolor: '#935B3B' },
  '2000': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' },
  '2001': { icon:'icons/dollar.svg', color: '#C75746', bcolor: '#935B3B' },
  '2002': { icon:'icons/family.svg', color: '#C75746', bcolor: '#935B3B' },
  '2003': { icon:'icons/economic-aid.svg', color: '#C75746', bcolor: '#935B3B' },
  '2004': { icon:'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#935B3B' },
  '2005': { icon:'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },
  '2006': { icon:'icons/harbor.svg', color: '#C75746', bcolor: '#935B3B' },
  '2007': { icon:'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },
  '2008': { icon:'icons/forest.svg', color: '#C75746', bcolor: '#935B3B' },
  '2009': { icon:'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#935B3B' },
  '2010': { icon:'icons/construction.svg', color: '#C75746', bcolor: '#935B3B' },
  '2011': { icon:'icons/planning.svg', color: '#C75746', bcolor: '#935B3B' }
};


