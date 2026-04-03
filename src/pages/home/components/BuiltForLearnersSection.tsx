import { Card, Tag, Typography } from 'antd'

export function BuiltForLearnersSection() {
  return (
    <section>
      <Card className="rounded-[34px] border-slate-200 bg-linear-to-br from-slate-50 to-sky-50">
        <Tag color="purple">Built for learners</Tag>
        <Typography.Title level={2} className="mt-3 mb-2 text-[24px] leading-tight md:text-[30px]">
          Start strong with structured, high-impact learning
        </Typography.Title>
        <Typography.Paragraph className="text-slate-600">
          From your first lesson, FMNXT guides you through practical FM and CRE concepts with clear progression, real
          workplace context, and a learner-friendly experience.
        </Typography.Paragraph>
      </Card>
    </section>
  )
}
