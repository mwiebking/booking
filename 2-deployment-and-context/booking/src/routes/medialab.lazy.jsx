import * as React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import SendRequestForm from '../components/SendRequestForm';

export const Route = createLazyFileRoute('/medialab')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Section for the request form */}
      <div style={{ marginBottom: '2rem' }}>
        <SendRequestForm />
      </div>

      {/* Placeholder for additional components */}
      <div>
        <h2>Other Components Coming Soon</h2>
        <p>Content for other components will be added here.</p>
      </div>
    </div>
  );
}
