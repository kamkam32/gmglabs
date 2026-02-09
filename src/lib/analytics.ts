// GA4 helpers
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Meta Pixel helpers
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

export const pixelPageView = () => {
  if (typeof window !== 'undefined' && META_PIXEL_ID) {
    (window as any).fbq('track', 'PageView')
  }
}

export const pixelEvent = (name: string, options?: Record<string, any>) => {
  if (typeof window !== 'undefined' && META_PIXEL_ID) {
    (window as any).fbq('track', name, options)
  }
}
