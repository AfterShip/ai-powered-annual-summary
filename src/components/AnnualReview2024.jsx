import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Banknote, Computer, Code2, BarChart3, Palette, Users, Target, Terminal, Volume2, VolumeX } from 'lucide-react';
import MatrixRain from './MatrixRain';
import CountUp from './CountUp';

const codeString = `// Initialize 2024 Annual Review Data...
import { initializeAnalytics } from '@aftership/analytics';
import { fetchDepartmentData } from '@aftership/annual-review';

console.log('Connecting to database...');
await initializeAnalytics();

console.log('Fetching department data...');
const departments = ['Company Level', 'Finance', 'IT', 'Admin', 'R&D', 'Data', 'Design', 'People Team', 'Sales'];
const data = {};

for (const dept of departments) {
  console.log(\`Loading \${dept} data...\`);
  data[dept] = await fetchDepartmentData(dept);
}

console.log('Data loading complete, starting visualization...');`;

const narrativeData = [
  {
    title: 'Hi, AfterShipper.',
    metric: null,
    comparison: "Let's take a look at our 2024 annual data report"
  },
  {
    title: 'In 2024, we received',
    metric: '33,908 resumes',
    comparison: null
  },
  {
    title: 'We welcomed',
    metric: '61 new team members',
    comparison: null
  },
  {
    title: 'Our employees are now spread across',
    metric: '22 regions',
    comparison: null
  },
  {
    title: 'Our most senior employee has been with us for',
    metric: '4,130 days',
    comparison: null
  },
  {
    title: "We're working with a young and dynamic team",
    metric: null,
    comparison: null
  },
  {
    title: 'Our youngest employee was born in',
    metric: null,
    comparison: '2003'
  },
  {
    title: null,
    metric: null,
    comparison: 'Average age increased from 30 to 31'
  },
  {
    title: "We've grown",
    metric: null,
    comparison: null
  },
  {
    title: 'Total followers across LinkedIn, YouTube, and TikTok exceeded',
    metric: '100,000',
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: "We've become a rising influencer in the industry"
  },
  {
    title: 'However',
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'This year we lost our phones 34 times'
  },
  {
    title: null,
    metric: null,
    comparison: 'Burned the microwave 6 times'
  },
  {
    title: null,
    metric: null,
    comparison: 'Looking back at 2023, we lost phones 39 times and burned microwaves 4 times... some things never change!'
  },
  {
    title: null,
    metric: null,
    comparison: "We've grown up... well, sort of"
  },
  {
    title: 'Meeting madness',
    metric: '60,764 meetings',
    comparison: null
  },
  {
    title: 'Each person sat through',
    metric: '143 meetings',
    comparison: null
  },
  {
    title: 'Time spent in meetings',
    metric: '37,573 hours',
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'Plot twist: We saw our colleagues more than our families!'
  },
  {
    title: null,
    metric: null,
    comparison: "C'mon folks, let's make these meetings snappier! 🤦‍♂️"
  },
  {
    title: 'Shipping success: We teamed up with',
    metric: '221 Carriers',
    comparison: null
  },
  {
    title: 'Returns got faster! Processing time dropped from 14 days to',
    metric: '10.7 days',
    comparison: null
  },
  {
    title: 'Mind-blowing numbers:',
    metric: '1,730,000,000 trackings',
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'Fun fact: If we turned all these tracking numbers into barcodes'
  },
  {
    title: null,
    metric: null,
    comparison: "And lined them up, they'd wrap around Earth **2.6** times! 🌍"
  },
  {
    title: 'Our sales team was busy!',
    metric: '35,000 emails',
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: "That's like climbing Mount Everest five times... one email at a time! 🏔️"
  },
  {
    title: 'Design & Development',
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'Crafted **1,000+** Design tokens with pixel-perfect precision ✨'
  },
  {
    title: 'Submitted',
    metric: '67,000 Pull Requests',
    comparison: "That's a lot of code reviews! 🔍"
  },
  {
    title: null,
    metric: null,
    comparison: "Fun fact: This code will be preserved in GitHub's Arctic Code Vault for 1,000 years! 🧊"
  },
  {
    title: 'Our AI sidekick GitHub Copilot suggested',
    metric: '1,387,000 code snippets',
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: '480,000 made the cut - a solid 35% success rate! 🎯'
  },
  {
    title: null,
    metric: null,
    comparison: "We're not just coding, we're architecting digital skyscrapers! 🏗️"
  },
  {
    title: "Now, about our own AI model...",
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: '"Oh, you know, just crunching numbers..." 🤖'
  },
  {
    title: 'Hold onto your hats:',
    metric: '1.2 billion',
    comparison: 'daily model calls! 🚀'
  },
  {
    title: null,
    metric: null,
    comparison: "That's like the heartbeat of a stadium full of 100,000 fans! ❤️"
  },
  {
    title: '2024: What a ride!',
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'Through all the ups and downs...'
  },
  {
    title: null,
    metric: null,
    comparison: "We've kept pushing forward, breaking new ground 💪"
  },
  {
    title: null,
    metric: null,
    comparison: 'One innovation at a time 🌟'
  },
  {
    title: 'The secret sauce?',
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: 'Every line of code tells a story'
  },
  {
    title: null,
    metric: null,
    comparison: 'Every design speaks volumes'
  },
  {
    title: null,
    metric: null,
    comparison: 'Every metric shapes our journey'
  },
  {
    title: null,
    metric: null,
    comparison: "It's all thanks to our amazing team! 🌟"
  },
  {
    title: "Ready for 2025?",
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: "Let's make it even more epic! 🚀"
  },
  {
    title: "One last thing...",
    metric: null,
    comparison: null
  },
  {
    title: null,
    metric: null,
    comparison: "Speaking of AI (which we love!)..."
  },
  {
    title: null,
    metric: null,
    comparison: "This entire presentation? Created by non-technical colleagues using AI tools! ✨"
  }
];

