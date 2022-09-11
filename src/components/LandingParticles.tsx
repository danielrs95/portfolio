import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const LandingParticles = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              opacity: 0.2,
              size: 15,
              color: {
                value: "#261C15",
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#D3E0EA",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: ["circle"],
          },
          size: {
            value: { min: 3, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default LandingParticles;
