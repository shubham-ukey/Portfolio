import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import useReveal from '../hooks/useReveal'
import { profile } from '../data/profile'

const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Write at least 10 characters.'),
})

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const inputCls =
  'w-full rounded-lg border bg-panel px-4 py-3 text-sm text-ink placeholder:text-mute/70 transition focus:border-brand'

function Field({ label, error, optional, children }) {
  return (
    <label className="block text-sm font-medium">
      <span>
        {label} {optional && <span className="font-normal text-mute">(optional)</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span role="alert" className="mt-1 block text-xs font-normal text-red-300">
          {error}
        </span>
      )}
    </label>
  )
}

export default function ContactSection() {
  const ref = useReveal()
  const [state, setState] = useState({ type: 'idle', text: '' })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (values) => {
    if (!ENDPOINT) {
      setState({ type: 'error', text: 'The form is not connected yet. Please reach out on LinkedIn instead.' })
      return
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setState({ type: 'success', text: "Message sent. I'll reply as soon as I can." })
      reset()
    } catch {
      setState({ type: 'error', text: 'Message not sent. Check your connection and try again.' })
    }
  }

  const border = (name) => (errors[name] ? 'border-red-400' : 'border-line')

  return (
    <section id="contact" ref={ref} aria-labelledby="contact-title" className="py-24">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          title="Get in touch"
          subtitle="Hiring, interviewing or planning a project? Send a message or reach out directly."
        />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3 self-start" data-reveal>
            {profile.links.email && (
              <Button href={`mailto:${profile.links.email}`} variant="secondary" icon={Mail} className="w-full justify-start">
                {profile.links.email}
              </Button>
            )}
            <Button href={profile.links.linkedin} variant="secondary" icon={Linkedin} className="w-full justify-start">
              LinkedIn
            </Button>
            <Button href={profile.links.github} variant="secondary" icon={Github} className="w-full justify-start">
              GitHub
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" data-reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input className={`${inputCls} ${border('name')}`} autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" className={`${inputCls} ${border('email')}`} autoComplete="email" aria-invalid={!!errors.email} {...register('email')} />
              </Field>
            </div>
            <Field label="Subject" optional>
              <input className={`${inputCls} border-line`} {...register('subject')} />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea rows={5} className={`${inputCls} ${border('message')}`} aria-invalid={!!errors.message} {...register('message')} />
            </Field>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" icon={isSubmitting ? Loader2 : Send} disabled={isSubmitting} className="disabled:opacity-60">
                {isSubmitting ? 'Sending…' : 'Send message'}
              </Button>
              <p role="status" aria-live="polite" className="flex items-center gap-2 text-sm">
                {state.type === 'success' && <CheckCircle2 size={18} className="text-emerald-300" aria-hidden="true" />}
                {state.type === 'error' && <AlertCircle size={18} className="text-red-300" aria-hidden="true" />}
                <span className={state.type === 'success' ? 'text-emerald-300' : 'text-red-300'}>{state.text}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
