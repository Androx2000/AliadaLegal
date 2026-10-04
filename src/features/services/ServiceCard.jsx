import { ArrowRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Icon className="size-5" />
          </div>

          {service.featured && (
            <Badge variant="secondary">
              Popular
            </Badge>
          )}
        </div>

        <CardTitle className="font-heading text-2xl">
          {service.title}
        </CardTitle>

        <CardDescription className="text-base leading-7">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <a
          href={`#${service.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          Conocer más

          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  )
}

export default ServiceCard