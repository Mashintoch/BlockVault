import React from 'react';
import Lottie from 'react-lottie-player';

import Layout from '@/components/Layout';
import error404Animation from '@/lottie/404-website-error-animation.json';

export default function Error404() {
  return (
    <Layout>
      <div className="flex justify-center h-screen items-center">
        <div className="text-center">
          <Lottie animationData={error404Animation} loop play />
          <span className="text-lg text-primary">
            We cannot find your page{' '}
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              <a href="/">Home</a>
            </button>
          </span>
        </div>
      </div>
    </Layout>
  );
}
