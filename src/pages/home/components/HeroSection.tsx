import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { heroValueProps } from '../../../const/homePageData'
import { homeHeroBannerImage } from '../../../const/homeVisuals'
import { HeroValuePropsBand } from './HeroValuePropsBand'
import { HomeDecorativeImage } from './HomeDecorativeImage'

export function HeroSection() {
  return (
    <section id="home-hero" className="space-y-10">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-brand-navy shadow-sm md:rounded-3xl">
        <div className="absolute inset-0">
          <HomeDecorativeImage
            src={homeHeroBannerImage.src}
            fallbackSrc={homeHeroBannerImage.fallbackSrc}
            alt=""
            className="min-h-[22rem] h-full md:min-h-[26rem] lg:min-h-[28rem]"
            imgClassName="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-0 bg-linear-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/55"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[22rem] flex-col justify-center px-6 py-12 md:min-h-[26rem] md:px-10 md:py-16 lg:min-h-[28rem] lg:px-14">
          <Tag className="w-fit border-white/25! bg-white/10! text-[11px]! font-semibold! uppercase tracking-wide text-white! backdrop-blur-sm">
            FMNXT Learning Platform
          </Tag>
          <Typography.Title
            level={1}
            className="mb-4 mt-5 max-w-[20ch] text-[2rem]! font-bold leading-[1.1] tracking-tight text-white md:mt-6 md:text-[2.75rem]! lg:text-[3.25rem]!"
          >
            Power up your FM & CRE Learning!
          </Typography.Title>
          <Typography.Paragraph className="mb-0 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Short, structured video courses in Facilities Management and Corporate Real Estate. Learn on your schedule and
            apply skills on the job.
          </Typography.Paragraph>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/courses" className="inline-flex no-underline">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="h-11! rounded-lg! border-0! bg-white! px-6! font-semibold! text-brand-navy! shadow-md hover:!bg-slate-50"
              >
                Explore courses
              </Button>
            </Link>
            <Link to="/login" className="inline-flex no-underline">
              <Button
                size="large"
                className="h-11! rounded-lg! border-white! bg-transparent! px-6! font-semibold! text-white! hover:!border-white hover:!bg-white/10 hover:!text-white"
              >
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <HeroValuePropsBand items={heroValueProps} />
    </section>
  )
}
