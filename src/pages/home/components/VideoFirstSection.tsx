import { Col, Row, Typography } from 'antd'

export function VideoFirstSection() {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-linear-to-r from-cyan-100 via-sky-100 to-indigo-100">
      <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
      <div className="pointer-events-none absolute right-10 bottom-8 h-28 w-28 rounded-full bg-cyan-300/30 blur-2xl" />
      <Row gutter={0}>
        <Col xs={24} md={8} className="grid place-items-center bg-white/35 p-8 backdrop-blur-sm">
          <Typography.Title level={3} className="m-0 text-center text-slate-900">
            Video-First Learning
          </Typography.Title>
        </Col>
        <Col xs={24} md={16} className="p-6 md:p-8">
          <div className="rounded-2xl border border-white/60 bg-white/55 p-6 shadow-[0_10px_30px_rgba(30,41,59,0.12)] backdrop-blur-md md:p-7">
            <Typography.Text className="uppercase text-xs tracking-wider text-slate-500">Platform promise</Typography.Text>
            <Typography.Title level={1} className="my-1 text-4xl text-slate-900 md:text-5xl">
              Watch. Learn. Apply.
            </Typography.Title>
            <Typography.Paragraph className="max-w-lg text-slate-700">
              Every course is delivered as focused video modules, designed for busy professionals who need flexible
              learning.
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
    </section>
  )
}
