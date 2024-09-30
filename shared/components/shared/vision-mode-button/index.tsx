import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './VisionModeButton.module.scss';
import { Eye, EyeOff } from 'lucide-react';
import { useVisionModeStore } from '@/shared/store';

interface Props {
  className?: string;
}

export const VisionModeButton: React.FC<Props> = ({ className }) => {
  const { isVisionMode, setIsVisionMode, getStateOfStorage } = useVisionModeStore();

  React.useEffect(() => {
    getStateOfStorage(window.localStorage.getItem('name'));
  }, []);

  const setVisionModeAndCookies = () => {
    if (!isVisionMode) {
      window.localStorage.setItem('name', 'true');
      console.log(true);
    } else {
      console.log(false);
      window.localStorage.setItem('name', 'false');
    }
    setIsVisionMode();
  };
  return (
    <div className={cn(styles.root, className)} onClick={() => setVisionModeAndCookies()}>
      {isVisionMode ? <EyeOff /> : <Eye />}
    </div>
  );
};
