import codecs

with codecs.open('Aliada Legal.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = "const focusRing ="
end_marker = "function Navbar("

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    print(f"start: {start_idx}, end: {end_idx}")
else:
    # Need to keep the NAVEGACION comment and any code between PhoneField and Navbar if there is any.
    # Actually, PhoneField is the last primitive. Let's just replace up to Navbar.
    # Wait, the NAV constant is between them!
    
    nav_idx = content.find("const NAV =", start_idx)
    if nav_idx != -1:
        end_idx = content.rfind("/* =", start_idx, nav_idx)
        if end_idx == -1:
            end_idx = nav_idx

shadcn_primitives = """
const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    accent: "bg-[#D4AF37] text-white hover:bg-[#DEBF5C]",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

function PageHeader({ id, title, description, eyebrow, align = 'left' }) {
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[.12em] text-[#D4AF37]">{eyebrow}</p>}
      <h1 id={id} className="font-display text-4xl leading-tight text-foreground sm:text-5xl">{title}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
    </header>
  );
}

function Reveal({ children, className }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .16 }}
      transition={{ duration: .6, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Badge = ({ tone = 'depende', children }) => (
  <span className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2', FLAG_META[tone].cls)}>{children}</span>
);

function Field({ id, label, hint, error, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>
      {hint && <p id={id + '-hint'} className="text-[0.8rem] text-muted-foreground">{hint}</p>}
      {children}
      {error && <p id={id + '-error'} role="alert" className="text-[0.8rem] font-medium text-destructive">{error}</p>}
    </div>
  );
}

const Input = React.forwardRef(({ className, type, invalid, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        invalid && "border-destructive focus-visible:ring-destructive",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

const Select = React.forwardRef(({ className, invalid, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
        invalid && "border-destructive focus:ring-destructive",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none"><path d="m6 9 6 6 6-6"/></svg>
  </div>
))
Select.displayName = "Select"

const Textarea = React.forwardRef(({ className, invalid, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        invalid && "border-destructive focus-visible:ring-destructive",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

function PhoneField({ id, value, onChange, invalid }) {
  const ref = React.useRef(null);
  const iti = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.intlTelInput) return;
    iti.current = window.intlTelInput(ref.current, {
      initialCountry: 'us',
      onlyCountries: ['us', 'sv', 'mx', 'gt', 'hn', 'co', 'ec', 'pe', 'ar'],
      separateDialCode: true,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.12/build/js/utils.js'
    });
    const el = ref.current;
    const notify = () => {
      const val = iti.current && iti.current.getNumber ? (iti.current.getNumber() || el.value) : el.value;
      const valid = iti.current ? iti.current.isValidNumber() : false;
      onChange(val, valid);
    };
    el.addEventListener('countrychange', notify);
    el.addEventListener('input', notify);
    return () => { 
      el.removeEventListener('countrychange', notify); 
      el.removeEventListener('input', notify); 
      if (iti.current) iti.current.destroy(); 
    };
  }, []);
  return (
    <input
      ref={ref} id={id} type="tel" inputMode="tel" defaultValue={value}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        invalid && "border-destructive focus-visible:ring-destructive"
      )}
    />
  );
}

"""

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + shadcn_primitives + "\n" + content[end_idx:]

with codecs.open('Aliada Legal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Primitives updated to Shadcn")
