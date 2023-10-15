import {
  Car,
  Clock,
  CloudHail,
  Dribbble,
  Fan,
  Leaf,
  ShuffleIcon,
  Twitter,
  Waves,
  Zap,
} from 'lucide-react';
import { AudioCard } from '../utils/audio-card';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const sounds = [
  {
    name: 'Rain',
    icon: (
      <CloudHail className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/rain.mp3',
  },
  {
    name: 'Thunder',
    icon: (
      <Zap className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/thunder.mp3',
  },
  {
    name: 'Birds Chirp',
    icon: (
      <Twitter className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/birds.mp3',
  },
  {
    name: 'Fan',
    icon: (
      <Fan className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/fan.mp3',
  },
  {
    name: 'Clock',
    icon: (
      <Clock className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/clock.mp3',
  },
  {
    name: 'Traffic Jam',
    icon: (
      <Car className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/traffic.mp3',
  },
  {
    name: 'Ocean',
    icon: (
      <Waves className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/waves.mp3',
  },
  {
    name: 'Stadium',
    icon: (
      <Dribbble className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/stadium.mp3',
  },
  {
    name: 'Leaves',
    icon: (
      <Leaf className="w-[50px] h-[50px] text-gray-500 lg:w-[80px] lg:h-[80px]" />
    ),
    volume: 0.2,
    src: '/sounds/leaves.mp3',
  },
];

// Presets
// Focus - ocean, leaves, birds chirp
// Chilling - Rain, Thunder, Fan
// Productivity - rain, bird, clock

const Playground = () => {
  return (
    <>
      <section className="flex justify-center items-center max-w-[720px] mt-6 mx-auto lg:justify-between gap-3">
        <div className="flex gap-3">
          <Button
            className="shadow-md rounded-lg text-sm lg:text-md"
            variant="outline"
          >
            Productivity
          </Button>
          <Button
            className="shadow-md rounded-lg text-sm lg:text-md"
            variant="outline"
          >
            Focus
          </Button>
          <Button
            className="shadow-md rounded-lg text-sm lg:text-md"
            variant="outline"
          >
            Chilling
          </Button>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="shadow-md rounded-full p-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <ShuffleIcon size="20" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Randomize</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
      <section className="flex justify-center max-w-[900px] mx-auto mt-8">
        <div className="grid grid-cols-2 mb-4 gap-4 lg:grid-cols-3 lg:gap-8 lg:mb-14">
          {sounds?.map((sound) => {
            return (
              <AudioCard
                key={sound.name}
                name={sound.name}
                icon={sound.icon}
                sound={sound.src}
                volume={sound.volume}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Playground;
