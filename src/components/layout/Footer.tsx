import type { ComponentProps } from 'react'
import { Button, Typography } from 'antd'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { BRAND } from '../../const/branding'

type FooterProps = Pick<ComponentProps<'footer'>, 'className'>

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`mt-16 border-t border-slate-200 bg-white pb-24 md:pb-10 ${className ?? ''}`}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img
            src={BRAND.logoFull}
            alt="FMNXT"
            className="mb-3 h-9 w-auto max-w-[200px] object-contain object-left"
            width={200}
            height={42}
            decoding="async"
          />
          <Typography.Paragraph className="!mb-4 !max-w-md !text-sm !text-slate-600">
            Affordable and practical learning for FM and CRE professionals.
          </Typography.Paragraph>
          <div className="flex gap-2">
            <Button shape="circle" icon={<FiLinkedin />} />
            <Button shape="circle" icon={<FiInstagram />} />
            <Button shape="circle" icon={<FiFacebook />} />
          </div>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Platform</p>
          <p className="mt-2">Courses</p>
          <p>Dashboard</p>
          <p>Library</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Company</p>
          <p className="mt-2">Contact</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs font-medium tracking-wide text-brand-gold-dark">
        Learn, Transform, Lead.
      </div>
    </footer>
  )
}