const extractNumber = (str) => {
  const match = str.match(/[\d,]+(\.\d+)?[BKM+]?/);
  if (!match) return 0;
  
  const numStr = match[0].replace(/,/g, '');
  let multiplier = 1;
  
  if (numStr.endsWith('B')) multiplier = 1000000000;
  else if (numStr.endsWith('M')) multiplier = 1000000;
  else if (numStr.endsWith('K')) multiplier = 1000;
  
  const baseNum = parseFloat(numStr.replace(/[BKM+]/g, ''));
  return baseNum * multiplier;
};

const getPrefix = (str) => {
  const match = str.match(/^[^0-9]*/);
  return match ? match[0] : '';
};

const getSuffix = (str) => {
  const match = str.match(/[BKM+]?[^0-9]*$/);
  return match ? match[0] : '';
};

// Update styles configuration
const displayStyles = {
  default: {
    containerClass: "rounded-2xl bg-gradient-to-b from-white/90 to-white/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-b from-orange-50/90 to-yellow-50/80",
    animation: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    }
  },
  style1: {
    containerClass: "rounded-[2rem_1rem] bg-gradient-to-tr from-purple-100/90 to-purple-50/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-tr from-purple-50/80 to-pink-50/70",
    animation: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 }
    }
  },
  style2: {
    containerClass: "rounded-[1rem_2rem] bg-gradient-to-tl from-pink-100/90 to-pink-50/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-tl from-pink-50/80 to-purple-50/70",
    animation: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 }
    }
  },
  style3: {
    containerClass: "rounded-[2rem_2rem_1rem_1rem] bg-gradient-to-br from-orange-100/90 to-orange-50/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-br from-orange-50/80 to-yellow-50/70",
    animation: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 30 }
    }
  },
  style4: {
    containerClass: "rounded-[1rem_2rem_2rem_1rem] bg-gradient-to-bl from-blue-100/90 to-blue-50/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-bl from-blue-50/80 to-indigo-50/70",
    animation: {
      initial: { opacity: 0, rotate: -5 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 5 }
    }
  },
  style5: {
    containerClass: "rounded-[2rem_1rem_1rem_2rem] bg-gradient-to-r from-green-100/90 to-green-50/80",
    contentClass: "min-h-[400px] flex items-center justify-center p-4",
    innerClass: "bg-gradient-to-r from-green-50/80 to-emerald-50/70",
    animation: {
      initial: { opacity: 0, scale: 1.1 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 }
    }
  }
};

// Add CSS styles to index.css
const styles = `
  .clip-path-triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  .clip-path-diamond {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .clip-path-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
  .clip-path-pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
  .clip-path-star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
  .clip-path-cloud {
    clip-path: polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%);
  }
  .clip-path-message {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 50% 100%, 25% 75%, 0% 75%);
  }
`;

// Choose display style based on content type
const getDisplayStyle = (narrative, index) => {
  if (!narrative) return displayStyles.default;
  
  if (narrative.title === 'Hi, AfterShipper.') {
    return displayStyles.style1;
  }
  
  if (narrative.title && narrative.title.includes('2024')) {
    return displayStyles.style2;
  }
  
  if (narrative.comparison && narrative.comparison.includes('**')) {
    return displayStyles.style3;
  }
  
  // Use index loop to choose style
  const styles = [
    displayStyles.default,
    displayStyles.style1,
    displayStyles.style2,
    displayStyles.style3,
    displayStyles.style4,
    displayStyles.style5
  ];
  return styles[index % styles.length];
};

