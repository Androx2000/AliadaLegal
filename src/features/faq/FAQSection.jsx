import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { faqData } from './faq.data'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleQuestion(index) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    )
  }

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Resolvemos tus dudas
          </p>

          <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Algunas respuestas pueden variar según el país y el documento
            que necesites.
          </p>
        </div>

        <div className="mt-10 divide-y rounded-2xl border bg-card px-5 sm:px-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="max-w-2xl pb-5 text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection