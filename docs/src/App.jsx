import React from 'react';
import { Helmet } from 'react-helmet';
import { toast } from './components/ui/use-toast';
import { Toaster } from './components/ui/toaster';

import HeroSection from './components/sections/HeroSection';
import SummarySection from './components/sections/SummarySection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import AdditionalInfoSection from './components/sections/AdditionalInfoSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

// Icons used in skills, passed as props to avoid direct Lucide import in component
import { Settings, Briefcase, Code } from 'lucide-react';

function App() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV (3).pdf'; // Path relative to the public folder
    link.download = 'Sinovuyo_Waqu_CV.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const skills = [
    { name: 'System Design Documentation', icon: Settings },
    { name: 'Project Management', icon: Briefcase },
    { name: 'SQL', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'C#', icon: Code },
    { name: 'C++', icon: Code },
  ];

  const experiences = [
    {
      title: 'Learnership',
      company: 'MTN Group (HQ)',
      period: 'June 2024 - June 2024',
      description: [
        'Work experience training in Information Technology field.',
        'Collaborating with Microsoft for acquiring Co-pilot licenses.',
        'Training in Microsoft Azure.'
      ]
    },
    {
      title: 'Learnership',
      company: 'Department of Employment and Labour (HQ)',
      period: 'June 2024 - June 2024',
      description: [
        'Work experience training in Information Technology field.',
        'Collaborating with cross-functional brunches for web developing.',
        'Information gathering.'
      ]
    },
    {
      title: 'Project co-ordinator',
      company: 'Lifting Dreams (Charity for kids)',
      period: 'July 2023 - Sep 2023',
      description: [
        'Co-ordinated the project -Tower of Ebenezer.',
        'Acquiring resources for the project.',
        'Directing the showcase.'
      ]
    },
    {
      title: 'Social Media Assistant',
      company: 'South African Family Foundation NPO',
      period: 'Jan 2021 - Dec 2021',
      description: [
        'Assisted in designing social media posts.',
        'Collaborated in concept creation.'
      ]
    },
    {
      title: 'Sound Technical',
      company: 'Weltevreden Methodist Church',
      period: 'Jan 2020 - Dec 2022',
      description: [
        'Assisted in fixing equipment.',
        'Preparing equipment for events.'
      ]
    },
    {
      title: 'Sound Technical',
      company: 'Curro Thatchfield High School',
      period: 'Jan 2020 - Dec 2022',
      description: [
        'Part of sound team.',
        'Coordinated events, ensuring sound and lights are up to standard according to the event.',
        'Assisted in fixing equipment.'
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "North-West University",
      period: "Feb 2023 - Present"
    },
    {
      degree: "Matric Certificate",
      institution: "Curro Thatchfield High School",
      period: "2018 - 2022"
    }
  ];

  const additionalInfo = {
    certifications: [
      { name: "Cybersecurity Training (2024)", issuer: "Chongqing Polytechnic University of Electronic Technology" }
    ],
    interests: ["Literature", "Art", "Theatre", "Graphic Design"],
    extraCurricular: [
      { role: "NWU Arts and Culture Senior Sub-committee", period: "2024 - Present" }
    ]
  };

  const profileImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/abd6e96e-814a-4466-98b6-b04b7592912f/581034f6e16f475a3007d0cb6d7db0f6.jpg";
  const githubLink = "https://github.com/SinoWaqu";
  const linkedinLink = "https://www.linkedin.com/in/sinovuyo-waqu-557187297";

  return (
    <>
      <Helmet>
        <title>Sinovuyo Waqu - IT Professional Resume</title>
        <meta name="description" content="Aspiring IT professional with a strong foundation in information technology, project coordination, and sound engineering." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <HeroSection
          imageUrl={profileImageUrl}
          handleDownloadCV={handleDownloadCV}
          handleContactClick={handleContactClick}
        />
        <SummarySection />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} /> {/* <-- Pass prop */}
        <SkillsSection skills={skills} />
        <AdditionalInfoSection additionalInfo={additionalInfo} /> {/* <-- Pass prop */}
        <ContactSection githubUrl={githubLink} linkedinUrl={linkedinLink} />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;