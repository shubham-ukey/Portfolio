const styles = {
  primary: 'bg-brand text-white border-brand hover:bg-brand-dark hover:border-brand-dark',
  secondary: 'bg-transparent text-ink border-line hover:border-accent hover:text-accent',
}

export default function Button({ variant = 'primary', href, icon: Icon, children, className = '', ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${styles[variant]} ${className}`
  const content = (
    <>
      {Icon && <Icon size={18} aria-hidden="true" />}
      {children}
    </>
  )
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  )
}
