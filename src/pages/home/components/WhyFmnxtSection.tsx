import { Card, Col, Row, Tag, Typography } from 'antd'
import { FiUsers } from 'react-icons/fi'

export function WhyFmnxtSection() {
  return (
    <section className="relative overflow-hidden rounded-[34px] bg-linear-to-r from-[#0f766e] via-[#0ea5a4] to-[#0284c7] p-6 md:p-8">
      <div className="pointer-events-none absolute -left-6 top-10 h-24 w-24 rounded-full border border-white/25" />
      <div className="pointer-events-none absolute right-16 top-8 h-3 w-3 rotate-12 rounded-sm bg-white/40" />
      <div className="pointer-events-none absolute right-10 bottom-12 h-2.5 w-2.5 rotate-12 rounded-sm bg-white/40" />
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} md={16}>
          <Tag color="cyan">Why FMNXT</Tag>
          <Typography.Title level={3} className="mt-3 mb-1 text-white">
            Purpose-built learning for Facilities Management and Corporate Real Estate careers.
          </Typography.Title>
          <Typography.Text className="text-purple-100">
            Practical topics, affordable pricing, and simple course delivery for working professionals.
          </Typography.Text>
        </Col>
        <Col xs={24} md={8}>
          <Card styles={{ body: { background: '#cffafe', borderRadius: 20 } }} className="mx-auto max-w-52 border-0">
            <div className="mb-2 grid h-28 place-items-center rounded-xl bg-cyan-200">
              <FiUsers className="text-3xl" />
            </div>
            <Typography.Text strong className="block">
              FMNXT
            </Typography.Text>
            <Typography.Text className="text-xs">Learn - Transform - Lead</Typography.Text>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
