import { memo } from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedLetter = memo(({ letter }: IAnkhUiAnimatedLetter) => {
  const styles = useSpring({
    loop: true,
    to: { transform: 'rotate(360deg)' },
    from: { transform: 'rotate(0deg)' },
    config: { duration: 2000 }
  });

  return <animated.span style={styles}>{letter}</animated.span>
});

export const AnkhUiAnimatedLetter = AnimatedLetter;

interface IAnkhUiAnimatedLetter {
  letter: string;
}