'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; 

const musicSchoolTestimonials = [
    {
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div 
      className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #000000 50%, #0f172a 75%, #1e293b 100%)',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px'
      }}
    >
        {/* Top fade gradient to blend with page above */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 z-5"
          style={{
            background: 'linear-gradient(to bottom, rgba(51, 65, 85, 0.9) 0%, rgba(30, 41, 59, 0.7) 30%, rgba(15, 23, 42, 0.5) 60%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        ></div>

        {/* Enhanced radial gradient for better visibility */}
        <div 
          className="absolute pointer-events-none inset-0 flex items-center justify-center"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
          }}
        ></div>
        
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white relative">
            Hear our harmony: Voices of success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 z-10 relative"> 
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
      
    </div>
  )
}

export default MusicSchoolTestimonials