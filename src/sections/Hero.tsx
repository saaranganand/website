import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
  <div>
    <div>
      <Image src={memojiImage} alt="Person peeking from behind laptop" />
      <div>
        <div></div>
        <div>Available for new projects</div>
      </div>
      <h1>Building Exceptional User Interfaces</h1>
      <p>
        I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
      </p>
      <div>
        <button>
          <span>Explore My Work</span>
          <ArrowDown />
        </button>
        <button>
          <span>👋</span>
          <span>Let's Connect</span>
        </button>
      </div>
    </div>
  </div>
  );
};
