'use client';

import React, { useRef } from 'react';
import { App, AppStatus } from '@/application/models/App';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import * as Constants from '@/app/constants';

export default function AppCard(props: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const isDisabled = props.app.status == AppStatus.COMING_SOON;

  useGSAP(() => {
    const card = cardRef.current;

    if (card) {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.95,
          filter: `blur(${Constants.FADE_BLUR_INIT_VAL}px)`,
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=25%',
            toggleActions: 'play none none reverse',
          },
          ease: 'circ.inOut',
        }
      );
    }
  });

  return (
    <Link
      ref={cardRef}
      href={!isDisabled ? `/app/${props.app.title.toLowerCase()}` : {}}
      scroll={!isDisabled}
    >
      <div
        className={`group flex flex-col gap-5 text-black bg-neutral-50 pt-10 px-8 rounded-3xl overflow-hidden ${
          isDisabled && 'cursor-default'
        }`}
      >
        <div className="flex flex-col gap-4">
          <div
            className="flex justify-between items-start
                                    transition-transform duration-300
                                    group-hover:translate-y-5"
          >
            <h2
              className="text-xl md:text-3xl font-bold truncate"
              title={props.app.title}
            >
              {props.app.title}
            </h2>
            <small className="font-semibold text-neutral-500 bg-neutral-200 px-2 py-1 rounded-full">
              {props.app.status}
            </small>
          </div>
          <p
            className="text-lg font-semibold text-neutral-400 whitespace-pre-line leading-snug
                                  transition-all duration-300
                                  group-hover:opacity-0 group-hover:blur-sm group-hover:-translate-y-2"
          >
            {props.app.description}
          </p>
        </div>
        {props.app.featured_image && (
          <img
            className="aspect-[1/1.5] object-cover object-top
                                    transition-transform duration-300
                                    group-hover:scale-125 group-hover:-translate-y-10"
            src={props.app.featured_image}
            alt="Thumbnail"
          />
        )}
      </div>
    </Link>
  );
}

interface Props {
  app: App;
}
