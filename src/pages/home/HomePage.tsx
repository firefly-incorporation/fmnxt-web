import { useHomeCourseSearch } from '../../context/HomeCourseSearchContext'
import { featuredHoverDetails, highlights, learningTracks, newArrivalHoverDetails } from '../../const/homePageData'
import { AvailableCoursesSection } from './components/AvailableCoursesSection'
import { BuiltForLearnersSection } from './components/BuiltForLearnersSection'
import { HeroSection } from './components/HeroSection'
import { LearningTracksSection } from './components/LearningTracksSection'
import { NewArrivalsSection } from './components/NewArrivalsSection'
import { PageDecorations } from './components/PageDecorations'
import { VideoFirstSection } from './components/VideoFirstSection'
import { WhyFmnxtSection } from './components/WhyFmnxtSection'
import { useHomeFilteredCourses } from './hooks/useHomeFilteredCourses'

export function HomePage() {
  const { query } = useHomeCourseSearch()
  const { filteredNewArrivals, filteredFeatured, searchIsActive } = useHomeFilteredCourses(query)

  return (
    <div className="relative space-y-12 pb-12">
      <PageDecorations />
      <HeroSection highlights={highlights} />
      <VideoFirstSection />
      <NewArrivalsSection
        courses={filteredNewArrivals}
        hoverDetails={newArrivalHoverDetails}
        searchActive={searchIsActive}
      />
      <AvailableCoursesSection
        courses={filteredFeatured}
        hoverDetails={featuredHoverDetails}
        searchActive={searchIsActive}
      />
      <BuiltForLearnersSection />
      <WhyFmnxtSection />
      <LearningTracksSection tracks={learningTracks} />
    </div>
  )
}
