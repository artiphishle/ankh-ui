"use client";
import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useActivePalette } from 'ankh-config';
import type { IAnkhCmsThemePalette, IAnkhColorHsl, IAnkhUiIntrinsicProps } from 'ankh-types';
import { AnkhUiIcon } from '@/uis/icon/AnkhUiIcon';

const pois = [
  '01_pyramide-von-gizeh',
  '02_zeusstatue-des-phidias',
  '03_artemis-tempel',
  '04_grabmal-von-mausolos',
  '05_die-hängenden-gärten-von-babylon',
  '06_koloss-von-rhodos',
  '07_leuchturm-von-pharaos',
  '08_mausoleum-in-halikamassos',
  '09_amazonas',
  '10_halong-bucht',
  '11_iguazu-wasserfälle',
  '12_jejudos-vulkaninsel',
  '13_komodo-isnel',
  '14_tafelberg',
  '15_puerto-princesa_subterranean-river',
  '16_taj-mahal',
  '17_cristo-redentor',
  '18_matchu-picchu',
  '19_felsenstadt-petra',
  '20_akropolis',
  '21_alhambra',
  '22_angkor-wat',
  '23_eiffelturm',
  '24_hagia-sophia_grand-mosque',
  '25_kiyimizu-dera',
  '26_kremel',
  '27_',
  '28_',
  '29_stonehenge',
  '30_',
  '31_',
  '32_',
  '33_',
  '34_',
  '35_',
  '36_',
  '37_',
  '38_',
  '39_',
  '40_',
  '41_',
  '42_',
  '43_',
  '44_',
  '45_',
  '46_',
  '47_',
  '48_',
  '49_',
  '50_',
  '51_',
  '52_kathedrale-santiago-de-compostela',
  '53_',
  '54_schloss-neuschwanstein',
  '55_',
  '56_',
  '57_',
  '58_',
  '59_',
  '60_',
  '61_',
  '62_',
  '63_',
  '64_',
  '65_',
  '66_',
  '67_',
  '68_',
  '69_',
  '70_',
  '71_',
  '72_',
  '73_',
  '74_',
  '75_',
  '76_',
  '77_',
  '78_',
  '79_',
  '80_',
  '81_',
  '82_',
  '83_',
  '84_',
  '85_',
  '86_',
  '87_',
  '88_',
  '89_',
  '90_',
  '91_',
  '92_',
  '93_',
  '94_',
  '95_',
  '96_',
  '97_',
  '98_',
  '99_',
  '100_',
  '101_',
  '102_',
  '103_',
  '104_vatikanischer-obelisk',
  '105_obelisk-am-patheon',
  '106_',
  '107_',
  '108_',
  '109_',
  '110_',
  '111-obelisk-kairo'
];

export function AnkhUiWheelOfTime({ years, duration = 500 }: IAnkhUiWheelOfTime) {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [currentYear, setCurrentYear] = useState<number[]>([]);
  const [currentPoi, setCurrentPoi] = useState<string[]>([]);
  const [palette, setPalette] = useState<IAnkhCmsThemePalette | null>(null);
  const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h}, ${s}%, ${l}%)`;
  const transitions = useTransition(currentYear, {
    from: { opacity: 0, bottom: '100%' },
    enter: { opacity: 1, bottom: '1.6rem' },
    leave: { opacity: 0, bottom: '1.6rem' },
    config: { duration }
  });
  const transitions2 = useTransition(currentPoi,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 1 }
    })

  useActivePalette().then(setPalette);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYearIndex((prev) => (prev + 1) % years.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentYear([years[currentYearIndex]!]);
    setCurrentPoi([pois[currentYearIndex]!]);
  }, [currentYearIndex]);

  if (!palette) return;

  return (
    <div
      data-ui="wheel-of-time"
      style={{
        backgroundColor: stringifyHsl(palette.colors[2]!),
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {transitions((styles, item) => (
        <animated.div style={{ ...styles, position: 'absolute', right: '1.2rem', fontSize: '50px', fontWeight: 700 }}>{item!.toString()}</animated.div>
      ))}

      {transitions2((styles, item) => (
        <animated.div style={{ ...styles }} >
          <AnkhUiIcon name={`pois/${item}`} />
        </animated.div>
      ))}
    </div>
  );
}

interface IAnkhUiWheelOfTime extends IAnkhUiIntrinsicProps {
  readonly years: number[];
  readonly duration?: number;
}
