/**
 * Evidence ledger. References are source IDs, never unattributed numerical scores.
 * Reviewed 2026-10-16. Recheck material claims when the source changes.
 * The risk of two substances cannot be reduced to a single universal score.
 */
export const reviewedOn = '2026-10-16';

export const sources = {
  whoAlcohol: {
    org: 'World Health Organization', title: 'Alcohol · fact sheet', published: '2024-06-28',
    url: 'https://www.who.int/news-room/fact-sheets/detail/alcohol',
    note: '2019 global burden estimates, toxic properties, dependence and cancer.'
  },
  whoCancer: {
    org: 'WHO Regional Office for Europe', title: 'Alcohol and cancer', published: '2025-11-26',
    url: 'https://www.who.int/europe/news-room/fact-sheets/item/alcohol-and-cancer',
    note: 'Explains the absence of an established no-risk threshold for alcohol-related cancer.'
  },
  cdcCancer: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Alcohol and cancer', published: '2026-01-29',
    url: 'https://www.cdc.gov/cancer/risk-factors/alcohol.html',
    note: 'Alcohol and seven established cancer sites.'
  },
  cdcAlcohol: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Alcohol use and your health', published: '2025-01-14',
    url: 'https://www.cdc.gov/alcohol/about-alcohol-use/index.html',
    note: 'Short-term and long-term alcohol health effects, including alcohol poisoning.'
  },
  cdcCannabis: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis health effects', published: '2024-02-16',
    url: 'https://www.cdc.gov/cannabis/health-effects/index.html',
    note: 'Cannabis use disorder, memory, learning, and cardiovascular concerns.'
  },
  cdcCannabisFaq: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis frequently asked questions', published: '2025',
    url: 'https://www.cdc.gov/cannabis/faq/index.html',
    note: 'Cannabis overconsumption and risks; cannabis-only fatal overdose described as unlikely.'
  },
  cdcCannabisLung: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis and lung health', published: '2024-02-15',
    url: 'https://www.cdc.gov/cannabis/health-effects/lung-health.html',
    note: 'Documented smoked-cannabis respiratory harms and uncertain long-term cancer effects.'
  },
  cdcCannabisHeart: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis and heart health', published: '2024-02-15',
    url: 'https://www.cdc.gov/cannabis/health-effects/heart-health.html',
    note: 'Acute heart rate/blood pressure changes, observational links, uncertainty.'
  },
  cdcCannabisDriving: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis and driving', published: '2024-02-22',
    url: 'https://www.cdc.gov/cannabis/health-effects/driving.html',
    note: 'Impairment and crash-risk uncertainty.'
  },
  cdcCannabisPregnancy: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis and pregnancy', published: '2025-01-31',
    url: 'https://www.cdc.gov/cannabis/health-effects/pregnancy.html',
    note: 'Prenatal cannabis exposure risks and evidence gaps.'
  },
  cdcCannabisPoisoning: {
    org: 'U.S. Centers for Disease Control and Prevention', title: 'Cannabis and poisoning', published: '2024-02-15',
    url: 'https://www.cdc.gov/cannabis/health-effects/poisoning.html',
    note: 'Edibles, delayed effects and child poisonings.'
  },
  niaaaWithdrawal: {
    org: 'National Institute on Alcohol Abuse and Alcoholism', title: 'Alcohol use disorder: from risk to recovery', published: '2025',
    url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery',
    note: 'Potentially life-threatening withdrawal and the need for medical support.'
  },
  whoMarketing: {
    org: 'World Health Organization', title: 'SAFER: alcohol advertising, sponsorship and promotion', published: '2022',
    url: 'https://www.who.int/initiatives/SAFER/alcohol-advertising',
    note: 'Marketing practices, sports sponsorship and youth exposure.'
  },
  samhsa: {
    org: 'Substance Abuse and Mental Health Services Administration', title: 'Find substance use disorder treatment', published: '2024',
    url: 'https://www.samhsa.gov/substance-use/treatment/find-treatment',
    note: 'Free, confidential national helpline and care locator for the U.S.'
  }
};

export const spotlight = [
  { number: '2.6M', label: 'Global deaths attributable to alcohol in 2019', context: 'WHO estimate published in 2024. Not a current-year count.', refs: ['whoAlcohol'] },
  { number: '7', label: 'Established alcohol-related cancer sites', context: 'Including breast, liver and colorectal cancer.', refs: ['cdcCancer'] },
  { number: '0', label: 'Established risk-free threshold for alcohol-related cancer', context: 'This is not a prediction that one drink will cause cancer.', refs: ['whoCancer'] }
];

