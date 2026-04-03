import { Card, Col, Progress, Row, Space, Tag, Typography } from 'antd'
import { FiBarChart2, FiCalendar } from 'react-icons/fi'

type Props = {
  highlights: string[]
}

export function HeroSection({ highlights }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-linear-to-br from-brand-gold-light/30 via-white to-slate-100 p-5 md:rounded-[40px] md:bg-linear-to-br md:from-white md:via-brand-gold-light/25 md:to-slate-100 md:p-10">
      <div className="pointer-events-none absolute right-8 top-8 hidden h-4 w-4 rotate-12 rounded-sm bg-brand-gold/50 xl:block" />
      <div className="pointer-events-none absolute left-10 top-14 hidden h-3 w-3 rotate-6 rounded-sm bg-violet-400/60 xl:block" />
      <div className="pointer-events-none absolute right-24 bottom-10 hidden h-3 w-3 rotate-12 rounded-sm bg-emerald-400/60 xl:block" />
      <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pt-1 md:pt-2">
          <Tag className="border-brand-navy/15! bg-brand-navy/10! text-brand-navy! text-[11px]! font-semibold!">
            FMNXT Learning Platform
          </Tag>
          <Typography.Title className="mb-3 mt-3 text-[32px]! leading-[0.98] md:mt-4 md:text-[72px]">
            Practical FM and CRE video learning for working professionals
          </Typography.Title>
          <Typography.Paragraph className="max-w-xl text-sm text-slate-600 md:text-base">
            FMNXT offers short, structured video courses in Facilities Management and Corporate Real Estate. Learn from
            practical modules, watch lessons anytime, and build skills you can apply immediately.
          </Typography.Paragraph>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
            {highlights.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-brand-gold/25 bg-linear-to-r from-brand-gold-light/40 via-white to-slate-50 p-4 shadow-sm lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick Snapshot</p>
            <div className="mt-2 flex gap-2">
              <Tag className="border-brand-navy/20! bg-brand-navy/8! text-brand-navy!">30+ video modules</Tag>
              <Tag className="border-brand-gold/35! bg-brand-gold-light/50! text-brand-gold-dark!">Self-paced</Tag>
            </div>
          </div>
          <Card
            styles={{ body: { background: '#34d399', borderRadius: 20 } }}
            className="border-0 shadow-sm md:shadow-none"
          >
            <Space align="center">
              <FiBarChart2 className="text-emerald-950" />
              <Typography.Text className="uppercase text-xs text-emerald-950/80">Video structure</Typography.Text>
            </Space>
            <Typography.Title level={5} className="mb-2 mt-2 text-emerald-950">
              Recorded lessons with clear progression
            </Typography.Title>
            <Progress percent={25} showInfo={false} strokeColor="#14532d" />
          </Card>
          <Row gutter={12}>
            <Col xs={24} sm={12}>
              <Card
                styles={{ body: { background: 'rgba(247, 228, 143, 0.22)', borderRadius: 16 } }}
                className="border-brand-gold/30 shadow-sm"
              >
                <Tag className="mb-2 border-brand-navy/15! bg-brand-navy/10! text-brand-navy!">Learning Focus</Tag>
                <Typography.Title level={4} className="my-1 text-slate-900">
                  Role-Ready Skills
                </Typography.Title>
                <Typography.Text className="text-xs leading-relaxed text-slate-600">
                  Learn FM and CRE workflows through practical examples, implementation steps, and real project use cases.
                </Typography.Text>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card styles={{ body: { background: '#ede9fe', borderRadius: 16 } }} className="border-violet-200 mt-5!">
                <Space size={6}>
                  <FiCalendar className="text-violet-700" />
                  <Typography.Text className="text-xs">Course access</Typography.Text>
                </Space>
                <Typography.Text strong className="block mt-2">
                  Self-paced video learning
                </Typography.Text>
                <Typography.Text className="text-xs">Watch anytime after enrollment</Typography.Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}
