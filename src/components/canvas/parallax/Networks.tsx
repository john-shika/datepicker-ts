import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import config from "./config.json?url";
import type { NetworksProps } from "./interfaces";
import { genUnsafeShortUniqueId, unsafeMergeAny } from "@/utils";

("use client");

export default function Networks({ className, id, width, height, density }: NetworksProps): React.JSX.Element {
  const uid = genUnsafeShortUniqueId();

  // props handling
  id = id ?? `tsparticles-${uid}`;
  width = width ?? window.innerWidth;
  height = height ?? window.innerHeight;
  density = density ?? { width, height };

  const [init, setInit] = React.useState(false);

  const options: ISourceOptions = React.useMemo(
    () => ({
      autoPlay: true,
      fullScreen: {
        enable: false,
      },
      particles: {
        number: {
          density: {
            width: density.width,
            height: density.height,
          },
        },
      },
    }),
    []
  );

  React.useEffect(() => {
    (async () => {
      // load config json file for `@tsparticles/engien` plugin
      await (async () => {
        const response = await fetch(config, { mode: "same-origin" });
        const dataConfig = await response.json();
        Object.assign(options, unsafeMergeAny(dataConfig, options));
      })();
    })()
      .then(() => {
        return initParticlesEngine(async (engine: Engine) => {
          await loadSlim(engine);
        });
      })
      .then(() => {
        setInit(true);
      });

    return () => {
      console.log("Refresh `Networks.tsx` scripting...");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
    // nothing to do here...
  };

  if (init) {
    return (
      <>
        <Particles
          id={id}
          className={className}
          options={options}
          particlesLoaded={particlesLoaded}
          // url={config}
        />
      </>
    );
  }

  return <></>;
}