export const comparison = [
  {
    id: 'cancer', label: 'Cancer', icon: '✳',
    alcohol: { title: 'Established carcinogen', text: 'Drinking alcohol raises the risk of several cancers. The risk increases with exposure; no risk-free threshold has been established for cancer.', evidence: 'Established', refs: ['cdcCancer', 'whoCancer'] },
    cannabis: { title: 'Different evidence picture', text: 'Cannabis smoke contains carcinogens and harms airways. Research has not established a clear causal link between smoking cannabis and lung cancer.', evidence: 'Mixed / evolving', refs: ['cdcCannabisLung'] },
    context: 'Cancer findings depend on route, frequency, co-exposures, cancer type and quality of evidence.'
  },
  {
    id: 'overdose', label: 'Acute poisoning', icon: '!',
    alcohol: { title: 'Can be fatal', text: 'Alcohol poisoning can disrupt breathing, heart rate and other critical functions, especially with rapid heavy drinking.', evidence: 'Established', refs: ['cdcAlcohol'] },
    cannabis: { title: 'Serious reactions are possible', text: 'Fatal overdose from cannabis alone is unlikely, but severe reactions and accidental injuries can occur. Edibles can cause poisoning, especially in children.', evidence: 'Established / qualified', refs: ['cdcCannabisFaq', 'cdcCannabisPoisoning'] },
    context: 'This does not compare lifetime harm or mean cannabis is safe to overconsume.'
  },
  {
    id: 'dependence', label: 'Dependence & withdrawal', icon: '↗',
    alcohol: { title: 'Can be life-threatening to stop suddenly', text: 'Alcohol use disorder can involve dependence. Withdrawal after prolonged heavy use can cause seizures or delirium and may need medical supervision.', evidence: 'Established', refs: ['niaaaWithdrawal'] },
    cannabis: { title: 'Dependence is real', text: 'Cannabis use disorder can develop. Risk rises with frequent use, high-THC products and earlier initiation.', evidence: 'Established', refs: ['cdcCannabis'] },
    context: 'Dependence risk varies with dose, frequency, age, genetics and other circumstances.'
  },
  {
    id: 'driving', label: 'Driving & judgment', icon: '↝',
    alcohol: { title: 'Impairs safe decisions', text: 'Alcohol impairs coordination and decision-making and contributes to crashes and injuries.', evidence: 'Established', refs: ['cdcAlcohol'] },
    cannabis: { title: 'Also impairs driving', text: 'THC can slow reaction time, affect judgment and coordination. A specific THC level does not reliably measure an individual driver’s impairment.', evidence: 'Established / nuanced', refs: ['cdcCannabisDriving'] },
    context: 'Neither substance should be used before driving. Mixing substances can compound impairment.'
  },
  {
    id: 'organs', label: 'Organs & long-term health', icon: '♡',
    alcohol: { title: 'Multiple organ systems', text: 'Long-term alcohol use contributes to liver disease, cardiovascular problems and several cancers.', evidence: 'Established', refs: ['whoAlcohol', 'cdcAlcohol'] },
    cannabis: { title: 'Not risk-free', text: 'Smoking can harm lungs. Cannabis can raise heart rate after use, and possible vascular effects remain under study.', evidence: 'Mixed / evolving', refs: ['cdcCannabisLung', 'cdcCannabisHeart'] },
    context: 'Comparisons are not dose-matched and cannot establish a universal “safer substance.”'
  },
  {
    id: 'pregnancy', label: 'Pregnancy & development', icon: '◉',
    alcohol: { title: 'Established developmental harms', text: 'Alcohol in pregnancy can cause fetal alcohol spectrum disorders and other complications.', evidence: 'Established', refs: ['cdcAlcohol'] },
    cannabis: { title: 'Potential developmental harms', text: 'THC crosses to the fetus; research links prenatal exposure with developmental concerns. CDC recommends avoiding cannabis in pregnancy.', evidence: 'Evidence evolving', refs: ['cdcCannabisPregnancy'] },
    context: 'Pregnancy is not a situation where either substance is a safe substitute for the other.'
  }
];

