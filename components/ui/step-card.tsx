'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface StepCardProps {
  title: string;
  description: string;
  icon: string;
  step: number;
  className?: string;
}

export function StepCard({
  title,
  description,
  icon,
  step,
  className,
}: StepCardProps) {
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as Record<string, LucideIcon>)[
    icon.charAt(0).toUpperCase() + icon.slice(1)
  ] || LucideIcons.CircleDot;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className={cn(
        'relative flex flex-col p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all',
        className
      )}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">
          {step}
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <IconComponent className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}