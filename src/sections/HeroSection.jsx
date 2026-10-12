
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Terminal,
  Sparkles,
  ExternalLink,
  Github,
} from 'lucide-react'

import { FaJava } from 'react-icons/fa'

import {
  SiSpringboot,
  SiMysql,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiPostman,
} from 'react-icons/si'

import { profile } from '../data/profile'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const technologies = [
  { name: 'Java', icon: FaJava, color: '#F89820' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
]

const HeroSection = () => {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      tl.from('.hero-eyebrow', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title-line',
          {
            y: 65,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          '-=0.2',
        )
        .from(
          '.hero-description',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.35',
        )
        .from(
          '.hero-actions',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3',
        )
        .from(
          '.hero-tech',
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.07,
          },
          '-=0.2',
        )
        .from(
          '.hero-visual',
          {
            x: 35,
            opacity: 0,
            duration: 0.9,
          },
          '-=1.1',
        )

      gsap.to('.floating-card', {
        y: -10,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-glow', {
        scale: 1.15,
        opacity: 0.65,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        '.developer-word',
        {
          x: -25,
          opacity: 0.15,
        },
        {
          x: 25,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    },
    {
      scope: sectionRef,
    },
  )

  const coreStack = profile?.coreStack ?? []

  const getTechIcon = (techName) => {
    const normalizedName = techName.toLowerCase()

    if (normalizedName.includes('java') && !normalizedName.includes('script')) {
      return FaJava
    }

    if (normalizedName.includes('spring')) return SiSpringboot
    if (normalizedName.includes('react')) return SiReact
    if (normalizedName.includes('mysql')) return SiMysql
    if (normalizedName.includes('javascript')) return SiJavascript
    if (normalizedName.includes('tailwind')) return SiTailwindcss
    if (normalizedName.includes('git')) return SiGit
    if (normalizedName.includes('postman')) return SiPostman

    return Code2
  }

  const getTechColor = (techName) => {
    const normalizedName = techName.toLowerCase()

    if (normalizedName.includes('java') && !normalizedName.includes('script')) {
      return '#F89820'
    }

    if (normalizedName.includes('spring')) return '#6DB33F'
    if (normalizedName.includes('react')) return '#61DAFB'
    if (normalizedName.includes('mysql')) return '#4479A1'
    if (normalizedName.includes('javascript')) return '#F7DF1E'
    if (normalizedName.includes('tailwind')) return '#38BDF8'
    if (normalizedName.includes('git')) return '#F05032'
    if (normalizedName.includes('postman')) return '#FF6C37'

    return '#60A5FA'
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#070B14] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12 lg:pt-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow absolute right-[5%] top-[15%] h-72 w-72 rounded-full bg-blue-600/20 blur-[110px] sm:h-96 sm:w-96" />

        <div className="absolute bottom-[5%] left-[5%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left content */}
        <div className="relative z-10">
          <div className="hero-eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Available for opportunities
          </div>

          <div className="overflow-hidden">
            <p className="hero-title-line mb-3 text-lg font-medium tracking-wide text-slate-300 sm:text-xl">
              Hi, I'm{' '}
              <span className="font-semibold text-white">
                {profile?.name ?? 'Shubham Ukey'}
              </span>
            </p>
          </div>

          <div className="overflow-hidden">
            <h1 className="hero-title-line text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
              Full Stack
            </h1>
          </div>

          <div className="overflow-hidden">
            <h1 className="hero-title-line mt-2 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Java Developer
              </span>
              <span className="text-cyan-400">.</span>
            </h1>
          </div>

          <div className="hero-description mt-7 max-w-xl">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              I build modern web applications with{' '}
              <span className="font-medium text-slate-200">
                Java, Spring Boot, React.js and MySQL
              </span>
              . I'm continuously learning, building projects, and improving my
              skills to become a well-rounded full stack developer.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-actions mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
            >
              <Mail size={18} />
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 px-5 py-3.5 font-medium text-slate-400 transition hover:border-slate-600 hover:text-white"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Technology stack */}
          <div className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Technologies I work with
            </p>

            <div className="flex max-w-xl flex-wrap gap-3">
              {(coreStack.length > 0
                ? coreStack
                : ['Java', 'Spring Boot', 'React.js', 'MySQL']
              ).map((tech, index) => {
                const Icon = getTechIcon(tech)
                const color = getTechColor(tech)

                return (
                  <div
                    key={`${tech}-${index}`}
                    className="hero-tech group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-800"
                    title={tech}
                  >
                    <Icon
                      size={17}
                      style={{ color }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-300 transition group-hover:text-white">
                      {tech}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5 text-sm text-slate-500">
            <span className="h-px w-8 bg-slate-700" />

            <a
              href="https://github.com/shubham-ukey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Github size={17} />
              GitHub
              <ExternalLink size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-ukey-a1451a230/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              LinkedIn
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-visual relative mx-auto w-full max-w-xl">
          {/* Decorative glow */}
          <div className="absolute inset-8 rounded-full bg-blue-600/10 blur-[90px]" />

          {/* Floating Java card */}
          <div className="floating-card absolute -left-3 top-10 z-20 hidden items-center gap-3 rounded-xl border border-orange-400/20 bg-[#101827]/95 p-3 shadow-2xl shadow-black/30 sm:flex md:-left-8">
            <div className="rounded-lg bg-orange-400/10 p-2.5">
              <FaJava size={25} color="#F89820" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Java</p>
              <p className="text-xs text-slate-500">Backend</p>
            </div>
          </div>

          {/* Floating React card */}
          <div className="floating-card absolute -right-2 top-32 z-20 hidden items-center gap-3 rounded-xl border border-cyan-400/20 bg-[#101827]/95 p-3 shadow-2xl shadow-black/30 sm:flex md:-right-6">
            <div className="rounded-lg bg-cyan-400/10 p-2.5">
              <SiReact size={24} color="#61DAFB" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">React.js</p>
              <p className="text-xs text-slate-500">Frontend</p>
            </div>
          </div>

          {/* Code editor */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0B1120]/95 shadow-2xl shadow-blue-950/40">
            {/* Editor header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#111827] px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Code2 size={14} />
                Developer.java
              </div>

              <Terminal size={16} className="text-slate-500" />
            </div>

            {/* Editor content */}
            <div className="overflow-x-auto p-5 sm:p-7">
              <div className="min-w-[290px] font-mono text-[12px] leading-[2.15] sm:text-sm">
                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    01
                  </span>
                  <span className="text-purple-400">public class</span>
                  <span className="ml-2 text-yellow-200">Developer</span>
                  <span className="text-slate-300"> {'{'}</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    02
                  </span>
                  <span className="pl-5 text-purple-400">private final</span>
                  <span className="ml-2 text-cyan-300">String</span>
                  <span className="ml-2 text-slate-200">name</span>
                  <span className="text-slate-300">;</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    03
                  </span>
                  <span className="pl-5 text-purple-400">private final</span>
                  <span className="ml-2 text-cyan-300">String</span>
                  <span className="ml-2 text-slate-200">focus</span>
                  <span className="text-slate-300">;</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    04
                  </span>
                  <span className="text-slate-600">
                    {'// Always learning and building'}
                  </span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    05
                  </span>
                  <span className="pl-5 text-purple-400">public</span>
                  <span className="ml-2 text-yellow-200">Developer</span>
                  <span className="text-slate-300">(</span>
                  <span className="text-cyan-300">String</span>
                  <span className="ml-2 text-slate-200">name</span>
                  <span className="text-slate-300">) {'{'}</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    06
                  </span>
                  <span className="pl-10 text-purple-400">this</span>
                  <span className="text-slate-300">.</span>
                  <span className="text-slate-200">name</span>
                  <span className="text-slate-300"> = </span>
                  <span className="text-slate-200">name</span>
                  <span className="text-slate-300">;</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    07
                  </span>
                  <span className="pl-10 text-purple-400">this</span>
                  <span className="text-slate-300">.</span>
                  <span className="text-slate-200">focus</span>
                  <span className="text-slate-300"> = </span>
                  <span className="text-green-300">
                    "Full Stack Development"
                  </span>
                  <span className="text-slate-300">;</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    08
                  </span>
                  <span className="pl-5 text-slate-300">{'}'}</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    09
                  </span>
                  <span className="text-slate-600">
                    {'// Skills in progress'}
                  </span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    10
                  </span>
                  <span className="pl-5 text-purple-400">String[]</span>
                  <span className="ml-2 text-slate-200">stack</span>
                  <span className="text-slate-300"> = {'{'}</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    11
                  </span>
                  <span className="pl-10 text-green-300">"Java"</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-green-300">"Spring Boot"</span>
                  <span className="text-slate-300">,</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    12
                  </span>
                  <span className="pl-10 text-green-300">"React.js"</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-green-300">"MySQL"</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    13
                  </span>
                  <span className="pl-5 text-slate-300">{'}'};</span>
                </div>

                <div className="flex">
                  <span className="mr-5 select-none text-right text-slate-600">
                    14
                  </span>
                  <span className="text-slate-300">{'}'}</span>
                  <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-cyan-400" />
                </div>
              </div>
            </div>

            {/* Editor footer */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-[#111827] px-4 py-3 text-[11px] text-slate-500 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Ready to build
                </span>
              </div>

              <span>Java · UTF-8</span>
            </div>
          </div>

          {/* Floating Spring Boot card */}
          <div className="floating-card absolute -bottom-7 left-4 z-20 flex items-center gap-3 rounded-xl border border-green-400/20 bg-[#101827]/95 p-3 shadow-2xl shadow-black/30 sm:left-10">
            <div className="rounded-lg bg-green-400/10 p-2.5">
              <SiSpringboot size={23} color="#6DB33F" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Spring Boot</p>
              <p className="text-xs text-slate-500">Backend APIs</p>
            </div>
          </div>

          {/* MySQL card */}
          <div className="floating-card absolute -bottom-8 right-3 z-20 hidden items-center gap-3 rounded-xl border border-blue-400/20 bg-[#101827]/95 p-3 shadow-2xl shadow-black/30 sm:flex sm:right-10">
            <div className="rounded-lg bg-blue-400/10 p-2.5">
              <SiMysql size={23} color="#4479A1" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">MySQL</p>
              <p className="text-xs text-slate-500">Database</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll text */}
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 hidden w-full overflow-hidden opacity-20 lg:block">
        <p className="developer-word whitespace-nowrap text-center text-[11vw] font-black leading-none tracking-tighter text-slate-500">
          DEVELOPER · BUILDER · LEARNER
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="relative z-10 mx-auto mt-24 flex w-fit flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-300"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-700 p-1.5">
          <span className="h-2 w-1 rounded-full bg-cyan-400" />
        </span>
      </a>
    </section>
  )
}

export default HeroSection
