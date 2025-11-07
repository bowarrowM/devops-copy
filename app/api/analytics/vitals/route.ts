import { NextResponse } from 'next/server';

/**
 * Web Vitals Analytics Endpoint
 *
 * Receives Web Vitals metrics from the client and logs them.
 * In production, you would typically send these to a real analytics service
 * like Google Analytics, Datadog, New Relic, or a custom database.
 */

interface VitalsPayload {
  metric: string;
  value: number;
  rating: string;
  page: string;
  timestamp: number;
}

export async function POST(request: Request) {
  try {
    const body: VitalsPayload = await request.json();

    // Validate payload
    if (!body.metric || typeof body.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid payload' },
        { status: 400 }
      );
    }

    // Log metrics (in production, send to analytics service)
    console.log('[Analytics] Web Vitals:', {
      metric: body.metric,
      value: Math.round(body.value),
      rating: body.rating,
      page: body.page,
      timestamp: new Date(body.timestamp).toISOString(),
    });

    // TODO: In production, send to analytics service
    // Examples:
    // - await sendToGoogleAnalytics(body);
    // - await sendToDatadog(body);
    // - await saveToDatabase(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Analytics] Error processing vitals:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
