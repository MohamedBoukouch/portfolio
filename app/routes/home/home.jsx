import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import talebLoginLarge from '~/assets/talebLoginLarge.jpg';
import talebLogin from '~/assets/talebLoginLarge.jpg';
import talebNotification from '~/assets/talebNotification.jpg';
import talebNotificationLarge from '~/assets/talebNotificationLarge.jpg';
import geriuiteloading from '~/assets/geriuiteloading.jpg';
import geriuiteloadingLarge from '~/assets/geriuiteloadingLarge.jpg';
import geriuiteHomeLarge from '~/assets/geriuiteHomeLarge.jpg';
import geriuiteHome from '~/assets/geriuiteHome.jpg';
import products from '~/assets/products.jpg';
import productsLarge from '~/assets/productsLarge.jpg';
import soukElhadLoading from '~/assets/soukElhadLoading.jpg';
import soukElhadLoadingLarge from '~/assets/soukElhadLoadingLarge.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Premium IPTV Streaming Service"
        description="Enjoy unlimited access to the latest movies, series, and live TV channels in high quality with our IPTV platform."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'IPTV streaming platform preview',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="LeafSense AI - Smart Plant Disease Detection"
        description="Design and development of a mobile application using Flutter & PHP, integrated with an AI model to detect plant diseases and provide protection advice."
        buttonText="View website"
        buttonLink="https://github.com/MohamedBoukouch/LeafSense_AI"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Tawjihi - School Guidance Guide in Morocco"
        description="A mobile application developed with Flutter and Laravel to help Moroccan students navigate their academic and university journey"
        buttonText="View project"
        buttonLink="https://github.com/MohamedBoukouch/Taleb"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${talebNotification} 375w, ${talebNotificationLarge} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${talebLogin} 375w, ${talebLoginLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="Giruette - Tourist Guide in France"
        description="A mobile application developed with Flutter and Firebase to help tourists explore France and discover all the tourist attractions"
        buttonText="View website"
        buttonLink="https://github.com/MohamedBoukouch"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${geriuiteHome} 375w, ${geriuiteHomeLarge} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${geriuiteloading} 375w, ${geriuiteloadingLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="Amghare - Tourist Guide & Store Management in Souk El Had (Agadir)"
        description="A Figma design concept for a mobile application that guides tourists in Agadir, including Souk El Had, while helping vendors efficiently manage their stores."
        buttonText="View project"
        buttonLink="https://www.figma.com/design/ml55xAgtoYtVi9cwePUyX7/Untitled?node-id=35-931&t=MVNUzlGog0R6E7RB-0"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${products} 375w, ${productsLarge} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
            {
              srcSet: `${soukElhadLoading} 375w, ${soukElhadLoadingLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
