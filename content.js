// EDIT THIS FILE to update your profile, project descriptions, links, and activities.
// Keep project IDs unique and stable: they form the shareable project URLs.
window.PORTFOLIO = {
  name: 'Neel Narayan',
  linkedin: 'https://www.linkedin.com/in/neel-narayan-4a6b662a0/',
  // Add your email to show a contact link, or leave blank to hide it.
  email: '',
  about: "I'm a computer science student at Rice University. I love building things and learning new technologies. I've made projects in computation biology, virtual reality, robotics, and many other fields.",
  activities: [
    { title: 'Rice Datathon', text: 'As a director, I help organize a data science hackathon, develop tracks, and connect with companies for funding and judges.' },
    { title: 'Robotics & machine learning', text: 'Building a walking quadruped with the Robotics Club and leading a group working on object detection models in the ML Club.' },
    { title: 'Kids Are Scientists Too', text: 'Give weekly science lessons at elementary schools around Houston.' }
  ],
  projects: [
    {
      id: 'protein-language-models',
      shortTitle: 'ML Research Internship',
      category: 'Machine learning · Research',
      context: 'NSF COMPASS Center',
      summary: 'Investigating how well protein embeddings generalize to unfamiliar viruses.',
      tags: ['Protein language models', 'MLP', 'Model evaluation'],
      image: 'assets/ml-poster.webp',
      imageAlt: 'Research poster: Generalization Limits of Protein Language Models',
      imageClass: 'poster',
      links: [],
      sections: [
        { title: 'The question', text: 'During my research internship at the NSF COMPASS Center, a computational virology lab, I studied whether protein language models capture biological function or rely heavily on sequence similarity. The task was to predict which host species a virus could infect from its protein sequence.' },
        { title: 'What I built', text: 'I trained downstream classifiers on protein embeddings and evaluated them with custom train/test splits based on sequence similarity and taxonomy. The poster study compares HAVEN, ESM2, and LucaVirus using a two-layer MLP, with BLAST as a sequence-based baseline. The dataset contains 10,000 viral proteins and eight host-species labels.' },
        { title: 'What I found', text: 'Performance decreased as the splits moved from random partitions to broader taxonomic separations. BLAST declined at a similar rate. These results suggest that the evaluated embeddings struggle to generalize to unseen viral lineages and may rely strongly on surface-level sequence similarities.' }
      ],
      mediaCaption: 'The full research poster, including methodology, evaluation, and results. Select the image to open the PDF.'
    },
    {
      id: 'volumetric-vr',
      shortTitle: 'Volumetric Video in VR',
      category: 'Virtual reality · Research',
      context: 'Experimental Pixels Lab',
      summary: 'A VR viewer for exploring, playing back, and annotating volumetric point-cloud captures.',
      tags: ['Unity', 'XR Interaction Toolkit', 'Flask'],
      image: 'assets/source-5-0.webp',
      imageAlt: 'Volumetric capture in VR with playback controls, a timeline, and drawing tools',
      links: [{ label: 'View on GitHub', url: 'https://github.com/NeelTheBomb/VolCapApp/blob/main/README.md' }],
      sections: [
        { title: 'The challenge', text: 'As a researcher in the Experimental Pixels Lab, I developed a way to explore volumetric videos in VR. A university capture rig recorded people in motion and reconstructed those movements as sequences of 3D point clouds. The lab needed an interactive way to view them.' },
        { title: 'What I built', text: 'Using Unity, C#, and the XR Interaction Toolkit, I built a viewer that renders point clouds over time. Users can walk around a capture, scrub through a timeline, play and pause, and draw annotations in 3D using their controller triggers.' },
        { title: 'Handling large captures', text: 'Loading all of the point-cloud data at startup was impractical. I built a separate Flask server to store and serve captures, with a browser inside the VR application for selecting and downloading videos through REST API calls.' }
      ],
      mediaCaption: 'The VR interface combines volumetric playback, timeline scrubbing, and in-scene annotation.'
    },
    {
      id: 'ricemap',
      shortTitle: 'RiceMap',
      category: 'Web development · Interactive maps',
      context: 'Gamified campus exploration',
      summary: 'Discover Rice campus landmarks through location-based games, narration, and interactive experiences.',
      tags: ['React', 'TypeScript', 'MapLibre'],
      image: 'assets/source-3-0.webp',
      imageAlt: 'RiceMap mobile map showing campus landmarks and exploration progress',
      imageClass: 'phone',
      gallery: [{ src: 'assets/source-3-1.webp', alt: 'RiceMap landmark activity: dress the owl in graduation clothes' }],
      links: [{ label: 'View on GitHub', url: 'https://github.com/NeelTheBomb/HackRice' }],
      sections: [
        { title: 'The idea', text: 'RiceMap is a gamified tour of the Rice campus. Discovering a landmark unlocks an interactive experience, making exploration more playful than simply following a route.' },
        { title: 'How it works', text: 'Built with React, TypeScript, and Vite, the app uses MapLibre and checks browser geolocation every three seconds. Progress is stored in cookies using stable location IDs. Each location can include media, rich React content, narration through ElevenLabs, and custom games.' },
        { title: 'Built for the browser', text: 'The entire client deploys as a static GitHub Pages site with Vite-managed assets. The screenshots below show the map and one of the landmark activities.' }
      ],
      mediaCaption: 'The campus map and an interactive landmark activity from RiceMap.'
    },
    {
      id: 'underwater-welding',
      shortTitle: 'Underwater Welding VR',
      category: 'Virtual reality · Hackathon',
      context: 'EXP Hackathon · Best Solution award',
      summary: 'A hands-on VR proof of concept with weld scoring, underwater visibility, and an oxygen timer.',
      tags: ['Unity', 'C#', 'Blender'],
      video: 'assets/welding-demo.mp4',
      links: [],
      sections: [
        { title: 'The idea', text: 'I built a VR underwater welding simulator for the EXP Hackathon and continued developing it afterward. The project explores how an immersive environment can turn a specialized physical task into an interactive simulation.' },
        { title: 'What I built', text: 'The application was developed in Unity with C#, using assets made in Blender. It scores welds based on their distance from the intended position and their smoothness. A fog shader simulates underwater visibility, while an oxygen timer adds a time constraint.' },
        { title: 'The outcome', text: 'The project won the Best Solution award at the EXP Hackathon. It remains a proof of concept, with the demonstration below showing the experience in action.' }
      ],
      mediaCaption: 'Project demonstration of the underwater welding VR prototype. Use the player controls to play, pause, or view fullscreen.'
    },
    {
      id: 'ricedash',
      shortTitle: 'RiceDash',
      category: 'Full-stack development · Campus life',
      context: 'Student food delivery platform',
      summary: 'Connecting students who need a meal delivered with students ready to make the trip.',
      tags: ['Next.js', 'PostgreSQL', 'Google Maps'],
      image: 'assets/source-4-0.webp',
      imageAlt: 'RiceDash delivery dashboard with orders and a map of the delivery route',
      gallery: [{ src: 'assets/source-4-1.webp', alt: 'RiceDash order details and available deliveries dashboard' }],
      links: [{ label: 'Explore on Devpost', url: 'https://devpost.com/software/ricedash' }],
      sections: [
        { title: 'The idea', text: 'RiceDash is a food delivery platform built for college students. Students submit delivery requests, and deliverers claim orders from a shared dashboard. Routes cover both the dining hall and delivery destination, with fees based on distance.' },
        { title: 'What I built', text: 'I built the frontend with Next.js App Router, React, and TypeScript, alongside a Next.js backend exposing REST APIs. PostgreSQL stores users and orders, with Drizzle ORM handling the schema and queries. The application was hosted on Vercel.' },
        { title: 'Maps and access', text: 'The Google Maps API provides distance calculations and embedded delivery routes. NextAuth.js handles authentication and restricts access to university students.' }
      ],
      mediaCaption: 'RiceDash screens showing delivery routes, available orders, and order details.'
    }
  ]
};