export const organs = [
  { id: 'brain', name: 'Brain', kicker: 'Memory / judgment / dependence', alcohol: 'Alcohol affects judgment and behavior; long-term heavy drinking can contribute to mental and neurological harms.', cannabis: 'Cannabis affects attention, learning, memory, judgment and reaction time.', refs: ['whoAlcohol', 'cdcCannabis'] },
  { id: 'heart', name: 'Heart', kicker: 'Cardiovascular system', alcohol: 'Alcohol use is linked to cardiovascular diseases; the risks depend partly on drinking patterns.', cannabis: 'Cannabis can raise heart rate and blood pressure shortly after use; longer-term effects are still being studied.', refs: ['whoAlcohol', 'cdcCannabisHeart'] },
  { id: 'liver', name: 'Liver', kicker: 'Metabolism / disease', alcohol: 'Your liver processes alcohol, and chronic heavy drinking can damage it and contribute to liver disease.', cannabis: 'Cannabis is not established as a parallel cause of alcohol-type liver disease. That does not establish overall safety.', refs: ['cdcAlcohol', 'cdcCannabis'] },
  { id: 'lungs', name: 'Lungs', kicker: 'Breathing / route of use', alcohol: 'Alcohol-related harm can affect many organs, but it does not have the same direct smoke exposure as inhaled products.', cannabis: 'Smoking cannabis directly exposes lungs to irritants, toxins and carcinogens and is associated with cough and bronchitis.', refs: ['cdcAlcohol', 'cdcCannabisLung'] },
];

export const myths = [
  { id: 'wine', claim: '“A glass of red wine is a health supplement.”', verdict: 'Misleading', answer: 'All alcoholic beverages, including wine, raise the risk of certain cancers. Any proposed cardiovascular benefit cannot erase that risk.', refs: ['cdcCancer', 'whoCancer'] },
  { id: 'weed', claim: '“Cannabis cannot be addictive.”', verdict: 'False', answer: 'Cannabis use disorder is real. Frequency, THC potency and age of initiation all matter.', refs: ['cdcCannabis'] },
  { id: 'beer', claim: '“Beer doesn’t count as alcohol.”', verdict: 'False', answer: 'Beer, wine and spirits contain ethanol. Alcohol-related cancer risk comes from ethanol regardless of beverage category.', refs: ['whoAlcohol', 'cdcCancer'] },
  { id: 'driving', claim: '“Driving high is completely safe.”', verdict: 'False', answer: 'Cannabis can impair reaction time, perception and coordination. Do not drive impaired.', refs: ['cdcCannabisDriving'] },
  { id: 'coldturkey', claim: '“Everyone can safely quit heavy drinking overnight.”', verdict: 'False, and important', answer: 'Sudden alcohol withdrawal can be medically dangerous for people with prolonged heavy use. A healthcare professional can help plan safer treatment.', refs: ['niaaaWithdrawal'] },
  { id: 'one', claim: '“One drink automatically causes cancer.”', verdict: 'False', answer: 'There is no established risk-free level for alcohol-related cancer, but increased risk is not the same as a guaranteed outcome for an individual.', refs: ['whoCancer'] },
];

export const marketing = [
  { id: 'sports', tag: 'SPORTS', headline: 'The winning moment', pitch: 'A fictional product appears beside a championship celebration.', cue: 'Association transfer', explanation: 'Pairing a brand with sport can make the product feel inseparable from victory and belonging. It does not establish a health benefit.', refs: ['whoMarketing'] },
  { id: 'friends', tag: 'SOCIAL LIFE', headline: 'The only way to celebrate?', pitch: 'A fictional party scene implies that every good memory requires a drink.', cue: 'Social normalization', explanation: 'Repeated images can frame drinking as the expected social default. Notice which alternatives are missing.', refs: ['whoMarketing'] },
  { id: 'feed', tag: 'DIGITAL FEED', headline: 'A message made for you', pitch: 'A fictional sponsored post resembles a recommendation from someone you follow.', cue: 'Blended promotion', explanation: 'Digital promotion can blend into ordinary content and social connections. Ask who paid for the message and what they want you to do.', refs: ['whoMarketing'] }
];

export const principles = [
  'We educate without shaming people who drink, use cannabis, or seek treatment.',
  'We do not replace medical advice or tell people to quit dependent alcohol use abruptly.',
  'We show evidence strength and uncertainty, not simplistic winner/loser scores.',
  'We never portray cannabis as harmless or claim alcohol harm is inevitable for one person.',
  'We cite original public-health sources and display the reference dates.',
  'No accounts, tracking pixels, advertising, or personal health-data collection.'
];