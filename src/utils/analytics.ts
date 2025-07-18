// Analytics and tracking utilities

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = false;

  constructor() {
    // Only enable in production
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    if (!this.isEnabled) return;

    this.track('page_view', {
      path,
      title: title || document.title,
      referrer: document.referrer,
      timestamp: Date.now()
    });

    // Send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title
      });
    }
  }

  // Track user interactions
  trackEvent(name: string, properties?: Record<string, any>) {
    if (!this.isEnabled) return;

    this.track(name, properties);

    // Send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', name, properties);
    }
  }

  // Track e-commerce events
  trackPurchase(productId: string, productName: string, category: string) {
    this.trackEvent('purchase_intent', {
      product_id: productId,
      product_name: productName,
      category,
      timestamp: Date.now()
    });
  }

  // Track search events
  trackSearch(query: string, results: number) {
    this.trackEvent('search', {
      search_term: query,
      results_count: results,
      timestamp: Date.now()
    });
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number, unit: string = 'ms') {
    this.trackEvent('performance', {
      metric,
      value,
      unit,
      timestamp: Date.now()
    });
  }

  // Track errors
  trackError(error: Error, context?: string) {
    this.trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: Date.now()
    });
  }

  private track(name: string, properties?: Record<string, any>) {
    const event: AnalyticsEvent = {
      name,
      properties,
      timestamp: Date.now()
    };

    this.events.push(event);

    // Keep only last 100 events to prevent memory leaks
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  // Get stored events (for debugging)
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents() {
    this.events = [];
  }
}

export const analytics = new Analytics();

// Web Vitals tracking
export const trackWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Core Web Vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => analytics.trackPerformance('CLS', metric.value));
      getFID((metric) => analytics.trackPerformance('FID', metric.value));
      getFCP((metric) => analytics.trackPerformance('FCP', metric.value));
      getLCP((metric) => analytics.trackPerformance('LCP', metric.value));
      getTTFB((metric) => analytics.trackPerformance('TTFB', metric.value));
    }).catch(() => {
      // Fallback if web-vitals is not available
      console.warn('Web Vitals library not available');
    });
  }
};

// Error boundary tracking
export const trackErrorBoundary = (error: Error, errorInfo: any) => {
  analytics.trackError(error, 'error_boundary');
  
  // Send to external error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry, LogRocket, etc.
    console.error('Error Boundary:', error, errorInfo);
  }
};