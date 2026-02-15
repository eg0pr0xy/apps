
import { Project } from './types';

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

export const PROJECTS: Project[] = [
  {
    id: 'godfeeder',
    name: 'GODFEEDER',
    description: 'An experimental granular synthesis instrument and signal ecology engine. GODFEEDER sacrifices live and streamed audio into stochastic grain clouds, translating broadcast fragments into evolving spectral architectures. Built with Web Audio, custom DSP chains and real-time ASCII diagnostics.',
    url: 'https://linktr.ee/sternbauer',
    tags: ['WEB_AUDIO', ' GRANULAR_SYNTHESIS', 'EXPERIMENTAL_AUDIO'],
    imageUrl: imagePath('godfeeder.jpg')
  },
  {
    id: 'ascii-astrit',
    name: 'ASCII ASTRIT',
    description: 'A deterministic ASCII rendering engine for webcam and video input. Converts luminance fields into typographic particle systems using temporal cohesion, character inertia and semantic ramp control. Designed as an artist-grade text-based imaging instrument.',
    url: 'https://eg0pr0xy.github.io/ASCII-ASTRIT/',
    tags: ['ASCII', 'TYPESCRIPT', 'WEBGL'],
    imageUrl: imagePath('astrit.jpg')
  },
  {
    id: 'errorhead',
    name: 'ERRORHEAD',
    description: 'A real-time glitch and datamosh laboratory for extreme video deformation. Combines compression corruption, analog sync distortion, feedback systems and audio-triggered modulation into a modular signal destruction framework.',
    url: 'https://eg0pr0xy.github.io/errorhead/',
    tags: ['GLITCH_ART', 'DATAMOSH', 'VIDEO_PROCESSING'],
    imageUrl: imagePath('errorhead.jpg')
  },
  {
    id: 'wurm',
    name: 'WURM',
    description: 'WURM is a high-performance, rule-based generative art studio for modernist-inspired abstract posters. It uses a procedural duplication engine to stack primitive shapes along cubic Bézier paths, yielding flowing, ribbon-like structures with controlled, deterministic motion.',
    url: 'https://github.com/studio-neue-episteme/vortex-field',
    tags: ['VECTOR', 'GENERATIVE_DESIGN', 'ALGORITHMIC_ART'],
    imageUrl: imagePath('wurm.jpg')
  },
  {
    id: 'dr-5',
    name: 'DR5',
    description: 'An indeterminate web-based signal processor inspired by Cagean composition. Uses FFT analysis and stochastic modulation to generate audio-reactive ASCII diagnostics and spatial field visualizations in real time.',
    url: 'https://eg0pr0xy.github.io/dr5/',
    tags: ['WEB_AUDIO', 'EXPERIMENTAL_AUDIO', 'FFT'],
    imageUrl: imagePath('dr-5.jpg')
  },
  {
    id: 'minimalist',
    name: 'MINIMALIST',
    description: 'A minimal interface for generating high-fidelity abstract geometric art, inspired by the pioneers of the Op Art movement.',
    url: 'https://minimalist.sternbauer.com/',
    tags: ['MINIMALISM', 'OPT-ART', 'SYNTHETIC_DESIGN'],
    imageUrl: imagePath('minimalist.jpg')
  },
   {
    id: 'constructivist',
    name: 'CONSTRUCTIVIST',
    description: 'Real-time generative engine for producing constructivist graphics through shader-based geometric composition. Functions as a prototype for synthetic design systems, where abstraction, precision and controlled glitch emerge from algorithmic structure rather than predefined layouts.',
    url: 'https://constructivist.sternbauer.com/',
    tags: ['CONSTRUCTIVISM', 'GENERATIVE_GRAPHICS', 'SYNTHETIC_DESIGN'],
    imageUrl: imagePath('constructivist.jpg')
  },
     {
    id: 'hal',
    name: 'HAL',
    description: 'A futuristic, intelligent internet radio player featuring a HAL 9000–inspired interface with real-time radial audio visualization. Supports global radio stream search, live international station discovery, and built-in recording for capturing broadcasts directly within the player.',
    url: 'https://hal.sternbauer.com/',
    tags: ['WEB_RADIO', 'HAL', 'EXPERIMENTAL_RADIO'],
    imageUrl: imagePath('hal.jpg')
  }
];

export const SOCIALS = [
  { name: 'GITHUB', url: 'https://github.com/eg0pr0xy/', handle: '@studio-neue-episteme' },
  { name: 'X', url: 'https://x.com/neueepisteme', handle: '@neue_episteme' },
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/sternbauer/', handle: 'sternbauer' },
  { name: 'DISCORD', url: 'https://discord.com/bazbauer#3028', handle: 'ENCRYPTED' },
  { name: 'YOUTUBE', url: 'https://www.youtube.com/@sternbauer', handle: '@sternbauer' },
  { name: 'E-MAIL', url: 'mailto:neueepisteme@gmail.com', handle: 'studio@neueepisteme' }
];

export const ASCII_LOGO = `
░█░█░█▀▀░█▀▄░░░█▀█░█▀█░█▀█░█▀▀░░░▄▀░░░░▀█▀░█▀█░█▀█░█░░░█▀▀
░█▄█░█▀▀░█▀▄░░░█▀█░█▀▀░█▀▀░▀▀█░░░▄█▀░░░░█░░█░█░█░█░█░░░▀▀█
░▀░▀░▀▀▀░▀▀░░░░▀░▀░▀░░░▀░░░▀▀▀░░░░▀▀░░░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀`;
