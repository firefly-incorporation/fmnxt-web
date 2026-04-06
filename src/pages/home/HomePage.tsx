import { useHomeCourseSearch } from '../../context/HomeCourseSearchContext'
import { featuredHoverDetails, homeStatsStrip, learningTracks, newArrivalHoverDetails } from '../../const/homePageData'
import { AvailableCoursesSection } from './components/AvailableCoursesSection'
import { BuiltForLearnersSection } from './components/BuiltForLearnersSection'
import { HeroSection } from './components/HeroSection'
import { LearningTracksSection } from './components/LearningTracksSection'
import { NewArrivalsSection } from './components/NewArrivalsSection'
import { RevealOnScroll } from './components/RevealOnScroll'
import { StatsStrip } from './components/StatsStrip'
import { VideoFirstSection } from './components/VideoFirstSection'
import { WhyFmnxtSection } from './components/WhyFmnxtSection'
import { useHomeFilteredCourses } from './hooks/useHomeFilteredCourses'

export function HomePage() {
  const { query } = useHomeCourseSearch()
  const { filteredNewArrivals, filteredFeatured, searchIsActive } = useHomeFilteredCourses(query)

  return (
    <div className="relative z-[1] space-y-12 pb-12">
      <RevealOnScroll variant="pop">
        <HeroSection />
      </RevealOnScroll>
      <RevealOnScroll delayMs={50} variant="slideUp">
        <StatsStrip stats={homeStatsStrip} />
      </RevealOnScroll>
      <RevealOnScroll delayMs={80} variant="fade">
        <NewArrivalsSection
          courses={filteredNewArrivals}
          hoverDetails={newArrivalHoverDetails}
          searchActive={searchIsActive}
        />
      </RevealOnScroll>
      <RevealOnScroll delayMs={100} variant="slideLeft">
        <VideoFirstSection />
      </RevealOnScroll>
      <RevealOnScroll delayMs={120} variant="tilt">
        <AvailableCoursesSection
          courses={filteredFeatured}
          hoverDetails={featuredHoverDetails}
          searchActive={searchIsActive}
        />
      </RevealOnScroll>
      <RevealOnScroll delayMs={140} variant="slideUp">
        <BuiltForLearnersSection />
      </RevealOnScroll>
      <RevealOnScroll delayMs={160} variant="slideLeft">
        <WhyFmnxtSection />
      </RevealOnScroll>
      <RevealOnScroll delayMs={180} variant="tilt">
        <LearningTracksSection tracks={learningTracks} />
      </RevealOnScroll>
    </div>
  )
}
