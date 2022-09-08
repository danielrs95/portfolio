import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LandingParticles = (id: any) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={`tsparticles-${id}`}
      init={particlesInit}
      options={{
        fpsLimit: 120,
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
              opacity: 0.8,
              size: 15,
              color: {
                value: "#000",
              },
            },
          },
          // modes: {
          //   push: {
          //     quantity: 4,
          //   },
          //   repulse: {
          //     distance: 200,
          //     duration: 0.4,
          //   },
          // },
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
          // collisions: {
          //   enable: true,
          //   mode: "absorb",
          // },
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
            value: 0.3,
          },
          shape: {
            type: ["circle"],
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default LandingParticles;