// Calculate display duration based on content length
const getDisplayDuration = (narrative) => {
  const totalLength = [
    narrative.title || '',
    narrative.metric || '',
    narrative.comparison || ''
  ].join('').length;

  // Short text displays for 3 seconds, long text displays up to 5 seconds
  return Math.min(Math.max(3000, totalLength * 100), 5000);
};

export default function AnnualReview2024() {
  const [typedCode, setTypedCode] = useState('');
  const [currentStory, setCurrentStory] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Initializing data');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef(null);

  const codeLines = codeString.split('\n');

  // Code display logic
  useEffect(() => {
    let currentLineIndex = 0;
    let displayedText = '';

    const typingInterval = setInterval(() => {
      if (currentLineIndex >= codeLines.length) {
        // Reset to beginning
        currentLineIndex = 0;
        displayedText = '';
        setLoadingMessage('Reloading data');
      } else {
        const line = codeLines[currentLineIndex];
        displayedText += line + '\n';
        
        // Update loading message
        if (line.includes('Connecting to database')) {
          setLoadingMessage('Connecting to database');
        } else if (line.includes('Fetching department data')) {
          setLoadingMessage('Fetching department data');
        } else if (line.includes('complete')) {
          setLoadingMessage('Generating visualization');
        }
        
        currentLineIndex++;
      }
      
      setTypedCode(displayedText);
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Story display logic
  useEffect(() => {
    // Initial delay
    const initialTimeout = setTimeout(() => {
      setCurrentStory(0);
    }, 800);

    // Use fixed display time
    const storyInterval = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % narrativeData.length);
    }, 3500); // Each item displays for 3.5 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(storyInterval);
    };
  }, []);

  const currentNarrative = narrativeData[currentStory];

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400">
      <style>{styles}</style>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        autoPlay
        loop
        className="hidden"
      />
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
      <MatrixRain />
      <div className="relative z-10 h-screen flex">
        {/* Left code area */}
        <div className="w-[45%] h-screen p-4 overflow-hidden">
          <div className="h-full bg-gray-900/95 rounded-xl p-6 font-mono text-emerald-400 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-emerald-400 w-6 h-6" />
              <span className="text-emerald-400 text-lg">{loadingMessage}...</span>
            </div>
            <div className="relative h-[calc(100%-3rem)] overflow-hidden">
              <pre className="whitespace-pre-wrap text-base">
                {typedCode}
              </pre>
            </div>
          </div>
        </div>

        {/* Right data display area */}
        <div className="flex-1 h-screen p-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentNarrative && (
              <motion.div
                key={currentStory}
                initial={getDisplayStyle(currentNarrative, currentStory).animation.initial}
                animate={getDisplayStyle(currentNarrative, currentStory).animation.animate}
                exit={getDisplayStyle(currentNarrative, currentStory).animation.exit}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-6xl backdrop-blur-md shadow-lg border border-white/30 ${getDisplayStyle(currentNarrative, currentStory).containerClass}`}
              >
                <div className={`${getDisplayStyle(currentNarrative, currentStory).contentClass}`}>
                  <div className={`group ${getDisplayStyle(currentNarrative, currentStory).innerClass} backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 border border-white/20 p-4 w-full`}>
                    <div className="flex flex-col gap-4">
                      {currentNarrative.title && (
                        <motion.h2 
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-4xl font-medium text-gray-700 leading-relaxed px-2"
                        >
                          {currentNarrative.title}
                        </motion.h2>
                      )}
                      
                      {currentNarrative.metric && (
                        <motion.div 
                          className="flex items-baseline gap-4 px-2"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }}
                        >
                          <motion.span 
                            className="text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300"
                            initial={{ y: 30 }}
                            animate={{ y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 15
                            }}
                          >
                            <CountUp
                              end={extractNumber(currentNarrative.metric)}
                              duration={1500}
                            />
                          </motion.span>
                          <motion.span 
                            className="text-4xl font-bold text-gray-700 whitespace-nowrap"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {currentNarrative.metric.replace(/[\d,.]+/g, '').trim()}
                          </motion.span>
                        </motion.div>
                      )}
                      
                      {currentNarrative.comparison && (
                        <motion.p 
                          className={`text-4xl ${currentNarrative.comparison.startsWith('**') ? 'font-bold' : ''} text-gray-700 leading-relaxed whitespace-pre-line px-2`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100,
                            damping: 10
                          }}
                          dangerouslySetInnerHTML={{
                            __html: currentNarrative.comparison
                              .replace(/\*\*/g, '')
                              .replace(/(\d+([,.]\d+)?)/g, match => 
                                `<span class="text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">${match}</span>`
                              )
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 
