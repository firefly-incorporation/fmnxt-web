import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button, Typography} from 'antd';

type Theme = 'emerald' | 'indigo';

const laneClass: Record<Theme, string> = {
  emerald: 'inline-flex items-center gap-3 rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-2 text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)]',
  indigo: 'inline-flex items-center gap-3 rounded-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-gold-dark px-4 py-2 text-white shadow-[0_8px_20px_rgba(0,30,61,0.28)]'
};

const prevBtnClass: Record<Theme, string> = {
  emerald: 'rounded-full border-emerald-300 bg-white text-emerald-700 shadow-sm',
  indigo: 'rounded-full border-brand-gold/40 bg-white text-brand-navy shadow-sm'
};

type Props = {
  theme: Theme;
  ariaLabelLeft: string;
  ariaLabelRight: string;
  onPrev: () => void;
  onNext: () => void;
};

export function CourseSliderControls({theme, ariaLabelLeft, ariaLabelRight, onPrev, onNext}: Props) {
  return (
    <div className='mt-4 flex items-center justify-center gap-3'>
      <Button size='large' className={prevBtnClass[theme]} shape='circle' icon={<LeftOutlined />} aria-label={ariaLabelLeft} onClick={onPrev} />
      <div className={laneClass[theme]}>
        <Typography.Text className='text-xs! font-semibold text-white!'>Swipe the lane</Typography.Text>
        <span className='h-2 w-2 rounded-full bg-white/70' />
        <span className='h-2 w-2 rounded-full bg-white' />
        <span className='h-2 w-2 rounded-full bg-white/70' />
      </div>
      <Button size='large' type='primary' className='rounded-full shadow-md' shape='circle' icon={<RightOutlined />} aria-label={ariaLabelRight} onClick={onNext} />
    </div>
  );
}
