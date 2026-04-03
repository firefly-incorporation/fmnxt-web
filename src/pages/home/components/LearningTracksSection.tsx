import { Card, Col, Row, Typography } from 'antd'

type Track = { title: string; copy: string }

type Props = {
  tracks: Track[]
}

export function LearningTracksSection({ tracks }: Props) {
  return (
    <section className="rounded-[34px] border border-slate-200 bg-linear-to-r from-slate-50 to-indigo-50 p-6 md:p-8">
      <div className="mb-5 text-center">
        <Typography.Title level={2} className="mb-2 text-[24px] leading-tight md:text-[30px]">
          Learning Tracks
        </Typography.Title>
        <Typography.Paragraph className="mb-0 text-slate-600">
          Explore the core areas that matter most for FM and CRE professionals.
        </Typography.Paragraph>
      </div>
      <Row gutter={[16, 16]}>
        {tracks.map((track) => (
          <Col key={track.title} xs={24} md={8}>
            <Card className="h-full rounded-2xl border-slate-200">
              <Typography.Text strong>{track.title}</Typography.Text>
              <Typography.Paragraph className="mt-2 mb-0 text-slate-600">{track.copy}</Typography.Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
