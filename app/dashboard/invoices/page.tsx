'use client';
import React from 'react';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('masuk');
  }, []);

  return <p>invoices Page</p>;
}
