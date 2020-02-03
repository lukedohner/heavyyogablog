import React from "react";
import PropTypes from "prop-types";

// import { FaArrowDown } from "react-icons/fa/";
import { IoIosBody } from "react-icons/io/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h2>
          And <strong>Heavy Yoga</strong> what is?
        </h2>
        <button onClick={scrollToContent} aria-label="scroll">
          <IoIosBody />
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 50vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

          h2 {
          text-align: center;
          font-size: ${theme.hero.h2.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h2.color};
          line-height: ${theme.hero.h2.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;
            color: ${theme.text.color.attention};
            font-size: 2.2em;
            text-shadow: 2px 2px 8px #4a7aa7;
            &::after,
            &::before {
              content: "~";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 2px 2px 8px #4a7aa7;
            }
            &::after {
              content: "~";
              margin: 0 0 0 ${theme.space.xs};
              text-shadow: 2px 2px 8px #4a7aa7;
            }
          }
        }

        button {
          background: ${theme.background.color.brandtrans};
          border: 0;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-right-radius: 0%;
          border-bottom-left-radius: 0%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.ll};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 0;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
