// albumCarouselAnimation.js
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Register GSAP plugins
gsap.registerPlugin(Draggable);

export const initAlbumCarousel = () => {
  // Initialize elements
  gsap.set('.box', {
    yPercent: -50,
    display: 'block'
  });

  gsap.set('button', {
    z: 200,
  });

  const STAGGER = 0.1;
  const DURATION = 1;
  const OFFSET = 0;
  const BOXES = gsap.utils.toArray('.box');

  const LOOP = gsap.timeline({
    paused: true, // 保持暫停狀態
    repeat: -1,
    ease: 'none',
  });

  const SHIFTS = [...BOXES, ...BOXES, ...BOXES];

  SHIFTS.forEach((BOX, index) => {
    const BOX_TL = gsap
      .timeline()
      .set(BOX, {
        xPercent: 250,
        rotateY: -50,
        opacity: 0,
        scale: 0.5,
      })
      // Opacity && Scale
      .to(
        BOX,
        {
          opacity: 1,
          scale: 1,
          duration: 0.1,
        },
        0
      )
      .to(
        BOX,
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.1,
        },
        0.9
      )
      // Panning
      .fromTo(
        BOX,
        {
          xPercent: 250,
        },
        {
          xPercent: -350,
          duration: 1,
          immediateRender: false,
          ease: 'power1.inOut',
        },
        0
      )
      // Rotations
      .fromTo(
        BOX,
        {
          rotateY: -50,
        },
        {
          rotateY: 50,
          immediateRender: false,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      // Scale && Z
      .to(
        BOX,
        {
          z: 100,
          scale: 1.25,
          duration: 0.1,
          repeat: 1,
          yoyo: true,
        },
        0.4
      )
      .fromTo(
        BOX,
        {
          zIndex: 1,
        },
        {
          zIndex: BOXES.length,
          repeat: 1,
          yoyo: true,
          ease: 'none',
          duration: 0.5,
          immediateRender: false,
        },
        0
      );
    LOOP.add(BOX_TL, index * STAGGER);
  });

  const CYCLE_DURATION = STAGGER * BOXES.length;
  const START_TIME = CYCLE_DURATION + DURATION * 0.5 + OFFSET;

  const LOOP_HEAD = gsap.fromTo(
    LOOP,
    {
      totalTime: START_TIME,
    },
    {
      totalTime: `+=${CYCLE_DURATION}`,
      duration: 1,
      ease: 'none',
      repeat: -1,
      paused: true, // 保持暫停狀態
    }
  );

  const PLAYHEAD = {
    position: 0,
  };

  const POSITION_WRAP = gsap.utils.wrap(0, LOOP_HEAD.duration());

  const SCRUB = gsap.to(PLAYHEAD, {
    position: 0,
    onUpdate: () => {
      LOOP_HEAD.totalTime(POSITION_WRAP(PLAYHEAD.position));
    },
    paused: true,
    duration: 0.25,
    ease: 'power3',
  });

  const SNAP = gsap.utils.snap(1 / BOXES.length);

  const scrollToPosition = position => {
    const SNAP_POS = SNAP(position);
    SCRUB.vars.position = SNAP_POS;
    SCRUB.invalidate().restart();
  };

  const NEXT = () => scrollToPosition(SCRUB.vars.position - 1 / BOXES.length);
  const PREV = () => scrollToPosition(SCRUB.vars.position + 1 / BOXES.length);

  // Event listeners
  const handleKeydown = (event) => {
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') NEXT();
    if (event.code === 'ArrowRight' || event.code === 'KeyD') PREV();
  };

  const handleBoxClick = (e) => {
    const BOX = e.target.closest('.box');
    if (BOX) {
      let TARGET = BOXES.indexOf(BOX);
      let CURRENT = gsap.utils.wrap(
        0,
        BOXES.length,
        Math.floor(BOXES.length * SCRUB.vars.position)
      );
      let BUMP = TARGET - CURRENT;
      if (TARGET > CURRENT && TARGET - CURRENT > BOXES.length * 0.5) {
        BUMP = (BOXES.length - BUMP) * -1;
      }
      if (CURRENT > TARGET && CURRENT - TARGET > BOXES.length * 0.5) {
        BUMP = BOXES.length + BUMP;
      }
      scrollToPosition(SCRUB.vars.position + BUMP * (1 / BOXES.length));
    }
  };

  // 滑鼠滾輪控制
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    const newPosition = SCRUB.vars.position + (delta * 0.1);
    SCRUB.vars.position = newPosition;
    SCRUB.invalidate().restart();
  };

  // Add event listeners
  document.addEventListener('keydown', handleKeydown);
  document.querySelector('.boxes')?.addEventListener('click', handleBoxClick);
  document.querySelector('.boxes')?.addEventListener('wheel', handleWheel, { passive: false });
  document.querySelector('.next')?.addEventListener('click', NEXT);
  document.querySelector('.prev')?.addEventListener('click', PREV);

  // Draggable functionality
  const draggableInstance = Draggable.create('.drag-proxy', {
    type: 'x',
    trigger: '.boxes',
    onPress() {
      this.startOffset = SCRUB.vars.position;
    },
    onDrag() {
      SCRUB.vars.position = this.startOffset + (this.startX - this.x) * 0.001;
      SCRUB.invalidate().restart();
    },
    onDragEnd() {
      scrollToPosition(SCRUB.vars.position);
    },
  });

  // Global reference for debugging
  if (typeof window !== 'undefined') {
    window.BOXES = BOXES;
  }

  // 初始化到第一個位置，但不自動播放
  scrollToPosition(0);

  // Cleanup function
  return () => {
    // Remove event listeners
    document.removeEventListener('keydown', handleKeydown);
    document.querySelector('.boxes')?.removeEventListener('click', handleBoxClick);
    document.querySelector('.boxes')?.removeEventListener('wheel', handleWheel);
    document.querySelector('.next')?.removeEventListener('click', NEXT);
    document.querySelector('.prev')?.removeEventListener('click', PREV);
    
    // Kill GSAP instances
    LOOP.kill();
    LOOP_HEAD.kill();
    SCRUB.kill();
    
    // Kill Draggable instances
    if (draggableInstance && draggableInstance[0]) {
      draggableInstance[0].kill();
    }
    
    // Clear global reference
    if (typeof window !== 'undefined') {
      delete window.BOXES;
    }
  };
};