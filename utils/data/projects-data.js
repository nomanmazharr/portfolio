import configpilot from '/public/image/configpilot.png';
import colabcube from '/public/image/colabcube.png';
import green_pulse from '/public/image/green_pulse.png';
import compassai from '/public/image/compassai.png';
import { config } from 'next/dist/build/templates/pages';

export const projectsData = [
    {
        id: 1,
        hackathon_name: 'Redacted [Devpost]',
        hackathon_submission_link: 'https://devpost.com/software/colabcube',
        name: 'ColabCube',
        description: "Developed ColabCube, an innovative virtual co-working platform that combines collaborative tools, real-time AI-powered assistance, and blockchain-enabled payments to enhance productivity and streamline team interactions. As part of the ColabCube project, I led efforts to build and integrate AI-driven features that transformed user experience and engagement.",
        tools: ['Python', 'Express.js', 'Javascript', 'MongoDB', 'Near', 'NextJS', 'Node.JS', 'React', 'Render', 'TypeScript', 'Vercel', 'Bitte', 'Clerk','Aurora', 'Convex'],
        role: 'GenAI Engineer',
        code: 'https://github.com/r7projects-shayan/colabcube-official/',
        demo: 'https://colabcubemainn.vercel.app/',
        image: colabcube
    },
    {
        id: 2,
        hackathon_name: 'Build Your AI Startup #2: Edge Runners [lablab.ai]',
        hackathon_submission_link: 'https://lablab.ai/event/next2-edge-runners/compass-ai/compass-ai',
        name: 'Compass AI',
        description: 'Compass AI is a cutting-edge application designed to automate custom marketing strategies, adapting to the unique needs of brands. As the GenAI Engineer, I developed AI-driven content generation features that produce engaging and personalized content with minimal user input. The application simplifies social media publishing, enabling brands to maintain a strong online presence while focusing on growth.',
        tools: ['Python', 'Streamlit', "OpenAI", "LLM", "Pillow", "Reportlab", "requests", "Tokenization", "Marekting Strategies"],
        role: 'AI Developer',
        code: 'https://github.com/chekosworld/compass-ai/',
        demo: 'https://compass-ai.streamlit.app/',
        image: compassai,
    },
    {
        id: 3,
        hackathon_name: 'Tell Us a Climate Story [2024 NASA Space Apps Challenge]',
        hackathon_submission_link: 'https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/green-pulse-nasa-hackathon/',
        name: 'Tales from the Atmosphere',
        description: 'Led a team to develop "Tales from the Atmosphere," a project that visualizes CO₂ emissions from various countries to enhance climate change awareness. Using Python and Pandas for data processing, we crafted interactive graphs and maps with Plotly, allowing users to explore emissions data in an engaging format. Additionally, I built a user-friendly website with WordPress and Elementor to present this data in an accessible way, aiming to promote climate education.',
        tools: ['Python', 'Pandas', 'Plotly', 'Wordpress', 'Elementor'],
        code: '',
        role: 'Team Lead || Data Analyst',
        demo: 'https://earth-green-pulse.devlotech.com/',
        image: green_pulse,
    },
    {
        id: 4,
        hackathon_name: 'Edge Runners 3.2 [lablab.ai]',
        hackathon_submission_link: 'https://lablab.ai/event/edge-runners-3-point-2/edge-innovators/configpilot',
        name: 'Edge Runners 3.2 [lablab.ai]',
        description: "Built ConfigPilot, an AI-powered tool that automates network configurations for routers, switches, and servers, improving setup efficiency and reducing manual workload. Leveraging LLaMA 3.2, ConfigPilot delivers rapid, accurate responses for network configuration tasks, enhancing user experience. The responsive application was developed with React for a dynamic front-end and Streamlit for a streamlined, accessible site, catering to both IT professionals and non-technical users.",
        tools: ['LLAMA 3.2', 'React', 'Streamlit', 'Python'],
        code: 'https://github.com/nomanmazharr/config-pilot',
        demo: 'https://configpilot.streamlit.app/',
        image: configpilot,
        role: 'GenAI Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },