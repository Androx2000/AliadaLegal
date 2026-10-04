function ProcessStep({ step, isLast }) {
  const Icon = step.icon

  return (
    <article className="relative">
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-12 top-6 hidden h-px w-[calc(100%-3rem)] bg-border lg:block"
        />
      )}

      <div className="flex items-start gap-4">
        <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="size-5" />
        </div>

        <div>
          <span className="text-sm font-semibold text-accent">
            {step.number}
          </span>

          <h3 className="mt-1 font-heading text-xl">
            {step.title}
          </h3>

          <p className="mt-2 leading-7 text-muted-foreground">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProcessStep