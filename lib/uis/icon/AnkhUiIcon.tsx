"use client";
import { Auth } from '@/auth/Auth';
import { type LucideProps } from "lucide-react";
import { useState } from 'react';

export function AnkhUiIcon({ name, color, size }: LucideProps) {
  const [Icon, setIcon] = useState(null);
  import(`${name}`).then((setIcon));

  return (
    <Auth.ReadRole>
      {Icon}
    </Auth.ReadRole>
  );
}
