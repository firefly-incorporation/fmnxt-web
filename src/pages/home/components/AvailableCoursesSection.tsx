import {RightOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {CourseFlipCard, CourseSliderControls, useCourseCarousel} from '../../../components/shared/course';
import {availableCourseCategoryTabs, availableCoursesSectionMeta} from '../../../const/homePageData';
import type {Course} from '../../../types/course';
import type {HoverDetail} from '../../../types/types';

type Props = {
  courses: Course[];
  hoverDetails: Record<string, HoverDetail>;
  searchActive?: boolean;
};

export function AvailableCoursesSection({courses, hoverDetails, searchActive = false}: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const {scrollRef, scroll} = useCourseCarousel();

  const visibleCourses = useMemo(() => {
    if (activeCategoryId === 'all') return courses;
    return courses.filter((c) => c.category === activeCategoryId);
  }, [courses, activeCategoryId]);

  useEffect(() => {
    scrollRef.current?.scrollTo({left: 0, behavior: 'auto'});
  }, [activeCategoryId, scrollRef, visibleCourses.length]);

  const activeTab = availableCourseCategoryTabs.find((t) => t.id === activeCategoryId);

  return (
    <section className='relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8 lg:p-10'>
      <header className='mb-6 md:mb-8'>
        <Typography.Title level={2} className='!mb-3 !text-[1.35rem] !font-bold !leading-[1.15] !tracking-tight text-brand-navy md:!text-[1.75rem]'>
          {availableCoursesSectionMeta.title}
        </Typography.Title>
        <Typography.Paragraph className='!mb-0 !max-w-3xl !text-[0.95rem] !font-normal !leading-relaxed !text-slate-600 md:!text-base'>
          {availableCoursesSectionMeta.subtitle}
        </Typography.Paragraph>
      </header>

      <div className='border-b border-slate-200/90'>
        <div className='-mb-px flex gap-4 overflow-x-auto pb-0 md:gap-8 [scrollbar-width:thin]' role='tablist' aria-label='Top course categories'>
          {availableCourseCategoryTabs.map(({id, label}) => {
            const selected = id === activeCategoryId;
            return (
              <button
                key={id}
                type='button'
                role='tab'
                aria-selected={selected}
                onClick={() => setActiveCategoryId(id)}
                className={`shrink-0 border-b-2 pb-3 text-sm font-semibold tracking-tight transition-colors md:text-[0.95rem] ${
                  selected ? 'border-brand-navy text-brand-navy' : 'border-transparent text-slate-500 hover:text-brand-navy/80'
                }`}>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-8'>
        {courses.length === 0 ? (
          <Typography.Paragraph className='!mb-0 text-slate-600'>{searchActive ? 'No available courses match your search.' : 'No courses to show yet.'}</Typography.Paragraph>
        ) : visibleCourses.length === 0 ? (
          <Typography.Paragraph className='!mb-0 text-slate-600'>No courses in this category{searchActive ? ' for your search' : ''}. Try another topic.</Typography.Paragraph>
        ) : (
          <>
            <div className='relative'>
              <div
                ref={scrollRef}
                className='flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 pl-0 pr-10 pt-1 [scrollbar-width:none] md:gap-5 md:pr-14 [&::-webkit-scrollbar]:hidden'>
                {visibleCourses.map((course) => (
                  <CourseFlipCard course={course} detail={hoverDetails[course.id]} />
                ))}
              </div>
            </div>
            <CourseSliderControls
              theme='indigo'
              ariaLabelLeft='Scroll top courses left'
              ariaLabelRight='Scroll top courses right'
              onPrev={() => scroll('left')}
              onNext={() => scroll('right')}
            />
          </>
        )}
      </div>

      {visibleCourses.length > 0 && (
        <div className='mt-6 border-t border-slate-100 pt-5'>
          <Link
            to='/courses'
            className='inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline-offset-[3px] transition-colors hover:text-brand-gold-dark hover:underline'>
            {activeCategoryId === 'all' ? 'Show all courses' : `Show all ${activeTab?.label ?? 'category'} courses`}
            <RightOutlined className='text-xs' />
          </Link>
        </div>
      )}
    </section>
  );
}
